import React, { useEffect, useState } from 'react';
import { useGameState } from './hooks/useGameState';
import Header from './components/Header';
import EnergyDisplay from './components/EnergyDisplay';
import GeneratorList from './components/GeneratorList';
import UpgradeList from './components/UpgradeList';
import Stats from './components/Stats';
import PrestigeModal from './components/PrestigeModal';
import AchievementPopup from './components/AchievementPopup';
import AchievementList from './components/AchievementList'; // 추가
import ArtifactList from './components/ArtifactList'; // 추가
import GoldenComet from './components/GoldenComet';
import { GAME_CONFIG } from './data/gameData';
import './App.css';

import GameGuide from './components/GameGuide'; // 추가
import Footer from './components/Footer'; // 추가

function App() {
    const {
        gameState,
        getProductionPerSecond,
        handleClick,
        buyGenerator,
        buyUpgrade,
        resetGame,
        doPrestige,
        newAchievements,
        setNewAchievements,
        addEnergy, // 개발용
        buyPrestigeUpgrade, // 추가
    } = useGameState();

    const [isPrestigeModalOpen, setIsPrestigeModalOpen] = useState(false);
    const [isAchievementListOpen, setIsAchievementListOpen] = useState(false); // 추가
    const [isArtifactListOpen, setIsArtifactListOpen] = useState(false); // 추가
    const [isGameGuideOpen, setIsGameGuideOpen] = useState(false); // 추가
    const productionPerSecond = getProductionPerSecond();

    // 전체 생산 배수 계산
    const darkMatterBonus = 1 + (gameState.prestigeLayers[1].currency * GAME_CONFIG.DARK_MATTER_BONUS);
    const timeSandsBonus = 1 + (gameState.prestigeLayers[2].currency * 1);
    const stellarEssenceBonus = 1 + (gameState.prestigeLayers[3].currency * 10);

    const totalGlobalMultiplier = gameState.globalMultiplier * darkMatterBonus * timeSandsBonus * stellarEssenceBonus;

    // 자동 구매 상태 계산
    const autoBuyStatus = {
        generators: gameState.prestigeLayers[1].upgrades.includes('auto_buy_generators'),
        upgrades: gameState.prestigeLayers[1].upgrades.includes('auto_buy_upgrades')
    };

    // 별 배경 생성
    useEffect(() => {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            starsContainer.appendChild(star);
        }

        return () => {
            if (document.body.contains(starsContainer)) {
                document.body.removeChild(starsContainer);
            }
        };
    }, []);

    const handleAchievementClose = (id) => {
        setNewAchievements(prev => prev.filter(a => a.id !== id));
    };

    const handleCometClick = () => {
        // 혜성 클릭 시 현재 생산량의 5분치(300초) 획득
        const bonus = Math.max(productionPerSecond * 300, gameState.clickPower * 100);
        addEnergy(bonus);
        console.log(`Golden Comet! Gained ${bonus} energy!`);
    };

    return (
        <div className="app">
            <Header
                energy={gameState.energy}
                productionPerSecond={productionPerSecond}
                prestigeLayers={gameState.prestigeLayers}
                globalMultiplier={totalGlobalMultiplier}
                autoBuyStatus={autoBuyStatus}
            />

            <main className="main-content">
                <div className="game-section">
                    <EnergyDisplay onEnergyClick={handleClick} clickPower={gameState.clickPower} />
                    <Stats gameState={gameState} />
                </div>

                <GeneratorList gameState={gameState} onBuyGenerator={buyGenerator} />

                <UpgradeList gameState={gameState} onBuyUpgrade={buyUpgrade} />

                <div className="footer">
                    <div className="footer-buttons">
                        <button
                            className="prestige-button glass-card"
                            onClick={() => setIsPrestigeModalOpen(true)}
                        >
                            🌀 차원 도약
                        </button>

                        <button
                            className="achievement-button glass-card"
                            onClick={() => setIsAchievementListOpen(true)}
                        >
                            🏆 업적 목록
                        </button>

                        <button
                            className="artifact-button glass-card"
                            onClick={() => setIsArtifactListOpen(true)}
                        >
                            💎 유물
                        </button>

                        <button
                            className="guide-button glass-card"
                            onClick={() => setIsGameGuideOpen(true)}
                        >
                            ❓ 도움말
                        </button>

                        <button className="reset-button glass-card" onClick={() => {
                            if (confirm('정말로 모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
                                resetGame();
                            }
                        }}>
                            🗑️ 초기화
                        </button>
                    </div>
                    <p className="footer-text">
                        Cosmic Clicker: Galaxy Expansion 🌌
                    </p>
                </div>
            </main>

            <PrestigeModal
                isOpen={isPrestigeModalOpen}
                onClose={() => setIsPrestigeModalOpen(false)}
                gameState={gameState}
                onPrestige={doPrestige}
                onBuyUpgrade={buyPrestigeUpgrade}
            />

            <AchievementList
                isOpen={isAchievementListOpen}
                onClose={() => setIsAchievementListOpen(false)}
                unlockedAchievements={gameState.achievements}
            />

            <ArtifactList
                isOpen={isArtifactListOpen}
                onClose={() => setIsArtifactListOpen(false)}
                unlockedArtifacts={gameState.artifacts || []}
            />

            <GameGuide
                isOpen={isGameGuideOpen}
                onClose={() => setIsGameGuideOpen(false)}
            />

            <AchievementPopup
                achievements={newAchievements}
                onClose={handleAchievementClose}
            />

            <GoldenComet onClick={handleCometClick} />

            <Footer />
        </div>
    );
}

export default App;
