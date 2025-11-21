import { useEffect, useRef, useCallback } from 'react';
import { GAME_CONFIG, GENERATORS } from '../data/gameData';

const STORAGE_KEY = 'cosmic_clicker_save_v2';

export const defaultState = {
    energy: 0,
    totalEnergyEarned: 0, // 이번 생애
    totalEnergyAllTime: 0, // 전체 생애
    totalClicks: 0,
    clickPower: GAME_CONFIG.CLICK_POWER,
    generators: GENERATORS.reduce((acc, gen) => {
        acc[gen.id] = { count: 0, multiplier: 1 };
        return acc;
    }, {}),
    upgrades: [],
    achievements: [],
    artifacts: [],
    prestigeCount: 0, // 총 프레스티지 횟수 (모든 레이어 합산)
    // 기존 prestige 객체는 하위 호환성을 위해 남겨두거나 마이그레이션 후 제거
    // 여기서는 새로운 구조인 prestigeLayers를 사용
    prestigeLayers: {
        1: { count: 0, currency: 0, upgrades: [] }, // Dimension Jump (기존)
        2: { count: 0, currency: 0, upgrades: [] },
        3: { count: 0, currency: 0, upgrades: [] },
        4: { count: 0, currency: 0, upgrades: [] },
        5: { count: 0, currency: 0, upgrades: [] }
    },
    globalMultiplier: 1,
    costReduction: 1,
    tickRateMultiplier: 1, // 틱 속도 배수 (낮을수록 빠름)
    clickProductionPercent: 0, // 클릭 시 생산량 % 획득
    autoClicker: 0, // 자동 클릭 횟수
    darkMatterEfficiency: 1, // 암흑 물질 효율
    startTime: Date.now(),
    lastTick: Date.now(),
};

export const getInitialState = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);

            // 마이그레이션 1: artifacts 필드 추가
            if (!parsed.artifacts) parsed.artifacts = [];

            // 마이그레이션 2: prestige -> prestigeLayers
            if (!parsed.prestigeLayers) {
                parsed.prestigeLayers = {
                    1: { count: 0, currency: 0, upgrades: [] },
                    2: { count: 0, currency: 0, upgrades: [] },
                    3: { count: 0, currency: 0, upgrades: [] },
                    4: { count: 0, currency: 0, upgrades: [] },
                    5: { count: 0, currency: 0, upgrades: [] }
                };

                // 기존 prestige 데이터가 있다면 1단계로 이동
                if (parsed.prestige) {
                    parsed.prestigeLayers[1] = {
                        count: parsed.prestige.count || 0,
                        currency: parsed.prestige.currency || 0,
                        upgrades: parsed.prestige.upgrades || []
                    };
                    // 기존 prestige 필드는 이제 무시하거나 삭제 (여기선 유지하되 사용 안함)
                }
            }

            // 마이그레이션 3: prestigeCount 필드 추가
            if (parsed.prestigeCount === undefined) {
                // 모든 레이어의 count를 합산
                parsed.prestigeCount = Object.values(parsed.prestigeLayers || {}).reduce((sum, layer) => sum + (layer.count || 0), 0);
            }

            // 마이그레이션 4: 새로운 생성기 추가 (Deep Merge)
            if (parsed.generators) {
                const mergedGenerators = { ...defaultState.generators };
                Object.keys(mergedGenerators).forEach(key => {
                    if (parsed.generators[key]) {
                        mergedGenerators[key] = parsed.generators[key];
                    }
                });
                parsed.generators = mergedGenerators;
            }

            return { ...defaultState, ...parsed };
        } catch (e) {
            console.error('Failed to load save:', e);
        }
    }
    return defaultState;
};

export const useGameSave = (gameState) => {
    const gameStateRef = useRef(gameState);

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    const saveGame = useCallback(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gameStateRef.current));
        console.log('Game Saved');
    }, []);

    // 자동 저장
    useEffect(() => {
        const interval = setInterval(saveGame, GAME_CONFIG.SAVE_INTERVAL);
        return () => clearInterval(interval);
    }, [saveGame]);

    // 페이지 언로드 시 저장
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(gameStateRef.current));
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    const clearSave = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    return { saveGame, clearSave };
};
