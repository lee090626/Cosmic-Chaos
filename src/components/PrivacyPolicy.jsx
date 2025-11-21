import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PolicyPage.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="policy-page">
            <div className="policy-container">
                <button className="back-button" onClick={() => navigate('/')}>← 게임으로 돌아가기</button>
                <h1>개인정보 처리방침</h1>
                <p className="last-updated">최종 수정일: 2025년 11월 21일</p>

                <section>
                    <h2>1. 수집하는 개인정보</h2>
                    <p>Cosmic Clicker는 다음과 같은 정보를 수집합니다:</p>
                    <ul>
                        <li><strong>자동 수집 정보:</strong> 게임 진행 상황은 브라우저의 로컬 스토리지에 저장됩니다.</li>
                        <li><strong>쿠키:</strong> Google AdSense를 통해 광고 제공 시 쿠키가 사용될 수 있습니다.</li>
                        <li><strong>분석 데이터:</strong> Google Analytics를 통해 익명화된 사용 통계를 수집할 수 있습니다.</li>
                    </ul>
                </section>

                <section>
                    <h2>2. 개인정보의 이용 목적</h2>
                    <p>수집된 정보는 다음의 목적으로 사용됩니다:</p>
                    <ul>
                        <li>게임 진행 상황 저장 및 복원</li>
                        <li>서비스 개선 및 사용자 경험 향상</li>
                        <li>맞춤형 광고 제공 (Google AdSense)</li>
                        <li>웹사이트 트래픽 분석</li>
                    </ul>
                </section>

                <section>
                    <h2>3. 개인정보의 보관 및 파기</h2>
                    <p>게임 데이터는 사용자의 브라우저 로컬 스토리지에 저장되며, 사용자가 직접 삭제할 수 있습니다.
                        서버에는 개인정보가 저장되지 않습니다.</p>
                </section>

                <section>
                    <h2>4. 제3자 제공</h2>
                    <p>본 서비스는 다음의 제3자 서비스를 사용합니다:</p>
                    <ul>
                        <li><strong>Google AdSense:</strong> 광고 제공 목적</li>
                        <li><strong>Google Analytics:</strong> 웹사이트 분석 목적 (선택사항)</li>
                    </ul>
                    <p>이러한 서비스는 자체 개인정보 처리방침을 따릅니다.</p>
                </section>

                <section>
                    <h2>5. 사용자의 권리</h2>
                    <p>사용자는 다음의 권리를 가집니다:</p>
                    <ul>
                        <li>게임 데이터 삭제 (게임 내 초기화 버튼 사용)</li>
                        <li>쿠키 차단 (브라우저 설정)</li>
                        <li>개인정보 처리 관련 문의 및 요청</li>
                    </ul>
                </section>

                <section>
                    <h2>6. 쿠키 사용</h2>
                    <p>본 웹사이트는 Google AdSense를 통해 쿠키를 사용하여 맞춤형 광고를 제공합니다.
                        사용자는 브라우저 설정을 통해 쿠키를 거부할 수 있으나, 이 경우 일부 서비스 이용이 제한될 수 있습니다.</p>
                </section>

                <section>
                    <h2>7. 어린이 개인정보 보호</h2>
                    <p>본 서비스는 만 13세 미만 어린이를 대상으로 하지 않으며,
                        의도적으로 어린이의 개인정보를 수집하지 않습니다.</p>
                </section>

                <section>
                    <h2>8. 개인정보 처리방침 변경</h2>
                    <p>본 개인정보 처리방침은 법령 및 서비스 변경에 따라 수정될 수 있습니다.
                        변경 시 웹사이트를 통해 공지합니다.</p>
                </section>

                <section>
                    <h2>9. 문의</h2>
                    <p>개인정보 처리방침에 대한 문의사항이 있으시면 아래로 연락해주세요:</p>
                    <p><strong>이메일:</strong> hyeongseogi46@gmail.com</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
