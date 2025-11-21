import React, { useState, useEffect } from 'react';
import './GoldenComet.css';

const GoldenComet = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: -100 });

    useEffect(() => {
        // 랜덤하게 혜성 등장 (30초 ~ 2분 사이)
        const scheduleComet = () => {
            const delay = Math.random() * 90000 + 30000;
            return setTimeout(() => {
                spawnComet();
            }, delay);
        };

        let timeoutId = scheduleComet();

        const spawnComet = () => {
            const startTop = Math.random() * 80; // 화면 상단 80% 내에서
            setPosition({ top: startTop, left: -100 });
            setIsVisible(true);

            // 혜성 이동 애니메이션이 끝날 때쯤 제거
            setTimeout(() => {
                setIsVisible(false);
                timeoutId = scheduleComet();
            }, 10000); // 10초 동안 화면 가로지름
        };

        return () => clearTimeout(timeoutId);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="golden-comet"
            style={{ top: `${position.top}%` }}
            onClick={() => {
                onClick();
                setIsVisible(false);
            }}
        >
            <div className="comet-head">☄️</div>
            <div className="comet-tail"></div>
        </div>
    );
};

export default GoldenComet;
