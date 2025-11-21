import React from 'react';
import { UPGRADES, formatNumber } from '../data/gameData';
import './UpgradeList.css';

const UpgradeList = ({ gameState, onBuyUpgrade }) => {
    const availableUpgrades = UPGRADES.filter(upgrade => {
        // 이미 구매한 업그레이드는 제외
        if (gameState.upgrades.includes(upgrade.id)) return false;

        // 선행 업그레이드가 필요한 경우 체크
        if (upgrade.requires && !gameState.upgrades.includes(upgrade.requires)) {
            return false;
        }

        return true;
    });

    const purchasedUpgrades = UPGRADES.filter(upgrade =>
        gameState.upgrades.includes(upgrade.id)
    );

    if (availableUpgrades.length === 0 && purchasedUpgrades.length === 0) {
        return null;
    }

    return (
        <div className="upgrade-list-container">
            <h2 className="section-title gradient-text">⚡ 업그레이드</h2>

            {availableUpgrades.length > 0 && (
                <div className="upgrades-section">
                    <h3 className="subsection-title">구매 가능</h3>
                    <div className="upgrade-grid">
                        {availableUpgrades.map(upgrade => {
                            const canAfford = gameState.energy >= upgrade.cost;
                            return (
                                <div
                                    key={upgrade.id}
                                    className={`upgrade-card glass-card ${!canAfford ? 'disabled' : ''}`}
                                >
                                    <div className="upgrade-icon">{upgrade.icon}</div>
                                    <div className="upgrade-info">
                                        <h4 className="upgrade-name">{upgrade.name}</h4>
                                        <p className="upgrade-description">{upgrade.description}</p>
                                    </div>
                                    <button
                                        className="upgrade-button"
                                        onClick={() => onBuyUpgrade(upgrade.id)}
                                        disabled={!canAfford}
                                    >
                                        <span className="upgrade-cost">{formatNumber(upgrade.cost)} 에너지</span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {purchasedUpgrades.length > 0 && (
                <div className="upgrades-section">
                    <h3 className="subsection-title">보유 중</h3>
                    <div className="purchased-upgrades">
                        {purchasedUpgrades.map(upgrade => (
                            <div key={upgrade.id} className="purchased-upgrade">
                                <span className="purchased-icon">{upgrade.icon}</span>
                                <span className="purchased-name">{upgrade.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpgradeList;
