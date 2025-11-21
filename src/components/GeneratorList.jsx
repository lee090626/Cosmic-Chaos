import React, { useState } from 'react';
import GeneratorCard from './GeneratorCard';
import { GENERATORS } from '../data/gameData';
import './GeneratorList.css';

const GeneratorList = ({ gameState, onBuyGenerator }) => {
    const [buyMultiplier, setBuyMultiplier] = useState(1); // 1, 10, 100, 'MAX'

    return (
        <div className="generator-list-section">
            <div className="generator-list-header">
                <h2 className="section-title gradient-text">GENERATORS</h2>
                <div className="buy-multiplier-controls">
                    {[1, 10, 100, 'MAX'].map(mult => (
                        <button
                            key={mult}
                            className={`multiplier-btn ${buyMultiplier === mult ? 'active' : ''}`}
                            onClick={() => setBuyMultiplier(mult)}
                        >
                            {mult === 'MAX' ? 'MAX' : `x${mult}`}
                        </button>
                    ))}
                </div>
            </div>

            <div className="generator-grid">
                {GENERATORS.map(generator => (
                    <GeneratorCard
                        key={generator.id}
                        generator={generator}
                        generatorState={gameState.generators[generator.id]}
                        energy={gameState.energy}
                        buyMultiplier={buyMultiplier}
                        onBuy={(quantity) => onBuyGenerator(generator.id, quantity)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GeneratorList;
