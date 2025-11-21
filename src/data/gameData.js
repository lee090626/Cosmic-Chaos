// 게임 밸런스 상수
export const GAME_CONFIG = {
    CLICK_POWER: 5,
    SAVE_INTERVAL: 5000,
    TICK_RATE: 100,
    PRESTIGE_REQUIREMENT: 100000000, // 1조 -> 1억으로 대폭 하향
    DARK_MATTER_BONUS: 0.1,
};

// 생성기 타입 정의 (15단계)
export const GENERATORS = [
    {
        id: 'robot',
        name: '수집 로봇',
        description: '기본적인 에너지 수집 로봇',
        baseCost: 10,
        baseProduction: 0.5,
        costMultiplier: 1.15,
        icon: '🤖',
    },
    {
        id: 'solar',
        name: '태양광 패널',
        description: '태양 에너지를 수집합니다',
        baseCost: 75,
        baseProduction: 3,
        costMultiplier: 1.15,
        icon: '☀️',
    },
    {
        id: 'wind',
        name: '우주 풍력 터빈',
        description: '태양풍을 이용한 발전',
        baseCost: 1100,
        baseProduction: 12, // 8 -> 12 상향
        costMultiplier: 1.15,
        icon: '🎐',
    },
    {
        id: 'mine',
        name: '소행성 광산',
        description: '소행성에서 희귀 자원 채굴',
        baseCost: 12000,
        baseProduction: 65, // 47 -> 65 상향
        costMultiplier: 1.15,
        icon: '⛏️',
    },
    {
        id: 'factory',
        name: '궤도 공장',
        description: '무중력 상태의 고효율 공장',
        baseCost: 130000,
        baseProduction: 350, // 260 -> 350 상향
        costMultiplier: 1.15,
        icon: '🏭',
    },
    {
        id: 'fusion',
        name: '핵융합로',
        description: '인공 태양을 통한 에너지 생산',
        baseCost: 1400000,
        baseProduction: 1400,
        costMultiplier: 1.15,
        icon: '⚛️',
    },
    {
        id: 'terra',
        name: '테라포밍 기지',
        description: '행성 전체를 에너지 기지로 개조',
        baseCost: 20000000,
        baseProduction: 7800,
        costMultiplier: 1.15,
        icon: '🌍',
    },
    {
        id: 'dyson',
        name: '다이슨 스웜',
        description: '별을 감싸 에너지를 흡수',
        baseCost: 330000000,
        baseProduction: 44000,
        costMultiplier: 1.15,
        icon: '�️',
    },
    {
        id: 'antimatter',
        name: '반물질 응축기',
        description: '반물질 반응으로 막대한 에너지',
        baseCost: 5100000000,
        baseProduction: 260000,
        costMultiplier: 1.15,
        icon: '⚗️',
    },
    {
        id: 'blackhole',
        name: '블랙홀 하베스터',
        description: '사건의 지평선에서 에너지 추출',
        baseCost: 75000000000,
        baseProduction: 1600000,
        costMultiplier: 1.15,
        icon: '🕳️',
    },
    {
        id: 'quantum',
        name: '양자 컴퓨터',
        description: '현실 조작을 통한 에너지 생성',
        baseCost: 1000000000000, // 1T
        baseProduction: 10000000,
        costMultiplier: 1.15,
        icon: '💻',
    },
    {
        id: 'dimension',
        name: '차원 포털',
        description: '평행 우주의 에너지를 가져옴',
        baseCost: 14000000000000, // 14T
        baseProduction: 65000000,
        costMultiplier: 1.15,
        icon: '🌀',
    },
    {
        id: 'time',
        name: '시간 가속기',
        description: '미래의 에너지를 미리 가져옴',
        baseCost: 170000000000000, // 170T
        baseProduction: 430000000,
        costMultiplier: 1.15,
        icon: '⏳',
    },
    {
        id: 'universe',
        name: '우주 창조기',
        description: '빅뱅을 재현하여 에너지 폭발',
        baseCost: 2100000000000000, // 2.1Qa
        baseProduction: 2900000000,
        costMultiplier: 1.15,
        icon: '🌌',
    },
    {
        id: 'god',
        name: '초월적 존재',
        description: '설명할 수 없는 힘',
        baseCost: 26000000000000000, // 26Qa
        baseProduction: 21000000000,
        costMultiplier: 1.15,
        icon: '👁️',
    },
    {
        id: 'quantum_driller',
        name: '양자 채굴기',
        description: '양자 영역에서 자원을 채굴합니다',
        baseCost: 100000000000000000, // 100Qa
        baseProduction: 150000000000,
        costMultiplier: 1.15,
        icon: '💠',
    },
    {
        id: 'star_forge',
        name: '별의 대장간',
        description: '새로운 별을 만들어 에너지를 얻습니다',
        baseCost: 500000000000000000000, // 500Qi
        baseProduction: 800000000000,
        costMultiplier: 1.15,
        icon: '⭐',
    },
    {
        id: 'galaxy_weaver',
        name: '은하 직조기',
        description: '은하를 엮어 거대한 에너지를 생산합니다',
        baseCost: 1000000000000000000000, // 1Sx
        baseProduction: 5000000000000,
        costMultiplier: 1.15,
        icon: '🌌',
    },
    {
        id: 'dimension_breaker',
        name: '차원 파괴자',
        description: '차원의 벽을 부수어 에너지를 흡수합니다',
        baseCost: 100000000000000000000000, // 100Sp
        baseProduction: 35000000000000,
        costMultiplier: 1.15,
        icon: '🔨',
    },
    {
        id: 'multiverse_core',
        name: '다중 우주 코어',
        description: '모든 우주의 중심에서 에너지를 추출합니다',
        baseCost: 10000000000000000000000000, // 10Oc
        baseProduction: 200000000000000,
        costMultiplier: 1.15,
        icon: '⚛️',
    },
    // 3단계: 우주 승천 (Stellar)
    {
        id: 'stellar_engine',
        name: '항성 엔진',
        description: '별의 움직임을 제어하여 에너지를 생산합니다',
        baseCost: 700000000000000000000000000, // 70Oc (reduced from 100Oc)
        baseProduction: 1500000000000000,
        costMultiplier: 1.15,
        icon: '🌞',
    },
    {
        id: 'galactic_hub',
        name: '은하 허브',
        description: '은하 간 네트워크의 중심입니다',
        baseCost: 700000000000000000000000000000, // 700No (reduced from 1No)
        baseProduction: 8000000000000000,
        costMultiplier: 1.15,
        icon: '🌌',
    },
    {
        id: 'quasar_cannon',
        name: '퀴이사 캐논',
        description: '퀴이사의 빔을 에너지로 변환합니다',
        baseCost: 7000000000000000000000000000000, // 7No (reduced from 10No)
        baseProduction: 50000000000000000,
        costMultiplier: 1.15,
        icon: '🔦',
    },
    // 4단계: 공허 통합 (Void)
    {
        id: 'void_harvester',
        name: '공허 수확기',
        description: '공허에서 존재하지 않는 에너지를 가져옵니다',
        baseCost: 700000000000000000000000000000000, // 700Dc (reduced from 1Dc)
        baseProduction: 350000000000000000,
        costMultiplier: 1.15,
        icon: '🌑',
    },
    {
        id: 'dimension_rift',
        name: '차원 균열',
        description: '차원을 찢어 막대한 에너지를 방출합니다',
        baseCost: 70000000000000000000000000000000000, // 70Dc (reduced from 100Dc)
        baseProduction: 2000000000000000000,
        costMultiplier: 1.15,
        icon: '⚡',
    },
    {
        id: 'abyss_pump',
        name: '심연 펀프',
        description: '심연의 깊은 곳에서 에너지를 퍼올립니다',
        baseCost: 7000000000000000000000000000000000000, // 7Ud (reduced from 10Ud)
        baseProduction: 15000000000000000000,
        costMultiplier: 1.15,
        icon: '🕳️',
    },
    // 5단계: 현실 조작 (Reality)
    {
        id: 'reality_anchor',
        name: '현실 닻',
        description: '현실을 고정하여 에너지를 안정화합니다',
        baseCost: 1000000000000000000000000000000000000000, // 1Dd (1e39)
        baseProduction: 80000000000000000000,
        costMultiplier: 1.15,
        icon: '⚓',
    },
    {
        id: 'concept_forge',
        name: '개념 제련소',
        description: '추상적인 개념을 물리적 에너지로 만듭니다',
        baseCost: 100000000000000000000000000000000000000000, // 100Dd (1e41)
        baseProduction: 500000000000000000000,
        costMultiplier: 1.15,
        icon: '🧠',
    },
    {
        id: 'timeline_writer',
        name: '타임라인 작가',
        description: '역사를 다시 써서 에너지를 창조합니다',
        baseCost: 1000000000000000000000000000000000000000000, // 1Td (1e42)
        baseProduction: 3000000000000000000000,
        costMultiplier: 1.15,
        icon: '✍️',
    },
];

