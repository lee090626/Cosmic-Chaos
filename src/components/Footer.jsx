import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log("AdSense push error:", e);
        }
    }, []);

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
            </div>

            {/* <!-- comic-ads --> */}
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8319588891960553"
                data-ad-slot="8184116505"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </footer>
    );
};

export default Footer;
