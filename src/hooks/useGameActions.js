
import { useCallback } from 'react';
import {
    GAME_CONFIG,
    GENERATORS,
    UPGRADES,
    PRESTIGE_UPGRADES,
    TIME_REVERSAL_UPGRADES,
    COSMIC_ASCENSION_UPGRADES,
    VOID_INTEGRATION_UPGRADES,
    REALITY_OVERWRITE_UPGRADES,
    ARTIFACTS,
    PRESTIGE_LAYERS,
    ACHIEVEMENTS,
    getBulkGeneratorCost,
    getGeneratorProduction,
    calculateLayerCurrency,
    applyUpgradeEffect,
    calculateTotalMultiplier
} from '../data/gameData';
import { defaultState } from './useGameSave';

export const useGameActions = (setGameState) => {
    // 클릭 핸들러
    const handleClick = useCallback(() => {
        setGameState(prev => {
            const totalMultiplier = calculateTotalMultiplier(prev.prestigeLayers, prev.globalMultiplier, prev.darkMatterEfficiency);

            // 기본 클릭
            let clickGain = prev.clickPower * totalMultiplier;

            // 공허의 클릭 (생산량의 N% 추가)
            if (prev.clickProductionPercent > 0) {
                let currentProduction = 0;
                GENERATORS.forEach(generator => {
                    const genState = prev.generators[generator.id];
                    if (genState) {
                        currentProduction += getGeneratorProduction(generator, genState.count, genState.multiplier);
                    }
                });
                clickGain += (currentProduction * totalMultiplier) * prev.clickProductionPercent;
            }

            return {
                ...prev,
                energy: prev.energy + clickGain,
                totalEnergyEarned: prev.totalEnergyEarned + clickGain,
                totalEnergyAllTime: prev.totalEnergyAllTime + clickGain,
                totalClicks: prev.totalClicks + 1,
            };
        });
    }, [setGameState]);

    // 생성기 구매
    const buyGenerator = useCallback((generatorId, quantity = 1) => {
        setGameState(prev => {
            const generator = GENERATORS.find(g => g.id === generatorId);
            const currentCount = prev.generators[generatorId].count;
            const costReduction = prev.costReduction;
            const cost = getBulkGeneratorCost(generator, currentCount, quantity, costReduction);

            if (prev.energy >= cost) {
                return {
                    ...prev,
                    energy: prev.energy - cost,
                    generators: {
                        ...prev.generators,
                        [generatorId]: {
                            ...prev.generators[generatorId],
                            count: currentCount + quantity
                        }
                    }
                };
            }
            return prev;
        });
    }, [setGameState]);

    // 업그레이드 구매
    const buyUpgrade = useCallback((upgradeId) => {
        setGameState(prev => {
            const upgrade = UPGRADES.find(u => u.id === upgradeId);
            if (!upgrade || prev.upgrades.includes(upgradeId)) return prev;
            if (upgrade.requires && !prev.upgrades.includes(upgrade.requires)) return prev;

            if (prev.energy >= upgrade.cost) {
                const newState = {
                    ...prev,
                    energy: prev.energy - upgrade.cost,
                    upgrades: [...prev.upgrades, upgradeId],
                };

                // 효과 적용
                if (upgrade.effect.type === 'click_power') {
                    newState.clickPower = prev.clickPower + upgrade.effect.value;
                } else if (upgrade.effect.type === 'generator_multiplier') {
                    newState.generators = {
                        ...prev.generators,
                        [upgrade.effect.generatorId]: {
                            ...prev.generators[upgrade.effect.generatorId],
                            multiplier: prev.generators[upgrade.effect.generatorId].multiplier * upgrade.effect.value,
                        },
                    };
                } else if (upgrade.effect.type === 'global_multiplier') {
                    newState.globalMultiplier = prev.globalMultiplier * upgrade.effect.value;
                }

                return newState;
            }
            return prev;
        });
    }, [setGameState]);

    // 레이어별 프레스티지 실행
    const doPrestige = useCallback((layerIdInput) => {
        setGameState(prev => {
            const layerId = parseInt(layerIdInput); // 정수 변환 보장
            const layer = PRESTIGE_LAYERS[layerId];
            if (!layer) return prev;

            let currentResource = 0;
            if (layer.resourceType === 'energy') {
                currentResource = prev.totalEnergyEarned; // 1단계는 총 에너지 기준
            } else if (layer.resourceType.startsWith('prestige_currency_')) {
                const targetLayerId = parseInt(layer.resourceType.split('_')[2]);
                currentResource = prev.prestigeLayers[targetLayerId].currency;
            }

            const earnedCurrency = calculateLayerCurrency(layerId, currentResource);
            if (earnedCurrency <= 0) return prev;

            // 리셋 로직
            const nextState = { ...prev };

            // 1단계 리셋 (에너지, 생성기, 업그레이드) - 모든 프레스티지는 기본 게임을 리셋함
            if (layerId >= 1) {
                // 시간 역행 업그레이드 효과 확인 (2단계 이상 리셋 시 적용되지만, 1단계 리셋 로직 안에서 처리해야 함)
                // 하지만 layerId가 1일 때도 2단계 업그레이드(영구) 효과가 적용되어야 하는가?
                // 보통 상위 레이어 업그레이드는 하위 레이어 리셋 시 혜택을 줌.
                // 즉, 1단계 리셋(Dimension Jump) 시 2단계 업그레이드(Time Reversal Upgrades) 효과 적용.

                const layer2Upgrades = prev.prestigeLayers[2]?.upgrades || [];
                let keepEnergyPercent = 0;
                let keepGeneratorCount = 0;

                layer2Upgrades.forEach(upgId => {
                    const upg = TIME_REVERSAL_UPGRADES.find(u => u.id === upgId);
                    if (upg) {
                        if (upg.effect.type === 'keep_energy') keepEnergyPercent += upg.effect.value;
                        if (upg.effect.type === 'keep_generators') keepGeneratorCount += upg.effect.value;
                    }
                });

                nextState.energy = Math.floor(prev.energy * keepEnergyPercent);
                nextState.totalEnergyEarned = 0; // 이번 생애 초기화 (통계용이라 0으로)
                nextState.totalClicks = 0;
                nextState.clickPower = GAME_CONFIG.CLICK_POWER;

                // 생성기 초기화 (새로운 생성기 포함)
                nextState.generators = GENERATORS.reduce((acc, gen) => {
                    // 생성기 보존 효과
                    const preservedCount = Math.min(prev.generators[gen.id]?.count || 0, keepGeneratorCount);
                    acc[gen.id] = { count: preservedCount, multiplier: 1 };
                    return acc;
                }, {});

                nextState.upgrades = [];
                nextState.startTime = Date.now();
                // 업적, 유물, totalEnergyAllTime은 유지
            }

            // 상위 단계 리셋 시 하위 단계 프레스티지 자원 및 업그레이드 초기화
            // "환생을 하면 자동으로 그 아래것들까지 환생(대신 보상 없는 환생)" -> 초기화 용도
            for (let i = 1; i < layerId; i++) {
                nextState.prestigeLayers[i] = {
                    count: 0, // 카운트도 초기화
                    currency: 0,
                    upgrades: [] // 업그레이드(자동 구매 등)도 초기화되어야 함
                };
            }

            // 해당 단계 보상 지급
            nextState.prestigeLayers[layerId] = {
                ...prev.prestigeLayers[layerId],
                count: prev.prestigeLayers[layerId].count + 1,
                currency: prev.prestigeLayers[layerId].currency + earnedCurrency
            };

            // 총 프레스티지 횟수 증가 (현재 단계만)
            nextState.prestigeCount = (prev.prestigeCount || 0) + 1;

            // 영구 효과 재계산 (모든 레이어 및 유물)
            // 초기화된 상태에서 시작하므로 기본값으로 리셋 후 다시 적용
            nextState.globalMultiplier = 1;
            nextState.costReduction = 1;
            nextState.tickRateMultiplier = 1;
            nextState.clickProductionPercent = 0;
            nextState.autoClicker = 0;
            nextState.darkMatterEfficiency = 1;

            let achievementBoost = 1; // 업적 보상 배율

            // 1. 프레스티지 업그레이드 재적용 (순서 변경: 업그레이드가 업적에 영향을 줄 수 있음)
            // 1단계 업그레이드 재적용 (초기화되었다면 빈 배열이므로 적용 안 됨)
            const layer1Upgrades = nextState.prestigeLayers[1]?.upgrades || [];
            layer1Upgrades.forEach(upgId => {
                const upg = PRESTIGE_UPGRADES.find(u => u.id === upgId);
                if (upg) {
                    if (upg.effect.type === 'click_multiplier') nextState.clickPower *= upg.effect.value;
                    if (upg.effect.type === 'global_multiplier') nextState.globalMultiplier *= upg.effect.value;
                    if (upg.effect.type === 'cost_reduction') nextState.costReduction *= upg.effect.value;
                    if (upg.effect.type === 'click_production_percent') nextState.clickProductionPercent += upg.effect.value;
                    if (upg.effect.type === 'tick_speed') nextState.tickRateMultiplier *= upg.effect.value;
                    if (upg.effect.type === 'auto_click') nextState.autoClicker += upg.effect.value;
                    if (upg.effect.type === 'achievement_boost') achievementBoost *= upg.effect.value;
                }
            });

            // 2. 업적 효과 재적용
            ACHIEVEMENTS.forEach(ach => {
                if (nextState.achievements.includes(ach.id)) {
                    // 보상 배율 적용 (Multiplier 타입인 경우: 1 + (Value - 1) * Boost)
                    let rewardValue = ach.reward.value;
                    if (achievementBoost > 1 && (ach.reward.type === 'global_multiplier' || ach.reward.type === 'click_multiplier')) {
                        rewardValue = 1 + (rewardValue - 1) * achievementBoost;
                    }

                    if (ach.reward.type === 'global_multiplier') nextState.globalMultiplier *= rewardValue;
                    if (ach.reward.type === 'click_multiplier') nextState.clickPower *= rewardValue;
                }
            });

            // 3. 유물 효과 재적용
            ARTIFACTS.forEach(art => {
                if (nextState.artifacts.includes(art.id)) {
                    if (art.effect.type === 'cost_reduction') nextState.costReduction *= art.effect.value;
                    if (art.effect.type === 'dark_matter_boost') nextState.darkMatterEfficiency *= art.effect.value;
                    if (art.effect.type === 'tick_speed') nextState.tickRateMultiplier *= art.effect.value;
                }
            });

            return nextState;
        });
    }, [setGameState]);

    // 프레스티지 업그레이드 구매 (1~5단계)
    const buyPrestigeUpgrade = useCallback((upgradeId, layerId = 1) => {
        setGameState(prev => {
            let upgradeList = [];
            if (layerId === 1) upgradeList = PRESTIGE_UPGRADES;
            else if (layerId === 2) upgradeList = TIME_REVERSAL_UPGRADES;
            else if (layerId === 3) upgradeList = COSMIC_ASCENSION_UPGRADES;
            else if (layerId === 4) upgradeList = VOID_INTEGRATION_UPGRADES;
            else if (layerId === 5) upgradeList = REALITY_OVERWRITE_UPGRADES;

            const upgrade = upgradeList.find(u => u.id === upgradeId);

            if (!upgrade || prev.prestigeLayers[layerId].upgrades.includes(upgradeId)) return prev;

            if (prev.prestigeLayers[layerId].currency >= upgrade.cost) {
                const newState = {
                    ...prev,
                    prestigeLayers: {
                        ...prev.prestigeLayers,
                        [layerId]: {
                            ...prev.prestigeLayers[layerId],
                            currency: prev.prestigeLayers[layerId].currency - upgrade.cost,
                            upgrades: [...prev.prestigeLayers[layerId].upgrades, upgradeId],
                        }
                    },
                };

                // 즉시 효과 적용 (모든 레이어 공통 처리)
                // 일부 효과는 useGameLoop나 렌더링 시 적용되지만, 상태값 자체를 영구적으로 변화시키는 것은 여기서 처리
                if (upgrade.effect.type === 'click_multiplier') newState.clickPower *= upgrade.effect.value;
                if (upgrade.effect.type === 'global_multiplier') newState.globalMultiplier *= upgrade.effect.value;
                if (upgrade.effect.type === 'cost_reduction') newState.costReduction *= upgrade.effect.value;
                if (upgrade.effect.type === 'click_production_percent') newState.clickProductionPercent += upgrade.effect.value;
                if (upgrade.effect.type === 'tick_speed') newState.tickRateMultiplier *= upgrade.effect.value;
                if (upgrade.effect.type === 'auto_click') newState.autoClicker += upgrade.effect.value;

                // 업적 부스트 (1단계 전용이었으나 확장 가능)
                if (upgrade.effect.type === 'achievement_boost') {
                    const boost = upgrade.effect.value;
                    ACHIEVEMENTS.forEach(ach => {
                        if (newState.achievements.includes(ach.id)) {
                            let baseVal = ach.reward.value;
                            let oldEffect = baseVal;
                            let newEffect = 1 + (baseVal - 1) * boost;
                            if (ach.reward.type === 'global_multiplier') newState.globalMultiplier *= (newEffect / oldEffect);
                            if (ach.reward.type === 'click_multiplier') newState.clickPower *= (newEffect / oldEffect);
                        }
                    });
                }

                return newState;
            }
            return prev;
        });
    }, [setGameState]);

    // 치트
    const addEnergy = useCallback((amount) => {
        setGameState(prev => ({ ...prev, energy: prev.energy + amount, totalEnergyEarned: prev.totalEnergyEarned + amount }));
    }, [setGameState]);

    return {
        handleClick,
        buyGenerator,
        buyUpgrade,
        doPrestige,
        buyPrestigeUpgrade,
        addEnergy
    };
};