// 업그레이드 생성 헬퍼
const createUpgrade = (id, name, description, cost, effect, requires = null, icon = '⚡') => ({
    id, name, description, cost, effect, requires, icon
});

// 업그레이드 데이터 (50개 이상)
export const UPGRADES = [
    // 클릭 업그레이드
    createUpgrade('click_1', '강화된 손가락', '클릭당 +1', 500, { type: 'click_power', value: 1 }, null, '👆'),
    createUpgrade('click_2', '사이버네틱 손', '클릭당 +5', 2000, { type: 'click_power', value: 5 }, 'click_1', '🦾'),
    createUpgrade('click_3', '나노 슈트', '클릭당 +20', 10000, { type: 'click_power', value: 20 }, 'click_2', '🧤'),
    createUpgrade('click_4', '염력 모듈', '클릭당 +100', 50000, { type: 'click_power', value: 100 }, 'click_3', '🧠'),
    createUpgrade('click_5', '신경 인터페이스', '클릭당 +500', 250000, { type: 'click_power', value: 500 }, 'click_4', '🔌'),
    createUpgrade('click_6', '현실 조작 장갑', '클릭당 +2000', 1000000, { type: 'click_power', value: 2000 }, 'click_5', '🥊'),
    createUpgrade('click_7', '신의 손길', '클릭당 +10000', 50000000, { type: 'click_power', value: 10000 }, 'click_6', '✨'),
    createUpgrade('click_8', '우주적 존재', '클릭당 +50000', 1000000000, { type: 'click_power', value: 50000 }, 'click_7', '🪐'),
    createUpgrade('click_9', '차원 간섭', '클릭당 +200000', 50000000000, { type: 'click_power', value: 200000 }, 'click_8', '🖐️'),

    // 로봇 업그레이드
    createUpgrade('robot_1', '윤활유 도포', '로봇 효율 2배', 500, { type: 'generator_multiplier', generatorId: 'robot', value: 2 }, null, '🛢️'),
    createUpgrade('robot_2', 'AI 칩셋', '로봇 효율 2배', 2500, { type: 'generator_multiplier', generatorId: 'robot', value: 2 }, 'robot_1', '💾'),
    createUpgrade('robot_3', '티타늄 합금', '로봇 효율 2배', 10000, { type: 'generator_multiplier', generatorId: 'robot', value: 2 }, 'robot_2', '🛡️'),
    createUpgrade('robot_4', '자가 복제', '로봇 효율 5배', 50000, { type: 'generator_multiplier', generatorId: 'robot', value: 5 }, 'robot_3', '👯'),

    // 태양광 업그레이드
    createUpgrade('solar_1', '각도 조절', '태양광 효율 2배', 1000, { type: 'generator_multiplier', generatorId: 'solar', value: 2 }, null, '📐'),
    createUpgrade('solar_2', '집광 렌즈', '태양광 효율 2배', 5000, { type: 'generator_multiplier', generatorId: 'solar', value: 2 }, 'solar_1', '🔍'),
    createUpgrade('solar_3', '나노 코팅', '태양광 효율 2배', 20000, { type: 'generator_multiplier', generatorId: 'solar', value: 2 }, 'solar_2', '🧪'),

    // 풍력 업그레이드
    createUpgrade('wind_1', '가변 날개', '풍력 효율 2배', 11000, { type: 'generator_multiplier', generatorId: 'wind', value: 2 }, null, '🍃'),
    createUpgrade('wind_2', '자기부상 베어링', '풍력 효율 2배', 55000, { type: 'generator_multiplier', generatorId: 'wind', value: 2 }, 'wind_1', '🧲'),

    // 광산 업그레이드
    createUpgrade('mine_1', '레이저 드릴', '광산 효율 2배', 120000, { type: 'generator_multiplier', generatorId: 'mine', value: 2 }, null, '🔦'),
    createUpgrade('mine_2', '자동 운송', '광산 효율 2배', 600000, { type: 'generator_multiplier', generatorId: 'mine', value: 2 }, 'mine_1', '🚋'),

    // 공장 업그레이드
    createUpgrade('factory_1', '스마트 공정', '공장 효율 2배', 1300000, { type: 'generator_multiplier', generatorId: 'factory', value: 2 }, null, '📈'),
    createUpgrade('factory_2', '나노 조립', '공장 효율 2배', 6500000, { type: 'generator_multiplier', generatorId: 'factory', value: 2 }, 'factory_1', '🧬'),

    // 핵융합 업그레이드
    createUpgrade('fusion_1', '플라즈마 제어', '핵융합 효율 2배', 14000000, { type: 'generator_multiplier', generatorId: 'fusion', value: 2 }, null, '🔥'),
    createUpgrade('fusion_2', '냉융합 기술', '핵융합 효율 2배', 70000000, { type: 'generator_multiplier', generatorId: 'fusion', value: 2 }, 'fusion_1', '❄️'),

    // 테라포밍 업그레이드
    createUpgrade('terra_1', '대기 생성기', '테라포밍 효율 2배', 200000000, { type: 'generator_multiplier', generatorId: 'terra', value: 2 }, null, '☁️'),
    createUpgrade('terra_2', '생태계 구축', '테라포밍 효율 2배', 1000000000, { type: 'generator_multiplier', generatorId: 'terra', value: 2 }, 'terra_1', '🌳'),

    // 다이슨 업그레이드
    createUpgrade('dyson_1', '반사 거울', '다이슨 효율 2배', 3300000000, { type: 'generator_multiplier', generatorId: 'dyson', value: 2 }, null, '🪞'),
    createUpgrade('dyson_2', '에너지 빔', '다이슨 효율 2배', 16500000000, { type: 'generator_multiplier', generatorId: 'dyson', value: 2 }, 'dyson_1', '📡'),

    // 반물질 업그레이드
    createUpgrade('antimatter_1', '자기장 감금', '반물질 효율 2배', 51000000000, { type: 'generator_multiplier', generatorId: 'antimatter', value: 2 }, null, '⛓️'),

    // 블랙홀 업그레이드
    createUpgrade('blackhole_1', '사건의 지평선 안정화', '블랙홀 효율 2배', 750000000000, { type: 'generator_multiplier', generatorId: 'blackhole', value: 2 }, null, '🍩'),

    // 양자 업그레이드
    createUpgrade('quantum_1', '큐비트 확장', '양자 효율 2배', 10000000000000, { type: 'generator_multiplier', generatorId: 'quantum', value: 2 }, null, '🎲'),

    // 신규 생성기 업그레이드 (기존)
    createUpgrade('quantum_driller_1', '양자 터널링', '양자 채굴기 효율 2배', 500000000000000000, { type: 'generator_multiplier', generatorId: 'quantum_driller', value: 2 }, null, '⛏️'),
    createUpgrade('star_forge_1', '항성 점화', '별의 대장간 효율 2배', 2500000000000000000000, { type: 'generator_multiplier', generatorId: 'star_forge', value: 2 }, null, '💥'),
    createUpgrade('galaxy_weaver_1', '나선 팔 구조', '은하 직조기 효율 2배', 5000000000000000000000, { type: 'generator_multiplier', generatorId: 'galaxy_weaver', value: 2 }, null, '🌀'),

    // 신규 생성기 업그레이드 (확장)
    createUpgrade('stellar_engine_1', '항성 융합', '항성 엔진 효율 2배', 5000000000000000000000000000, { type: 'generator_multiplier', generatorId: 'stellar_engine', value: 2 }, null, '🌞'),
    createUpgrade('galactic_hub_1', '초공간 통신', '은하 허브 효율 2배', 5000000000000000000000000000000, { type: 'generator_multiplier', generatorId: 'galactic_hub', value: 2 }, null, '📡'),
    createUpgrade('quasar_cannon_1', '제트 분사', '퀘이사 캐논 효율 2배', 50000000000000000000000000000000, { type: 'generator_multiplier', generatorId: 'quasar_cannon', value: 2 }, null, '🌠'),

    createUpgrade('void_harvester_1', '공허 필터', '공허 수확기 효율 2배', 5000000000000000000000000000000000, { type: 'generator_multiplier', generatorId: 'void_harvester', value: 2 }, null, '🕸️'),
    createUpgrade('dimension_rift_1', '차원 안정기', '차원 균열 효율 2배', 500000000000000000000000000000000000, { type: 'generator_multiplier', generatorId: 'dimension_rift', value: 2 }, null, '🔗'),

    // 글로벌 부스트
    createUpgrade('global_1', '에너지 혁명', '모든 생산량 1.1배', 100000, { type: 'global_multiplier', value: 1.1 }, null, '💡'),
    createUpgrade('global_2', '우주 시대', '모든 생산량 1.2배', 10000000, { type: 'global_multiplier', value: 1.2 }, 'global_1', '🚀'),
    createUpgrade('global_3', '초월적 지식', '모든 생산량 1.5배', 1000000000, { type: 'global_multiplier', value: 1.5 }, 'global_2', '📚'),
    createUpgrade('global_4', '우주의 비밀', '모든 생산량 2배', 100000000000, { type: 'global_multiplier', value: 2 }, 'global_3', '🗝️'),
    createUpgrade('global_5', '다중 우주의 진리', '모든 생산량 3배', 100000000000000, { type: 'global_multiplier', value: 3 }, 'global_4', '👁️'),
    createUpgrade('global_6', '신적 존재', '모든 생산량 5배', 100000000000000000000, { type: 'global_multiplier', value: 5 }, 'global_5', '👑'),
    createUpgrade('global_7', '전지전능', '모든 생산량 10배', 100000000000000000000000000, { type: 'global_multiplier', value: 10 }, 'global_6', '🌟'),
];

