import React, { useState } from 'react';
import { PRESTIGE_UPGRADES, PRESTIGE_LAYERS, calculateLayerCurrency, TIME_REVERSAL_UPGRADES, COSMIC_ASCENSION_UPGRADES, VOID_INTEGRATION_UPGRADES, REALITY_OVERWRITE_UPGRADES } from '../data/gameData';
import './PrestigeModal.css';

const PrestigeModal = ({ isOpen, onClose, gameState, onPrestige, onBuyUpgrade }) => {
    const [activeTab, setActiveTab] = useState('layers'); // 'layers' or 'shop'
    const [selectedLayerId, setSelectedLayerId] = useState(1);

    if (!isOpen) return null;

    const renderLayers = () => {
        return Object.values(PRESTIGE_LAYERS).map(layer => {
            let currentResource = 0;
            if (layer.resourceType === 'energy') {
                currentResource = gameState.totalEnergyEarned;
            } else if (layer.resourceType.startsWith('prestige_currency_')) {
                const targetLayerId = parseInt(layer.resourceType.split('_')[2]);
                currentResource = gameState.prestigeLayers[targetLayerId].currency;
            }

            const earnedCurrency = calculateLayerCurrency(layer.id, currentResource);
            const canPrestige = earnedCurrency > 0;
            const currentLayerCurrency = gameState.prestigeLayers[layer.id].currency;

            return (
                <div key={layer.id} className="prestige-layer-card" style={{ borderColor: layer.color }}>
                    <h3 style={{ color: layer.color }}>{layer.name}</h3>
                    <p className="layer-desc">{layer.description}</p>
                    <div className="layer-stats">
                        <p>보유: {currentLayerCurrency.toLocaleString()} {layer.currencyName}</p>
                        <p>효과: {layer.bonusType === 'cost_reduction' ?
                            `비용 ${(1 - Math.pow(1 - layer.bonusValue, currentLayerCurrency)) * 100}% 감소` :
                            `생산량 +${(currentLayerCurrency * layer.bonusValue * 100).toLocaleString()}%`
                        }</p>
                    </div>
                    <div className="prestige-action">
                        <p>획득 가능: {earnedCurrency.toLocaleString()} {layer.currencyName}</p>
                        <button
                            className={`prestige-btn ${canPrestige ? '' : 'disabled'}`}
                            onClick={() => {
                                if (canPrestige) {
                                    if (confirm(`정말로 ${layer.name}을(를) 진행하시겠습니까? 하위 단계가 모두 초기화됩니다.`)) {
                                        onPrestige(layer.id);
                                        onClose();
                                    }
                                }
                            }}
                            disabled={!canPrestige}
                            style={{ backgroundColor: canPrestige ? layer.color : '#333' }}
                        >
                            {canPrestige ? '차원 도약' : '조건 미달'}
                        </button>
                    </div>
                </div>
            );
        });
    };

    const renderShop = (shopType) => {
        let upgrades = [];
        let currency = 0;
        let currencyName = '';
        let layerId = 0;

        if (shopType === 'dark_matter') {
            upgrades = PRESTIGE_UPGRADES;
            layerId = 1;
            currency = gameState.prestigeLayers[1].currency;
            currencyName = 'DM';
        } else if (shopType === 'time_sands') {
            upgrades = TIME_REVERSAL_UPGRADES;
            layerId = 2;
            currency = gameState.prestigeLayers[2].currency;
            currencyName = 'TS';
        } else if (shopType === 'stellar_essence') {
            upgrades = COSMIC_ASCENSION_UPGRADES;
            layerId = 3;
            currency = gameState.prestigeLayers[3].currency;
            currencyName = 'SE';
        } else if (shopType === 'void_shards') {
            upgrades = VOID_INTEGRATION_UPGRADES;
            layerId = 4;
            currency = gameState.prestigeLayers[4].currency;
            currencyName = 'VS';
        } else if (shopType === 'reality_fragments') {
            upgrades = REALITY_OVERWRITE_UPGRADES;
            layerId = 5;
            currency = gameState.prestigeLayers[5].currency;
            currencyName = 'RF';
        }

        return (
            <div className="shop-container">
                <div className="shop-header">
                    <span>보유 자원: {currency.toLocaleString()} {currencyName}</span>
                </div>
                <div className="shop-items">
                    {upgrades.map(upgrade => {
                        const isPurchased = gameState.prestigeLayers[layerId].upgrades.includes(upgrade.id);
                        const canBuy = currency >= upgrade.cost;

                        return (
                            <div key={upgrade.id} className={`shop-item ${isPurchased ? 'purchased' : ''}`}>
                                <div className="item-info">
                                    <h4>{upgrade.name}</h4>
                                    <p>{upgrade.description}</p>
                                    <span className="cost">비용: {upgrade.cost.toLocaleString()} {currencyName}</span>
                                </div>
                                <button
                                    className="buy-btn"
                                    disabled={isPurchased || !canBuy}
                                    onClick={() => onBuyUpgrade(upgrade.id, layerId)}
                                >
                                    {isPurchased ? '구매 완료' : '구매'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content prestige-modal">
                <div className="modal-header">
                    <h2>🌌 다중 우주 (Multiverse)</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'layers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('layers')}
                    >
                        차원 목록
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'shop_1' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shop_1')}
                    >
                        1단계 상점
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'shop_2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shop_2')}
                    >
                        2단계 상점
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'shop_3' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shop_3')}
                    >
                        3단계 상점
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'shop_4' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shop_4')}
                    >
                        4단계 상점
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'shop_5' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shop_5')}
                    >
                        5단계 상점
                    </button>
                </div>

                <div className="modal-body">
                    {activeTab === 'layers' && (
                        <div className="layers-container">
                            {renderLayers()}
                        </div>
                    )}

                    {activeTab === 'shop_1' && renderShop('dark_matter')}

                    {activeTab === 'shop_2' && renderShop('time_sands')}

                    {activeTab === 'shop_3' && renderShop('stellar_essence')}

                    {activeTab === 'shop_4' && renderShop('void_shards')}

                    {activeTab === 'shop_5' && renderShop('reality_fragments')}
                </div>
            </div>
        </div>
    );
};

export default PrestigeModal;
