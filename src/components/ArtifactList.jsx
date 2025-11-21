import React from 'react';
import { ARTIFACTS } from '../data/gameData';
import './ArtifactList.css';

const ArtifactList = ({ isOpen, onClose, unlockedArtifacts }) => {
    if (!isOpen) return null;

    return (
        <div className="artifact-modal-overlay" onClick={onClose}>
            <div className="artifact-modal-content glass-card" onClick={e => e.stopPropagation()}>
                <div className="artifact-modal-header">
                    <h2 className="modal-title gradient-text">🌌 별의 유물 (Stellar Artifacts)</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="artifact-list-scroll">
                    {ARTIFACTS.map(artifact => {
                        const isUnlocked = unlockedArtifacts.includes(artifact.id);
                        return (
                            <div key={artifact.id} className={`artifact-item glass-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
                                <div className="artifact-icon">
                                    {isUnlocked ? artifact.icon : '🔒'}
                                </div>
                                <div className="artifact-info">
                                    <h3 className="artifact-name">{artifact.name}</h3>
                                    <p className="artifact-desc">{isUnlocked ? artifact.description : '???'}</p>
                                    {!isUnlocked && (
                                        <div className="artifact-condition">
                                            해금 조건: {getConditionText(artifact.id)}
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

const getConditionText = (id) => {
    switch (id) {
        case 'quantum_shard': return '총 에너지 1 Qa 달성';
        case 'void_essence': return '암흑 물질 100개 보유';
        case 'time_crystal': return '총 에너지 1 Sx 달성';
        default: return '알 수 없음';
    }
};

export default ArtifactList;