// 업적 데이터
export const ACHIEVEMENTS = [
    { id: 'energy_1', name: '첫 걸음', description: '총 에너지 1,000 달성', condition: (state) => state.totalEnergyEarned >= 1000, reward: { type: 'global_multiplier', value: 1.05 } },
    { id: 'energy_2', name: '에너지 부자', description: '총 에너지 100만 달성', condition: (state) => state.totalEnergyEarned >= 1000000, reward: { type: 'global_multiplier', value: 1.05 } },
    { id: 'energy_3', name: '에너지 재벌', description: '총 에너지 1억 달성', condition: (state) => state.totalEnergyEarned >= 100000000, reward: { type: 'global_multiplier', value: 1.1 } },
    { id: 'energy_4', name: '우주적 에너지', description: '총 에너지 100억 달성', condition: (state) => state.totalEnergyEarned >= 10000000000, reward: { type: 'global_multiplier', value: 1.1 } },
    { id: 'energy_5', name: '은하계 에너지', description: '총 에너지 1조 달성', condition: (state) => state.totalEnergyEarned >= 1000000000000, reward: { type: 'global_multiplier', value: 1.1 } },
    { id: 'energy_6', name: '초월적 에너지', description: '총 에너지 100조 달성', condition: (state) => state.totalEnergyEarned >= 100000000000000, reward: { type: 'global_multiplier', value: 1.1 } },

    { id: 'click_1', name: '손가락 운동', description: '1,000번 클릭', condition: (state) => state.totalClicks >= 1000, reward: { type: 'click_multiplier', value: 1.1 } },
    { id: 'click_2', name: '마우스 파괴자', description: '10,000번 클릭', condition: (state) => state.totalClicks >= 10000, reward: { type: 'click_multiplier', value: 1.2 } },
    { id: 'click_3', name: '빛의 속도', description: '50,000번 클릭', condition: (state) => state.totalClicks >= 50000, reward: { type: 'click_multiplier', value: 1.3 } },

    { id: 'gen_1', name: '자동화의 시작', description: '생성기 10개 보유', condition: (state) => Object.values(state.generators).reduce((a, b) => a + b.count, 0) >= 10, reward: { type: 'global_multiplier', value: 1.01 } },
    { id: 'gen_2', name: '공장장', description: '생성기 100개 보유', condition: (state) => Object.values(state.generators).reduce((a, b) => a + b.count, 0) >= 100, reward: { type: 'global_multiplier', value: 1.05 } },
    { id: 'gen_3', name: '산업 혁명', description: '생성기 500개 보유', condition: (state) => Object.values(state.generators).reduce((a, b) => a + b.count, 0) >= 500, reward: { type: 'global_multiplier', value: 1.1 } },
    { id: 'gen_4', name: '대량 생산', description: '생성기 1,000개 보유', condition: (state) => Object.values(state.generators).reduce((a, b) => a + b.count, 0) >= 1000, reward: { type: 'global_multiplier', value: 1.15 } },
    { id: 'gen_5', name: '우주 공장', description: '생성기 2,000개 보유', condition: (state) => Object.values(state.generators).reduce((a, b) => a + b.count, 0) >= 2000, reward: { type: 'global_multiplier', value: 1.2 } },

    { id: 'prestige_1', name: '새로운 시작', description: '첫 차원 도약', condition: (state) => state.prestigeCount >= 1, reward: { type: 'global_multiplier', value: 1.1 } },
    { id: 'prestige_2', name: '시간 여행자', description: '차원 도약 5회', condition: (state) => state.prestigeCount >= 5, reward: { type: 'global_multiplier', value: 1.2 } },
    { id: 'prestige_3', name: '차원 지배자', description: '차원 도약 10회', condition: (state) => state.prestigeCount >= 10, reward: { type: 'global_multiplier', value: 1.3 } },
];

