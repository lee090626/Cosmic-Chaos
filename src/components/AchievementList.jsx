import React from 'react';
import { ACHIEVEMENTS } from '../data/gameData';
import './AchievementList.css';

const AchievementList = ({ isOpen, onClose, unlockedAchievements }) => {
    if (!isOpen) return null;

    const unlockedCount = unlockedAchievements.length;
    const totalCount = ACHIEVEMENTS.length;
    const progress = Math.floor((unlockedCount / totalCount) * 100);

    return (
        <div className="achievement-modal-overlay" onClick={onClose}>
            <div className="achievement-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <div className="achievement-modal-header">
                    <h2 className="modal-title gradient-text">🏆 업적 ({unlockedCount}/{totalCount})</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="achievement-progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="achievement-list-scroll">
                    {ACHIEVEMENTS.map(achievement => {
                        const isUnlocked = unlockedAchievements.includes(achievement.id);
                        return (
                            <div key={achievement.id} className={`achievement-item glass-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                                <div className="achievement-item-icon">
                                    {isUnlocked ? '🏆' : '🔒'}
                                </div>
                                <div className="achievement-item-info">
                                    <h3 className="achievement-item-name">{achievement.name}</h3>
                                    <p className="achievement-item-desc">{achievement.description}</p>
                                    {isUnlocked && (
                                        <div className="achievement-reward">
                                            보상: {getRewardText(achievement.reward)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const getRewardText = (reward) => {
    if (reward.type === 'global_multiplier') return `전체 생산량 x${reward.value}`;
    if (reward.type === 'click_multiplier') return `클릭 파워 x${reward.value}`;
    return '알 수 없는 보상';
};

export default AchievementList;
