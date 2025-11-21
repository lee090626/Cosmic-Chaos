import React from 'react';
import { formatNumber, getBulkGeneratorCost, getMaxBuyableCount, getGeneratorProduction, getNextMilestone, getMilestoneMultiplier } from '../data/gameData';
import './GeneratorCard.css';

const GeneratorCard = ({ generator, generatorState, energy, buyMultiplier, onBuy }) => {
    // 구매 가능 수량 및 가격 계산
    let buyQuantity = 0;
    let cost = 0;

    if (buyMultiplier === 'MAX') {
        buyQuantity = getMaxBuyableCount(generator, generatorState.count, energy);
        // 0개라도 살 수 없으면 1개 가격 표시 (비활성화 상태)
        if (buyQuantity === 0) {
            cost = getBulkGeneratorCost(generator, generatorState.count, 1);
        } else {
            cost = getBulkGeneratorCost(generator, generatorState.count, buyQuantity);
        }
    } else {
        buyQuantity = buyMultiplier;
        cost = getBulkGeneratorCost(generator, generatorState.count, buyQuantity);
    }

    const canAfford = energy >= cost && (buyMultiplier !== 'MAX' || buyQuantity > 0);
    const production = getGeneratorProduction(generator, generatorState.count, generatorState.multiplier);

    // 마일스톤 정보
    const nextMilestone = getNextMilestone(generatorState.count);
    const milestoneBonus = getMilestoneMultiplier(generatorState.count);
    const totalMultiplier = generatorState.multiplier * milestoneBonus;

    // 프로그레스 바 계산
    let progressPercent = 0;
    if (nextMilestone === 25) progressPercent = (generatorState.count / 25) * 100;
    else if (nextMilestone === 50) progressPercent = ((generatorState.count - 25) / 25) * 100;
    else if (nextMilestone === 100) progressPercent = ((generatorState.count - 50) / 50) * 100;
    else progressPercent = ((generatorState.count % 100) / 100) * 100;

    return (
        <div className={`generator-card glass-card ${!canAfford ? 'disabled' : ''}`}>
            <div className="generator-header">
                <div className="generator-icon">{generator.icon}</div>
                <div className="generator-header-info">
                    <h3 className="generator-name">{generator.name}</h3>
                    <div className="generator-level">Lv. {generatorState.count}</div>
                </div>
                <div className="generator-multiplier" title="총 생산 배수 (업그레이드 x 마일스톤)">
                    x{formatNumber(totalMultiplier)}
                </div>
            </div>

            <div className="milestone-bar-container" title={`다음 2배 보너스까지: ${nextMilestone - generatorState.count}개 남음`}>
                <div className="milestone-bar" style={{ width: `${progressPercent}%` }}></div>
                <div className="milestone-text">
                    <span className="next-milestone">Next: Lv.{nextMilestone} (x2)</span>
                </div>
            </div>

            <p className="generator-description">{generator.description}</p>

            <div className="generator-stats">
                <div className="stat">
                    <span className="stat-label">생산량:</span>
                    <span className="stat-value production">{formatNumber(production)}/s</span>
                </div>
            </div>

            <button
                className="buy-button"
                onClick={() => onBuy(buyMultiplier === 'MAX' ? buyQuantity : buyMultiplier)}
                disabled={!canAfford}
            >
                <span className="buy-text">
                    {buyMultiplier === 'MAX' ? `MAX (+${buyQuantity})` : `구매 (+${buyMultiplier})`}
                </span>
                <span className="buy-cost">{formatNumber(cost)} 에너지</span>
            </button>
        </div>
    );
};

export default GeneratorCard;