// 프레스티지 업그레이드 (암흑 물질 사용)
export const PRESTIGE_UPGRADES = [
    { id: 'dark_1', name: '암흑 에너지', description: '기본 클릭 파워 +100%', cost: 1, effect: { type: 'click_multiplier', value: 2 } },
    { id: 'dark_2', name: '시간 왜곡', description: '모든 생산 속도 10% 증가', cost: 5, effect: { type: 'global_multiplier', value: 1.1 } },
    { id: 'dark_3', name: '비용 절감', description: '모든 생성기 비용 10% 감소', cost: 10, effect: { type: 'cost_reduction', value: 0.9 } },
    { id: 'dark_4', name: '시너지 효과', description: '업적 보상 효과 2배', cost: 50, effect: { type: 'achievement_boost', value: 2 } },

    // 자동화 업그레이드
    { id: 'auto_buy_generators', name: '생산기 자동 구매', description: '생산기를 자동으로 구매합니다', cost: 20, effect: { type: 'auto_buy_generators', value: true } },
    { id: 'auto_buy_upgrades', name: '업그레이드 자동 구매', description: '업그레이드를 자동으로 구매합니다', cost: 30, effect: { type: 'auto_buy_upgrades', value: true } },

    // 고급 프레스티지 업그레이드
    { id: 'void_click', name: '공허의 클릭', description: '클릭 시 초당 생산량의 1% 획득', cost: 100, effect: { type: 'click_production_percent', value: 0.01 } },
    { id: 'chrono_surge', name: '시간 가속', description: '게임 틱 속도 20% 가속', cost: 500, effect: { type: 'tick_speed', value: 0.8 } }, // Tick interval * 0.8
    { id: 'dark_automation', name: '암흑 자동화', description: '초당 10회 자동 클릭', cost: 1000, effect: { type: 'auto_click', value: 10 } },
];

