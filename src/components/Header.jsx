import React from 'react';
import { formatNumber, PRESTIGE_LAYERS } from '../data/gameData';
import './Header.css';

const Header = ({ energy, productionPerSecond, prestigeLayers, globalMultiplier, autoBuyStatus }) => {
    return (
        <header className="header glass-panel">
            <div className="header-top">
                <h1 className="game-title gradient-text glow">
                    ✨ COSMIC CLICKER
                </h1>
                {autoBuyStatus && (autoBuyStatus.generators || autoBuyStatus.upgrades) && (
                    <div className="auto-buy-indicator" title="자동 구매 활성화됨">
                        🤖 Auto-Buy: {autoBuyStatus.generators && '생산기'} {autoBuyStatus.upgrades && '업그레이드'}
                    </div>
                )}
            </div>

            <div className="header-content">
                <div className="main-stats">
                    <div className="energy-display">
                        <div className="energy-label">⚡ 에너지</div>
                        <div className="energy-value counter">{formatNumber(energy)}</div>
                    </div>
                    <div className="production-display">
                        <div className="production-label">📈 초당 생산</div>
                        <div className="production-value counter">{formatNumber(productionPerSecond)}/s</div>
                    </div>
                    <div className="global-multiplier-display" title="전체 생산량 배수">
                        <div className="multiplier-label">🚀 Global Boost</div>
                        <div className="multiplier-value">x{formatNumber(globalMultiplier)}</div>
                    </div>
                </div>

                <div className="prestige-stats">
                    {Object.entries(prestigeLayers).map(([id, layer]) => {
                        if (layer.currency > 0) {
                            const layerInfo = PRESTIGE_LAYERS[id];
                            return (
                                <div key={id} className="prestige-item fade-in" style={{ borderColor: layerInfo.color }}>
                                    <div className="prestige-label" style={{ color: layerInfo.color }}>{layerInfo.currencyName.split('(')[0]}</div>
                                    <div className="prestige-value">{formatNumber(layer.currency)}</div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;
