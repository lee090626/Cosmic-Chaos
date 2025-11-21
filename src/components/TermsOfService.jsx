import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PolicyPage.css';

const TermsOfService = () => {
    const navigate = useNavigate();

    return (
        <div className="policy-page">
            <div className="policy-container">
                <button className="back-button" onClick={() => navigate('/')}>← 게임으로 돌아가기</button>
                <h1>이용약관</h1>
                <p className="last-updated">최종 수정일: 2025년 11월 21일</p>

                <section>
                    <h2>1. 서비스 이용</h2>
                    <p>Cosmic Clicker는 무료 브라우저 기반 게임 서비스입니다.
                        본 서비스를 이용함으로써 귀하는 본 약관에 동의하는 것으로 간주됩니다.</p>
                </section>

                <section>
                    <h2>2. 사용자 책임</h2>
                    <p>사용자는 다음 사항을 준수해야 합니다:</p>
                    <ul>
                        <li>서비스를 불법적인 목적으로 사용하지 않을 것</li>
                        <li>게임 데이터를 부정한 방법으로 조작하지 않을 것</li>
                        <li>다른 사용자에게 피해를 주는 행위를 하지 않을 것</li>
                        <li>서비스의 정상적인 운영을 방해하지 않을 것</li>
                    </ul>
                </section>

                <section>
                    <h2>3. 지적 재산권</h2>
                    <p>본 게임의 모든 콘텐츠, 디자인, 코드는 저작권법에 의해 보호됩니다.
                        사용자는 개인적, 비상업적 목적으로만 서비스를 이용할 수 있습니다.</p>
                </section>

                <section>
                    <h2>4. 서비스 변경 및 중단</h2>
                    <p>운영자는 사전 통지 없이 서비스의 내용을 변경하거나 중단할 수 있습니다.
                        이로 인한 손해에 대해 운영자는 책임을 지지 않습니다.</p>
                </section>

                <section>
                    <h2>5. 면책 조항</h2>
                    <p>본 서비스는 "있는 그대로" 제공되며, 운영자는 다음에 대해 책임을 지지 않습니다:</p>
                    <ul>
                        <li>서비스 이용으로 인한 직간접적 손해</li>
                        <li>게임 데이터 손실</li>
                        <li>서비스 중단 또는 오류</li>
                        <li>제3자 서비스(광고 등)로 인한 문제</li>
                    </ul>
                </section>

                <section>
                    <h2>6. 광고</h2>
                    <p>본 서비스는 Google AdSense를 통해 광고를 표시할 수 있습니다.
                        광고 내용에 대한 책임은 광고주에게 있습니다.</p>
                </section>

                <section>
                    <h2>7. 데이터 저장</h2>
                    <p>게임 진행 상황은 사용자의 브라우저 로컬 스토리지에 저장됩니다.
                        브라우저 데이터 삭제 시 게임 데이터가 손실될 수 있으며, 이에 대한 복구는 불가능합니다.</p>
                </section>

                <section>
                    <h2>8. 약관 변경</h2>
                    <p>본 약관은 필요에 따라 변경될 수 있으며, 변경 시 웹사이트를 통해 공지됩니다.
                        변경된 약관은 공지 후 즉시 효력이 발생합니다.</p>
                </section>

                <section>
                    <h2>9. 준거법 및 관할</h2>
                    <p>본 약관은 대한민국 법률에 따라 해석되며,
                        분쟁 발생 시 대한민국 법원을 관할 법원으로 합니다.</p>
                </section>

                <section>
                    <h2>10. 문의</h2>
                    <p>이용약관에 대한 문의사항이 있으시면 아래로 연락해주세요:</p>
                    <p><strong>이메일:</strong> hyeongseogi46@gmail.com</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