// 별의 유물 (영구 아이템)
export const ARTIFACTS = [
    {
        id: 'quantum_shard',
        name: '양자 파편',
        description: '모든 비용 20% 감소 (영구)',
        condition: (state) => state.totalEnergyAllTime >= 1000000000000000, // 1 Qa
        effect: { type: 'cost_reduction', value: 0.8 },
        icon: '💎'
    },
    {
        id: 'void_essence',
        name: '공허의 정수',
        description: '암흑 물질 효율 +50% (영구)',
        condition: (state) => state.prestigeLayers[1].currency >= 100,
        effect: { type: 'dark_matter_boost', value: 1.5 },
        icon: '🔮'
    },
    {
        id: 'time_crystal',
        name: '시간의 결정',
        description: '게임 속도 2배 (영구)',
        condition: (state) => state.totalEnergyAllTime >= 1000000000000000000000, // 1 Sx
        effect: { type: 'tick_speed', value: 0.5 },
        icon: '⏳'
    },
    {
        id: 'galaxy_compass',
        name: '은하 나침반',
        description: '모든 생산량 5배 (영구)',
        condition: (state) => state.prestigeCount >= 20,
        effect: { type: 'global_multiplier', value: 5 },
        icon: '🧭'
    },
    {
        id: 'dimension_anchor',
        name: '차원 닻',
        description: '프레스티지 요구량 50% 감소 (영구)',
        condition: (state) => state.prestigeLayers[2].count >= 1,
        effect: { type: 'prestige_req_reduction', value: 0.5 },
        icon: '⚓'
    },
    {
        id: 'infinity_engine',
        name: '무한 엔진',
        description: '자동 클릭 속도 4배 (영구)',
        condition: (state) => state.totalClicks >= 100000,
        effect: { type: 'auto_click_speed', value: 4 },
        icon: '⚙️'
    },
    {
        id: 'cosmic_lens',
        name: '코스믹 렌즈',
        description: '클릭 파워 10배 (영구)',
        condition: (state) => state.clickPower >= 1000000,
        effect: { type: 'click_multiplier', value: 10 },
        icon: '🔭'
    },
    {
        id: 'starlight_prism',
        name: '별빛 프리즘',
        description: '암흑 물질 획득량 2배 (영구)',
        condition: (state) => state.prestigeLayers[1].currency >= 100000,
        effect: { type: 'prestige_currency_boost', value: 2 },
        icon: '🌈'
    },
    {
        id: 'void_shield',
        name: '공허의 방패',
        description: '시간의 모래 획득량 2배 (영구)',
        condition: (state) => state.prestigeLayers[2].currency >= 100,
        effect: { type: 'time_sands_boost', value: 2 },
        icon: '🛡️'
    },
    {
        id: 'omega_cube',
        name: '오메가 큐브',
        description: '모든 효과 2배 (영구)',
        condition: (state) => state.prestigeLayers[3].count >= 1,
        effect: { type: 'all_boost', value: 2 },
        icon: '🧊'
    },
    // 신규 유물 (확장)
    {
        id: 'void_heart',
        name: '공허의 심장',
        description: '공허의 파편 효율 3배 (영구)',
        condition: (state) => state.prestigeLayers[4].count >= 1,
        effect: { type: 'void_shard_boost', value: 3 },
        icon: '🖤'
    },
    {
        id: 'reality_key',
        name: '현실의 열쇠',
        description: '현실의 조각 획득량 2배 (영구)',
        condition: (state) => state.prestigeLayers[5].count >= 1,
        effect: { type: 'reality_fragment_boost', value: 2 },
        icon: '🗝️'
    },
    {
        id: 'chronos_crown',
        name: '크로노스의 왕관',
        description: '게임 속도 3배 (영구)',
        condition: (state) => state.prestigeLayers[2].currency >= 10000,
        effect: { type: 'tick_speed', value: 0.33 }, // 3배 가속
        icon: '👑'
    },
    {
        id: 'stellar_map',
        name: '성도',
        description: '별의 정수 획득량 2배 (영구)',
        condition: (state) => state.prestigeLayers[3].currency >= 100,
        effect: { type: 'stellar_essence_boost', value: 2 },
        icon: '🗺️'
    },
    {
        id: 'infinity_gauntlet',
        name: '인피니티 건틀릿',
        description: '모든 생산량 10배 (영구)',
        condition: (state) => state.achievements.length >= 20,
        effect: { type: 'global_multiplier', value: 10 },
        icon: '🧤'
    },
    {
        id: 'developer_coffee',
        name: '개발자의 커피',
        description: '클릭 파워 5배 (영구)',
        condition: (state) => state.totalClicks >= 1000000,
        effect: { type: 'click_multiplier', value: 5 },
        icon: '☕'
    },
];

