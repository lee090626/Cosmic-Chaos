import { useEffect } from 'react';
import { GAME_CONFIG, GENERATORS, UPGRADES, PRESTIGE_UPGRADES, TIME_REVERSAL_UPGRADES, COSMIC_ASCENSION_UPGRADES, VOID_INTEGRATION_UPGRADES, REALITY_OVERWRITE_UPGRADES, calculateLayerCurrency, getGeneratorProduction, getMaxBuyableCount, getGeneratorCost, getBulkGeneratorCost, calculateTotalMultiplier, calculatePassiveGain, applyUpgradeEffect } from '../data/gameData';

export const useGameLoop = (setGameState, tickRateMultiplier) => {
    useEffect(() => {
        const tickRate = GAME_CONFIG.TICK_RATE * tickRateMultiplier;

        const interval = setInterval(() => {
            setGameState(prev => {
                const now = Date.now();
                const deltaTime = now - prev.lastTick;
                // 틱 보정
                const ticks = deltaTime / tickRate;

                let baseProduction = 0;
                GENERATORS.forEach(generator => {
                    const genState = prev.generators[generator.id];
                    if (genState) {
                        baseProduction += getGeneratorProduction(generator, genState.count, genState.multiplier);
                    }
                });

                // Calculate total multiplier using utility function
                const totalMultiplier = calculateTotalMultiplier(prev.prestigeLayers, prev.globalMultiplier, prev.darkMatterEfficiency);
                const energyGain = baseProduction * ticks * totalMultiplier;

                // 자동 클릭 처리
                let autoClickGain = 0;
                if (prev.autoClicker > 0) {
                    const clickVal = prev.clickPower * totalMultiplier;
                    const voidClickVal = (baseProduction * totalMultiplier) * prev.clickProductionPercent;
                    const clicksPerTick = prev.autoClicker * (deltaTime / 1000);
                    autoClickGain = (clickVal + voidClickVal) * clicksPerTick;
                }

                let nextState = {
                    ...prev,
                    energy: prev.energy + energyGain + autoClickGain,
                    totalEnergyEarned: prev.totalEnergyEarned + energyGain + autoClickGain,
                    totalEnergyAllTime: prev.totalEnergyAllTime + energyGain + autoClickGain,
                    lastTick: now,
                    totalClicks: prev.totalClicks + (prev.autoClicker * (deltaTime / 1000)),
                };

                // --- 자동 구매 로직 ---
                const hasAutoBuyGenerators = nextState.prestigeLayers[1].upgrades.includes('auto_buy_generators');
                const hasAutoBuyUpgrades = nextState.prestigeLayers[1].upgrades.includes('auto_buy_upgrades');
                const hasAutoBuyDarkShop = nextState.prestigeLayers[2]?.upgrades.includes('time_auto_dark');

                if (hasAutoBuyGenerators || hasAutoBuyUpgrades || hasAutoBuyDarkShop) {
                    // 1. 생성기 자동 구매
                    if (hasAutoBuyGenerators) {
                        Object.values(GENERATORS).forEach(gen => {
                            const currentCount = nextState.generators[gen.id]?.count || 0;
                            const maxBuyable = getMaxBuyableCount(gen, currentCount, nextState.energy, nextState.costReduction);
                            if (maxBuyable > 0) {
                                const cost = getBulkGeneratorCost(gen, currentCount, maxBuyable, nextState.costReduction);
                                if (nextState.energy >= cost) {
                                    nextState.energy -= cost;
                                    nextState.generators[gen.id].count += maxBuyable;
                                    // 비용은 렌더링 시 계산되므로 상태에 저장할 필요 없음 (단, 최적화를 위해 저장할 수도 있음)
                                }
                            }
                        });
                    }

                    // 2. 업그레이드 자동 구매
                    if (hasAutoBuyUpgrades) {
                        UPGRADES.forEach(upgrade => {
                            if (!nextState.upgrades.includes(upgrade.id) && nextState.energy >= upgrade.cost) {
                                const isUnlocked = !upgrade.requires || nextState.upgrades.includes(upgrade.requires);
                                if (isUnlocked) {
                                    nextState.energy -= upgrade.cost;
                                    nextState.upgrades.push(upgrade.id);
                                    nextState = applyUpgradeEffect(nextState, upgrade);
                                }
                            }
                        });
                    }

                    // 3. 암흑 상점 자동 구매
                    if (hasAutoBuyDarkShop) {
                        PRESTIGE_UPGRADES.forEach(upgrade => {
                            if (!nextState.prestigeLayers[1].upgrades.includes(upgrade.id) && nextState.prestigeLayers[1].currency >= upgrade.cost) {
                                nextState.prestigeLayers[1].currency -= upgrade.cost;
                                nextState.prestigeLayers[1].upgrades.push(upgrade.id);
                                nextState = applyUpgradeEffect(nextState, upgrade);
                            }
                        });
                    }

                    // 4. 시간 상점 자동 구매 (3단계 업그레이드)
                    const hasAutoBuyTimeShop = nextState.prestigeLayers[3]?.upgrades.includes('cosmic_auto_time');
                    if (hasAutoBuyTimeShop) {
                        TIME_REVERSAL_UPGRADES.forEach(upgrade => {
                            if (!nextState.prestigeLayers[2].upgrades.includes(upgrade.id) && nextState.prestigeLayers[2].currency >= upgrade.cost) {
                                nextState.prestigeLayers[2].currency -= upgrade.cost;
                                nextState.prestigeLayers[2].upgrades.push(upgrade.id);
                                nextState = applyUpgradeEffect(nextState, upgrade);
                            }
                        });
                    }

                    // 5. 우주 상점 자동 구매 (4단계 업그레이드)
                    const hasAutoBuyCosmicShop = nextState.prestigeLayers[4]?.upgrades.includes('void_auto_cosmic');
                    if (hasAutoBuyCosmicShop) {
                        COSMIC_ASCENSION_UPGRADES.forEach(upgrade => {
                            if (!nextState.prestigeLayers[3].upgrades.includes(upgrade.id) && nextState.prestigeLayers[3].currency >= upgrade.cost) {
                                nextState.prestigeLayers[3].currency -= upgrade.cost;
                                nextState.prestigeLayers[3].upgrades.push(upgrade.id);
                                nextState = applyUpgradeEffect(nextState, upgrade);
                            }
                        });
                    }

                    // 6. 공허 상점 자동 구매 (5단계 업그레이드)
                    const hasAutoBuyVoidShop = nextState.prestigeLayers[5]?.upgrades.includes('reality_auto_void');
                    if (hasAutoBuyVoidShop) {
                        VOID_INTEGRATION_UPGRADES.forEach(upgrade => {
                            if (!nextState.prestigeLayers[4].upgrades.includes(upgrade.id) && nextState.prestigeLayers[4].currency >= upgrade.cost) {
                                nextState.prestigeLayers[4].currency -= upgrade.cost;
                                nextState.prestigeLayers[4].upgrades.push(upgrade.id);
                                nextState = applyUpgradeEffect(nextState, upgrade);
                            }
                        });
                    }
                }

                // --- 패시브 자원 생성 ---
                // 1. 암흑 물질 생성 (2단계 업그레이드: time_passive_dark)
                if (nextState.prestigeLayers[2]?.upgrades.includes('time_passive_dark')) {
                    const potentialDarkMatter = calculateLayerCurrency(1, nextState.totalEnergyEarned);
                    const gainPerTick = calculatePassiveGain(potentialDarkMatter, deltaTime);
                    nextState.prestigeLayers[1].currency += gainPerTick;
                }

                // 2. 시간의 모래 생성 (3단계 업그레이드: cosmic_passive_time)
                if (nextState.prestigeLayers[3]?.upgrades.includes('cosmic_passive_time')) {
                    const potentialTimeSands = calculateLayerCurrency(2, nextState.prestigeLayers[1].currency);
                    const gainPerTick = calculatePassiveGain(potentialTimeSands, deltaTime);
                    nextState.prestigeLayers[2].currency += gainPerTick;
                }

                // 3. 별의 정수 생성 (4단계 업그레이드: void_passive_stellar)
                if (nextState.prestigeLayers[4]?.upgrades.includes('void_passive_stellar')) {
                    const potentialStellarEssence = calculateLayerCurrency(3, nextState.prestigeLayers[2].currency);
                    const gainPerTick = calculatePassiveGain(potentialStellarEssence, deltaTime);
                    nextState.prestigeLayers[3].currency += gainPerTick;
                }

                // 4. 공허의 파편 생성 (5단계 업그레이드: reality_passive_void)
                if (nextState.prestigeLayers[5]?.upgrades.includes('reality_passive_void')) {
                    const potentialVoidShards = calculateLayerCurrency(4, nextState.prestigeLayers[3].currency);
                    const gainPerTick = calculatePassiveGain(potentialVoidShards, deltaTime);
                    nextState.prestigeLayers[4].currency += gainPerTick;
                }

                return nextState;
            });
        }, tickRate);

        return () => clearInterval(interval);
    }, [tickRateMultiplier, setGameState]);
};
