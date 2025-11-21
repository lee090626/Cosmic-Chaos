import React, { useState, useRef } from 'react';
import './EnergyDisplay.css';

const EnergyDisplay = ({ onEnergyClick, clickPower }) => {
    const [particles, setParticles] = useState([]);
    const buttonRef = useRef(null);
    const particleIdRef = useRef(0);

    const handleClick = (e) => {
        onEnergyClick();

        // 파티클 효과 생성
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const newParticle = {
                id: particleIdRef.current++,
                x,
                y,
                value: `+${clickPower}`,
            };

            setParticles(prev => [...prev, newParticle]);

            // 1초 후 파티클 제거
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== newParticle.id));
            }, 1000);
        }
    };

    return (
        <div className="energy-display-container">
            <button
                ref={buttonRef}
                className="energy-button glass-card"
                onClick={handleClick}
            >
                <div className="energy-orb">
                    <div className="orb-core"></div>
                    <div className="orb-ring"></div>
                    <div className="orb-ring orb-ring-2"></div>
                </div>
                <div className="click-text">클릭하여 에너지 수집</div>
                <div className="click-power">+{clickPower} 에너지</div>

                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                        }}
                    >
                        {particle.value}
                    </div>
                ))}
            </button>
        </div>
    );
};

export default EnergyDisplay;