// 시간 역행 업그레이드 (시간의 모래 사용)
export const TIME_REVERSAL_UPGRADES = [
    { id: 'time_keep_1', name: '기억 보존', description: '리셋 시 에너지의 1%를 유지합니다', cost: 1, effect: { type: 'keep_energy', value: 0.01 } },
    { id: 'time_keep_2', name: '물질 보존', description: '리셋 시 생성기를 1개씩 유지합니다', cost: 3, effect: { type: 'keep_generators', value: 1 } },
    { id: 'time_boost_1', name: '시간 가속', description: '암흑 물질 획득량 +100%', cost: 5, effect: { type: 'dark_matter_boost', value: 2 } },
    { id: 'time_boost_2', name: '차원 안정화', description: '비용 감소 효율 +10%', cost: 10, effect: { type: 'cost_reduction_boost', value: 1.1 } },
    { id: 'time_auto_1', name: '자동화 마스터', description: '자동 구매 속도 2배', cost: 20, effect: { type: 'auto_buy_speed', value: 2 } },
    { id: 'time_auto_dark', name: '암흑 상점 자동화', description: '암흑 상점 아이템을 자동으로 구매합니다', cost: 50, effect: { type: 'auto_buy_dark_shop', value: true } },
    { id: 'time_passive_dark', name: '암흑 물질 생성', description: '환생 시 얻는 암흑 물질의 1%를 0.01초마다 획득', cost: 100, effect: { type: 'passive_dark_matter', value: 0.01 } },
];

// 우주 승천 업그레이드 (별의 정수 사용)
export const COSMIC_ASCENSION_UPGRADES = [
    { id: 'cosmic_boom', name: '우주 대폭발', description: '모든 생산량 10배', cost: 1, effect: { type: 'global_multiplier', value: 10 } },
    { id: 'stellar_click', name: '별의 힘', description: '클릭 파워 100배', cost: 2, effect: { type: 'click_multiplier', value: 100 } },
    { id: 'galaxy_brain', name: '은하적 지능', description: '업그레이드 효과 2배', cost: 5, effect: { type: 'upgrade_boost', value: 2 } }, // 구현 필요
    { id: 'cosmic_synergy', name: '우주적 시너지', description: '보유한 생성기 종류당 생산량 +50%', cost: 10, effect: { type: 'synergy_boost', value: 0.5 } }, // 구현 필요
    { id: 'cosmic_auto_time', name: '시간 상점 자동화', description: '시간 상점 아이템을 자동으로 구매합니다', cost: 50, effect: { type: 'auto_buy_time_shop', value: true } },
    { id: 'cosmic_passive_time', name: '시간의 지배자', description: '환생 시 얻는 시간의 모래의 1%를 0.01초마다 획득', cost: 100, effect: { type: 'passive_time_sands', value: 0.01 } },
];

// 공허 통합 업그레이드 (공허의 파편 사용)
export const VOID_INTEGRATION_UPGRADES = [
    { id: 'void_cut', name: '공허의 절단', description: '모든 비용 50% 감소', cost: 1, effect: { type: 'cost_reduction', value: 0.5 } },
    { id: 'void_space', name: '공허 공간', description: '최대 에너지 저장량 100배 (의미 없음)', cost: 5, effect: { type: 'storage_boost', value: 100 } }, // 예시용
    { id: 'void_efficiency', name: '공허 효율', description: '생성기 가격 증가율 감소 (1.15 -> 1.12)', cost: 10, effect: { type: 'cost_scaling_reduction', value: 0.03 } }, // 구현 필요
    { id: 'void_mastery', name: '공허 마스터리', description: '공허의 파편 효과(비용 감소) 2배', cost: 20, effect: { type: 'void_shard_boost', value: 2 } }, // 구현 필요
    { id: 'void_auto_cosmic', name: '우주 상점 자동화', description: '우주 상점 아이템을 자동으로 구매합니다', cost: 50, effect: { type: 'auto_buy_cosmic_shop', value: true } },
    { id: 'void_passive_stellar', name: '별의 포식자', description: '환생 시 얻는 별의 정수의 1%를 0.01초마다 획득', cost: 100, effect: { type: 'passive_stellar_essence', value: 0.01 } },
];

// 현실 조작 업그레이드 (현실의 조각 사용)
export const REALITY_OVERWRITE_UPGRADES = [
    { id: 'reality_warp', name: '현실 왜곡', description: '게임 틱 속도 2배', cost: 1, effect: { type: 'tick_speed', value: 0.5 } },
    { id: 'reality_bend', name: '법칙 붕괴', description: '모든 자동화 속도 10배', cost: 5, effect: { type: 'auto_speed_boost', value: 10 } }, // 구현 필요
    { id: 'reality_glitch', name: '현실 글리치', description: '1% 확률로 생산량 1000배 (틱당)', cost: 10, effect: { type: 'crit_production', value: 1000 } }, // 구현 필요
    { id: 'reality_admin', name: '관리자 권한', description: '치트 모드 활성화 (농담: 생산량 100배)', cost: 50, effect: { type: 'global_multiplier', value: 100 } },
    { id: 'reality_auto_void', name: '공허 상점 자동화', description: '공허 상점 아이템을 자동으로 구매합니다', cost: 50, effect: { type: 'auto_buy_void_shop', value: true } },
    { id: 'reality_passive_void', name: '공허의 창조주', description: '환생 시 얻는 공허의 파편의 1%를 0.01초마다 획득', cost: 100, effect: { type: 'passive_void_shards', value: 0.01 } },
];

