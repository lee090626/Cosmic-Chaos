import React from 'react';
import './GameGuide.css';
import { GAME_CONFIG } from '../data/gameData';

const GameGuide = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content game-guide-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>📚 게임 가이드</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body guide-body">
                    <section className="guide-section">
                        <h3>🚀 기초 가이드</h3>
                        <ul>
                            <li><strong>에너지 수집:</strong> 화면 중앙의 에너지를 클릭하거나 생성기를 구매하여 에너지를 모으세요.</li>
                            <li><strong>생성기:</strong> 시간이 지남에 따라 자동으로 에너지를 생산합니다.</li>
                            <li><strong>업그레이드:</strong> 클릭 효율이나 생성기 효율을 영구적으로 높여줍니다.</li>
                        </ul>
                    </section>

                    <section className="guide-section">
                        <h3>🌌 다중 우주 (Multiverse)</h3>
                        <p>
                            더 높은 차원으로 도약하여 우주를 리셋하고 강력한 보상을 얻으세요.
                            <br />
                            <span className="warning-text">주의: 상위 차원 도약을 하면 하위 차원의 모든 진행 상황(업그레이드 포함)이 초기화됩니다.</span>
                        </p>

                        <div className="layer-guide">
                            <h4>1. 차원 도약 (Dimension Jump)</h4>
                            <p><strong>보상:</strong> 암흑 물질 (Dark Matter)</p>
                            <p><strong>효과:</strong> 생산량 +10% (합연산)</p>
                            <p><strong>공식:</strong> <code>Math.floor(√(에너지 / 1억))</code></p>
                        </div>

                        <div className="layer-guide">
                            <h4>2. 시간 역행 (Time Reversal)</h4>
                            <p><strong>보상:</strong> 시간의 모래 (Time Sands)</p>
                            <p><strong>효과:</strong> 생산량 +100% (곱연산)</p>
                            <p><strong>조건:</strong> 암흑 물질 5,000개 이상</p>
                            <p><strong>공식:</strong> <code>Math.floor((암흑물질 / 5,000)^0.3)</code></p>
                        </div>

                        <div className="layer-guide">
                            <h4>3. 우주 승천 (Cosmic Ascension)</h4>
                            <p><strong>보상:</strong> 별의 정수 (Stellar Essence)</p>
                            <p><strong>효과:</strong> 생산량 +1000% (곱연산)</p>
                            <p><strong>조건:</strong> 시간의 모래 1,000개 이상</p>
                            <p><strong>공식:</strong> <code>Math.floor((시간의모래 / 1,000)^0.3)</code></p>
                        </div>

                        <div className="layer-guide">
                            <h4>4. 공허 통합 (Void Integration)</h4>
                            <p><strong>보상:</strong> 공허의 파편 (Void Shards)</p>
                            <p><strong>효과:</strong> 비용 감소 1% (복리)</p>
                            <p><strong>조건:</strong> 별의 정수 1,000개 이상</p>
                            <p><strong>공식:</strong> <code>Math.floor((별의정수 / 1,000)^0.3)</code></p>
                        </div>

                        <div className="layer-guide">
                            <h4>5. 현실 조작 (Reality Overwrite)</h4>
                            <p><strong>보상:</strong> 현실의 조각 (Reality Fragments)</p>
                            <p><strong>효과:</strong> 게임 속도 +10%</p>
                            <p><strong>조건:</strong> 공허의 파편 1,000개 이상</p>
                            <p><strong>공식:</strong> <code>Math.floor((공허의파편 / 1,000)^0.3)</code></p>
                        </div>
                    </section>

                    <section className="guide-section">
                        <h3>📐 주요 공식</h3>
                        <div className="formula-box">
                            <p><strong>최종 생산량:</strong></p>
                            <code>기본 × (1 + 암흑물질×0.1) × (1 + 시간의모래) × (1 + 별의정수×10) × 글로벌배수</code>
                        </div>
                    </section>

                    <section className="guide-section">
                        <h3>💡 팁</h3>
                        <ul>
                            <li><strong>자동 구매:</strong> 첫 번째 차원 도약 이후에는 <strong>자동 구매</strong> 기능이 활성화되어 생성기와 업그레이드를 자동으로 구매합니다.</li>
                            <li><strong>업적:</strong> 업적을 달성하면 영구적인 생산량 보너스를 얻습니다.</li>
                            <li><strong>황금 혜성:</strong> 가끔 나타나는 황금 혜성을 클릭하면 대량의 에너지를 얻을 수 있습니다.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GameGuide;
