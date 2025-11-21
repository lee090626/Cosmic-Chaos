import React, { useEffect } from 'react';
import './AchievementPopup.css';

const AchievementPopup = ({ achievements, onClose }) => {
    useEffect(() => {
        if (achievements.length > 0) {
            const timer = setTimeout(() => {
                onClose(achievements[0].id);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [achievements, onClose]);

    if (achievements.length === 0) return null;

    const achievement = achievements[0];

    return (
        <div className="achievement-popup glass-card slide-in">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-content">
                <div className="achievement-header">업적 달성!</div>
                <div className="achievement-name">{achievement.name}</div>
                <div className="achievement-desc">{achievement.description}</div>
            </div>
            <div className="achievement-glow"></div>
        </div>
    );
};

export default AchievementPopup;