// 숫자 포맷팅 헬퍼 (확장됨)
// 숫자 포맷팅 헬퍼 (확장됨)
export const formatNumber = (num) => {
    if (num < 1000) return Math.floor(num).toLocaleString('ko-KR');

    // 과학적 표기법 처리 ("1e+21" 등) 방지를 위해 로그 사용
    const exponent = Math.floor(Math.log10(num));
    const suffixIndex = Math.floor(exponent / 3);

    const suffixes = [
        '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc',
        'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg'
    ];

    if (suffixIndex >= suffixes.length) {
        return num.toExponential(2); // 너무 크면 과학적 표기법
    }

    const suffix = suffixes[suffixIndex];
    const shortValue = num / Math.pow(10, suffixIndex * 3);

    // 소수점 처리 (정수면 소수점 없음, 아니면 2자리까지)
    let formattedValue = shortValue.toFixed(2);
    if (formattedValue.endsWith('.00')) {
        formattedValue = formattedValue.slice(0, -3);
    } else if (formattedValue.endsWith('0')) {
        formattedValue = formattedValue.slice(0, -1);
    }

    return formattedValue + suffix;
};

// 마일스톤 보너스 계산
export const getMilestoneMultiplier = (count) => {
    let bonus = 1;
    if (count >= 25) bonus *= 2;
    if (count >= 50) bonus *= 2;
    if (count >= 100) bonus *= 2;

    // 100 이후에는 100단위로 2배
    if (count > 100) {
        bonus *= Math.pow(2, Math.floor((count - 100) / 100));
    }
    return bonus;
};

// 다음 마일스톤까지 남은 개수
export const getNextMilestone = (count) => {
    if (count < 25) return 25;
    if (count < 50) return 50;
    if (count < 100) return 100;
    return Math.floor(count / 100) * 100 + 100;
};

export const getGeneratorCost = (generator, count, costReduction = 1) => {
    return Math.floor(generator.baseCost * Math.pow(generator.costMultiplier, count) * costReduction);
};

// 일괄 구매 가격 계산
export const getBulkGeneratorCost = (generator, currentCount, quantity, costReduction = 1) => {
    let totalCost = 0;
    let cost = 0;
    for (let i = 0; i < quantity; i++) {
        cost = Math.floor(generator.baseCost * Math.pow(generator.costMultiplier, currentCount + i) * costReduction);
        totalCost += cost;
    }
    return totalCost;
};

// 최대 구매 가능 수량 계산
export const getMaxBuyableCount = (generator, currentCount, currentEnergy, costReduction = 1) => {
    let count = 0;
    let totalCost = 0;
    let nextCost = Math.floor(generator.baseCost * Math.pow(generator.costMultiplier, currentCount) * costReduction);

    while (totalCost + nextCost <= currentEnergy) {
        totalCost += nextCost;
        count++;
        nextCost = Math.floor(generator.baseCost * Math.pow(generator.costMultiplier, currentCount + count) * costReduction);
        if (count >= 1000) break; // 안전장치
    }
    return count;
};

export const getGeneratorProduction = (generator, count, multiplier = 1) => {
    const milestoneMultiplier = getMilestoneMultiplier(count);
    return generator.baseProduction * count * multiplier * milestoneMultiplier;
};

// 프레스티지 획득량 계산
export const PRESTIGE_LAYERS = {
    1: {
        id: 1,
        name: "차원 도약 (Dimension Jump)",
        currencyName: "암흑 물질 (Dark Matter)",
        description: "우주를 리셋하고 암흑 물질을 획득합니다. 암흑 물질은 생산량을 증가시킵니다.",
        resetTarget: "energy", // 하위 모든 것 리셋
        baseRequirement: 100000000, // 1억 (0.1B)
        resourceType: "energy",
        bonusType: "production_multiplier",
        bonusValue: 0.1, // 개당 10%
        color: "#800080" // 보라색
    },
    2: {
        id: 2,
        name: "시간 역행 (Time Reversal)",
        currencyName: "시간의 모래 (Time Sands)",
        description: "차원 도약 단계를 리셋하고 시간의 모래를 획득합니다. 시간의 모래는 생산량을 곱연산으로 증폭시킵니다.",
        resetTarget: 1, // 1단계 리셋
        baseRequirement: 5000, // 암흑 물질 5000개
        resourceType: "prestige_currency_1",
        bonusType: "global_multiplier",
        bonusValue: 1, // 개당 +100% (2배)
        color: "#DAA520" // 골드
    },
    3: {
        id: 3,
        name: "우주 승천 (Cosmic Ascension)",
        currencyName: "별의 정수 (Stellar Essence)",
        description: "시간 역행 단계를 리셋하고 별의 정수를 획득합니다. 별의 정수는 강력한 패시브 버프를 제공합니다.",
        resetTarget: 2,
        baseRequirement: 1000, // 시간의 모래 1000개
        resourceType: "prestige_currency_2",
        bonusType: "global_multiplier_tier_2", // 더 강력한 곱연산
        bonusValue: 10, // 개당 +1000% (10배)
        color: "#00BFFF" // 딥 스카이 블루
    },
    4: {
        id: 4,
        name: "공허 통합 (Void Integration)",
        currencyName: "공허의 파편 (Void Shards)",
        description: "우주 승천 단계를 리셋하고 공허의 파편을 획득합니다. 공허의 파편은 모든 비용을 감소시킵니다.",
        resetTarget: 3,
        baseRequirement: 1000, // 별의 정수 1000개
        resourceType: "prestige_currency_3",
        bonusType: "cost_reduction",
        bonusValue: 0.01, // 개당 1% 감소 (복리)
        color: "#4B0082" // 인디고
    },
    5: {
        id: 5,
        name: "현실 조작 (Reality Overwrite)",
        currencyName: "현실의 조각 (Reality Fragments)",
        description: "공허 통합 단계를 리셋하고 현실의 조각을 획득합니다. 현실의 조각은 게임 속도를 가속합니다.",
        resetTarget: 4,
        baseRequirement: 1000, // 공허의 파편 1000개
        resourceType: "prestige_currency_4",
        bonusType: "tick_speed",
        bonusValue: 0.1, // 개당 10% 가속
        color: "#FF4500" // 오렌지 레드
    }
};

