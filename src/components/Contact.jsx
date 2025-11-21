import React from 'react';
import './PolicyPage.css';

const Contact = () => {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <h1>문의하기</h1>

                <section>
                    <h2>📧 이메일</h2>
                    <p><strong>contact@cosmic-clicker.com</strong> (예시 - 실제 이메일로 변경하세요)</p>
                    <p>게임 관련 문의, 버그 리포트, 제안 사항 등을 보내주세요.</p>
                </section>

                <section>
                    <h2>🎮 게임 정보</h2>
                    <p><strong>게임 이름:</strong> Cosmic Clicker</p>
                    <p><strong>장르:</strong> Idle Game / Incremental Game</p>
                    <p><strong>플랫폼:</strong> Web Browser</p>
                </section>

                <section>
                    <h2>💡 자주 묻는 질문</h2>

                    <div className="faq-item">
                        <h3>Q: 게임 데이터가 사라졌어요!</h3>
                        <p>A: 게임 데이터는 브라우저의 로컬 스토리지에 저장됩니다.
                            브라우저 캐시를 삭제하거나 시크릿 모드를 사용하면 데이터가 손실될 수 있습니다.
                            정기적으로 게임을 저장하고, 같은 브라우저를 사용하세요.</p>
                    </div>

                    <div className="faq-item">
                        <h3>Q: 환생(Prestige)은 언제 해야 하나요?</h3>
                        <p>A: 첫 환생은 1억 에너지에 가능합니다.
                            환생 시 암흑 물질을 획득하여 영구적인 생산량 증가 효과를 얻을 수 있습니다.
                            자세한 내용은 게임 내 도움말을 참고하세요.</p>
                    </div>

                    <div className="faq-item">
                        <h3>Q: 광고를 제거할 수 있나요?</h3>
                        <p>A: 현재는 광고 제거 옵션이 없습니다.
                            광고는 게임 운영을 위한 수익원으로 사용됩니다.</p>
                    </div>

                    <div className="faq-item">
                        <h3>Q: 모바일에서도 플레이할 수 있나요?</h3>
                        <p>A: 네, 모바일 브라우저에서도 플레이 가능합니다.
                            다만 PC 환경에서 최적화되어 있습니다.</p>
                    </div>
                </section>

                <section>
                    <h2>🐛 버그 리포트</h2>
                    <p>버그를 발견하셨다면 다음 정보와 함께 이메일로 보내주세요:</p>
                    <ul>
                        <li>사용 중인 브라우저 및 버전</li>
                        <li>발생한 문제의 상세 설명</li>
                        <li>문제 재현 방법</li>
                        <li>스크린샷 (가능한 경우)</li>
                    </ul>
                </section>

                <section>
                    <h2>💬 피드백</h2>
                    <p>게임 개선을 위한 여러분의 의견을 기다립니다!</p>
                    <p>새로운 기능 제안, 밸런스 조정 의견, UI/UX 개선 아이디어 등
                        무엇이든 환영합니다.</p>
                </section>

                <section>
                    <h2>⚖️ 법적 문의</h2>
                    <p>개인정보 처리, 저작권, 기타 법적 문의사항은 위 이메일로 연락주세요.</p>
                </section>
            </div>
        </div>
    );
};

export default Contact;
