import React from 'react';
import { formatNumber } from '../data/gameData';
import './Stats.css';

const Stats = ({ gameState }) => {
    const playTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const hours = Math.floor(playTime / 3600);
    const minutes = Math.floor((playTime % 3600) / 60);
    const seconds = playTime % 60;

    return (
        <div className="stats-container glass-card">
            <h3 className="stats-title gradient-text">📊 통계</h3>
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-icon">👆</div>
                    <div className="stat-content">
                        <div className="stat-label">총 클릭 수</div>
                        <div className="stat-value">{formatNumber(gameState.totalClicks)}</div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-content">
                        <div className="stat-label">총 획득 에너지</div>
                        <div className="stat-value">{formatNumber(gameState.totalEnergyEarned)}</div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">⏱️</div>
                    <div className="stat-content">
                        <div className="stat-label">플레이 시간</div>
                        <div className="stat-value">
                            {hours > 0 && `${hours}시간 `}
                            {minutes > 0 && `${minutes}분 `}
                            {seconds}초
                        </div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">🎯</div>
                    <div className="stat-content">
                        <div className="stat-label">클릭 파워</div>
                        <div className="stat-value">{gameState.clickPower}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