export const calculateLayerCurrency = (layerId, currentResource) => {
    const layer = PRESTIGE_LAYERS[layerId];
    if (currentResource < layer.baseRequirement) return 0;

    // 로그 스케일로 계산 (너무 급격한 인플레이션 방지)
    // 공식: log10(resource / requirement)
    // 1e12 -> 1, 1e13 -> 10, 1e14 -> 100 ... (기존 공식과 유사하게)

    if (layerId === 1) {
        return Math.floor(Math.pow(currentResource / 100000000, 0.5)); // 1억 기준 제곱근
    }

    // 상위 레이어는 더 어렵게
    return Math.floor(Math.pow(currentResource / layer.baseRequirement, 0.3));
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Apply upgrade effect to game state
 * Centralizes all effect application logic
 */
export const applyUpgradeEffect = (state, upgrade) => {
    const newState = { ...state };
    const effect = upgrade.effect;

    switch (effect.type) {
        case 'click_power':
            newState.clickPower += effect.value;
            break;
        case 'click_multiplier':
            newState.clickPower *= effect.value;
            break;
        case 'global_multiplier':
            newState.globalMultiplier *= effect.value;
            break;
        case 'cost_reduction':
            newState.costReduction *= effect.value;
            break;
        case 'generator_multiplier':
            if (newState.generators[effect.generatorId]) {
                newState.generators[effect.generatorId] = {
                    ...newState.generators[effect.generatorId],
                    multiplier: newState.generators[effect.generatorId].multiplier * effect.value
                };
            }
            break;
        case 'tick_speed':
            newState.tickRateMultiplier *= effect.value;
            break;
        case 'auto_click':
            newState.autoClicker += effect.value;
            break;
        case 'click_production_percent':
            newState.clickProductionPercent += effect.value;
            break;
        case 'dark_matter_boost':
            newState.darkMatterEfficiency *= effect.value;
            break;
        // Passive generation and auto-buy effects don't modify state directly
        case 'passive_dark_matter':
        case 'passive_time_sands':
        case 'passive_stellar_essence':
        case 'passive_void_shards':
        case 'auto_buy_generators':
        case 'auto_buy_upgrades':
        case 'auto_buy_dark_shop':
        case 'auto_buy_time_shop':
        case 'auto_buy_cosmic_shop':
        case 'auto_buy_void_shop':
            // These are handled in game loop
            break;
        default:
            console.warn(`Unknown effect type: ${effect.type}`);
    }

    return newState;
};

/**
 * Apply artifact effect to game state
 */
export const applyArtifactEffect = (state, artifact) => {
    const newState = { ...state };
    const effect = artifact.effect;

    switch (effect.type) {
        case 'cost_reduction':
            newState.costReduction *= effect.value;
            break;
        case 'dark_matter_boost':
            newState.darkMatterEfficiency *= effect.value;
            break;
        case 'tick_speed':
            newState.tickRateMultiplier *= effect.value;
            break;
        case 'click_multiplier':
            newState.clickPower *= effect.value;
            break;
        case 'global_multiplier':
            newState.globalMultiplier *= effect.value;
            break;
        default:
            console.warn(`Unknown artifact effect type: ${effect.type}`);
    }

    return newState;
};

/**
 * Calculate total production multiplier
 * Centralizes multiplier calculation
 */
export const calculateTotalMultiplier = (prestigeLayers, globalMultiplier, darkMatterEfficiency) => {
    // 1단계: 암흑 물질 (생산량 +10%)
    const darkMatter = prestigeLayers[1].currency;
    const darkMatterBonus = 1 + (darkMatter * GAME_CONFIG.DARK_MATTER_BONUS * darkMatterEfficiency);

    // 2단계: 시간의 모래 (생산량 +100% 곱연산)
    const timeSands = prestigeLayers[2].currency;
    const timeSandsBonus = 1 + (timeSands * 1); // 개당 +100%

    // 3단계: 별의 정수 (생산량 +1000% 곱연산)
    const stellarEssence = prestigeLayers[3].currency;
    const stellarEssenceBonus = 1 + (stellarEssence * 10); // 개당 +1000%

    return globalMultiplier * darkMatterBonus * timeSandsBonus * stellarEssenceBonus;
};

/**
 * Calculate passive currency gain
 * @param {number} potentialGain - The potential gain if prestige was performed
 * @param {number} deltaTime - Time elapsed in milliseconds
 * @param {number} rate - Rate of passive gain (default 0.005 = 0.5% per 0.01s)
 * @returns {number} The amount to add to currency
 */
export const calculatePassiveGain = (potentialGain, deltaTime, rate = 0.005) => {
    if (potentialGain <= 0) return 0;
    // rate per 0.01s (10ms), so multiply by (deltaTime / 10)
    return potentialGain * rate * (deltaTime / 10);
};

