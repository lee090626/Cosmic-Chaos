import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="game-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Cosmic Clicker</h3>
                    <p>우주를 탐험하는 방치형 게임</p>
                    <p className="copyright">© {currentYear} Cosmic Clicker. All rights reserved.</p>
                </div>

                <div className="footer-section">
                    <h4>게임 정보</h4>
                    <ul>
                        <li><Link to="/about">게임 소개</Link></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); /* 도움말 모달 열기 */ }}>도움말</a></li>
                        <li><Link to="/contact">문의하기</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>법적 고지</h4>
                    <ul>
                        <li><Link to="/privacy">개인정보 처리방침</Link></li>
                        <li><Link to="/terms">이용약관</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>소셜 미디어</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Discord" title="Discord">💬</a>
                        <a href="#" aria-label="Twitter" title="Twitter">🐦</a>
                        <a href="#" aria-label="GitHub" title="GitHub">💻</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>이 사이트는 Google AdSense를 사용하여 광고를 제공합니다.</p>
                <p>게임 데이터는 브라우저의 로컬 스토리지에 저장됩니다.</p>
            </div>
        </footer>
    );
};

export default Footer;
