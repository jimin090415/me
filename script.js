
// 1. 30가지 질문 데이터 정의 (유저에게 노출되는 선택지에서 성향 힌트 완벽 제거)
const questions = [
    // === E vs I (외향 vs 내향) : 8문항 ===
    {
        q: "대학교 첫 오리엔테이션(OT)날, 나의 행동은?",
        type: "EI",
        A: "옆 사람에게 적극적으로 말을 걸어 인스타 맞팔을 한다.",
        B: "조용히 에브리타임 켜고 '여기 기 빨린다'고 글을 쓴다."
    },
    {
        q: "교수님이 갑자기 팀 프로젝트 조장을 정하라고 하신다. 이때 나는?",
        type: "EI",
        A: "답답하니 그냥 내가 먼저 하겠다고 손을 든다.",
        B: "눈을 아래로 깔고 절대로 교수님과 시선을 마주치지 않는다."
    },
    {
        q: "시험이 끝나 드디어 종강했다! 주말을 보내는 나의 방식은?",
        type: "EI",
        A: "그동안 못 만났던 친구들을 불러 모아 밤새 달린다.",
        B: "침대와 물아일체가 되어 넷플릭스를 정주행한다."
    },
    {
        q: "새 학기 첫 주, 강의실에 들어갔는데 아는 사람이 아무도 없다!",
        type: "EI",
        A: "가장 인상이 좋아 보이는 사람 옆자리에 가 슬쩍 말을 건넨다.",
        B: "맨 뒷자리나 구석 자리에 조용히 앉아 스마트폰만 본다."
    },
    {
        q: "동기들과의 술자리나 모임이 끝난 후, 집으로 돌아갈 때 내 상태는?",
        type: "EI",
        A: "사람들과 떠들며 에너지를 풀 충전해서 오히려 쌩쌩하다.",
        B: "즐거웠지만 영혼까지 탈탈 털린 기분이라 빨리 눕고 싶다."
    },
    {
        q: "학과 동아리를 고를 때 내가 더 끌리는 곳은?",
        type: "EI",
        A: "축제 기획, 밴드, 댄스 등 사람들과 시끌벅적하게 어울리는 곳",
        B: "독서 토론, 영화 감상, 사진 촬영 등 소규모로 깊게 소통하는 곳"
    },
    {
        q: "과제를 하다가 막히는 부분이 생겼을 때 나는 주로 어떻게 해결할까?",
        type: "EI",
        A: "단톡방에 물어보거나 동기들에게 전화해서 같이 머리를 맞댄다.",
        B: "구글링이나 전공 서적을 뒤져보며 혼자 스스로 찾아낸다."
    },
    {
        q: "팀플 발표 당일, 우리 조 발표자가 갑자기 잠수를 탔다. 교수님은 대신할 사람을 찾는데...",
        type: "EI",
        A: "어쩔 수 없지! 대본을 뺏어 들고 임기응변으로 발표를 시작한다.",
        B: "심장이 터질 것 같고 눈앞이 캄캄해지며 제발 내가 안 걸리길 빈다."
    },

    // === S vs N (현실 vs 이상) : 7문항 ===
    {
        q: "과제를 시작하기 전, 나의 행동 패턴은?",
        type: "SN",
        A: "작성 기준, 글자 수, 마감 기한 등 공지사항 조건부터 확인한다.",
        B: "이 과제가 인류 발전에 미칠 영향 상상하다가 유튜브 켠다."
    },
    {
        q: "수업 도중 교수님이 '만약 내일 지구가 멸망한다면?'이라는 질문을 던졌다.",
        type: "SN",
        A: "'학점 안 나와도 되겠네' 하고 지극히 현실적인 생각을 한다.",
        B: "우주선 대피 계획부터 좀비 사태 생존 시나리오까지 머릿속으로 짠다."
    },
    {
        q: "친구가 맛집이라며 링크를 보내줬다. 내가 먼저 보는 것은?",
        type: "SN",
        A: "가격, 위치, 메뉴판 구성, 방문자 리뷰 평점",
        B: "가게의 인테리어 감성, 독특한 콘셉트와 인스타 무드"
    },
    {
        q: "전공 수업을 들을 때 나는 어떤 스타일의 설명이 더 이해가 잘 될까?",
        type: "SN",
        A: "정확한 수치, 실제 예시, 기출문제 위주의 명확한 설명",
        B: "이론의 역사적 배경, 거시적인 개념, 비유적인 비즈니스 스토리"
    },
    {
        q: "버스나 지하철을 타고 통학할 때, 창밖을 보며 나는 무슨 생각을 할까?",
        type: "SN",
        A: "오늘 할 일 생각이나 무의식적으로 멍을 때린다.",
        B: "내가 만약 복권 1등에 당첨되면 이 지하철 노선을 살 수 있을까 상상한다."
    },
    {
        q: "친구가 '너 나중에 커서 뭐가 될래?'라고 물어본다면?",
        type: "SN",
        A: "현재 취업 시장 트렌드와 내 스펙에 맞춘 직업군을 말한다.",
        B: "돈 많은 백수, 세계 최고 크리에이터 등 원대한 꿈을 늘어놓는다."
    },
    {
        q: "새로운 스마트폰이나 전자기기를 새로 샀을 때 나는?",
        type: "SN",
        A: "설명서나 기본 기능을 하나씩 눌러보며 직관적으로 파악한다.",
        B: "이 기기를 활용해 내가 할 수 있는 창의적인 작업들을 상상해본다."
    },

    // === T vs F (이성 vs 감성) : 7문항 ===
    {
        q: "친구가 '나 오늘 수능 모의고사 망쳐서 우울해'라고 연락해왔다. 나의 답변은?",
        type: "TF",
        A: "몇 등급 나왔는데? 어떤 과목이 생각보다 낮게 나왔어?",
        B: "ㅠㅠ 많이 속상하겠다... 맛있는 거 먹고 오늘 푹 쉬자!"
    },
    {
        q: "친구가 힘들게 밤새서 준비한 공모전에서 떨어졌다고 눈물을 흘린다.",
        type: "TF",
        A: "심사 기준이 뭐였는지 분석해주며 다음 탈출 전략을 조언한다.",
        B: "일단 같이 교수나 심사위원을 욕해주며 친구를 꼭 안아준다."
    },
    {
        q: "교수님이 내 리포트에 '논리적 근거 부족'이라며 C를 주셨다. 내 반응은?",
        type: "TF",
        A: "어디가 부족했는지 분석하고 피드백을 요청할지 고민한다.",
        B: "'교수님 나 싫어하시나...' 하고 속상해서 하루 종일 우울하다."
    },
    {
        q: "팀원 중 한 명이 사정이 생겨 과제를 제대로 못 해왔다. 이때 조장인 나는?",
        type: "TF",
        A: "사정은 안타깝지만 공평성을 위해 기여도에서 이름을 빼거나 줄인다.",
        B: "얼마나 힘들었으면 그랬을까 싶어 내가 밤을 새워 채워준다."
    },
    {
        q: "내가 생각하는 '진짜 좋은 친구'의 정의는 무엇에 더 가까울까?",
        type: "TF",
        A: "내가 잘못된 길을 갈 때 냉정하게 팩트로 뼈를 때려주는 친구",
        B: "내가 어떤 짓을 하든 무조건 내 편을 들어주고 공감해주는 친구"
    },
    {
        q: "동기가 나에게 옷을 보여주며 '이 옷 어때? 내 최애 옷이야!' 했는데 솔직히 별로다.",
        type: "TF",
        A: "핏이 좀 안 사는 것 같아. 다른 색깔이 더 나을 듯?",
        B: "우와! 특이하고 예쁘다! 너랑 되게 잘 어울려!"
    },
    {
        q: "열심히 준비한 축제 무대가 끝났다. 내가 들었을 때 최고의 극찬은?",
        type: "TF",
        A: "너 진짜 프로 같더라. 기획이랑 무대 연출 퀄리티 미쳤음.",
        B: "너 무대할 때 나 눈물 흘릴 뻔했잖아... 감동 그 자체였어."
    },

    // === J vs P (계획 vs 즉흥) : 8문항 ===
    {
        q: "종강 기념 친구들과 여행을 가기로 했다. 나의 계획 스타일은?",
        type: "JP",
        A: "시간 단위 동선과 대안 맛집 리스트까지 정리한다.",
        B: "기차표만 예매하고 '가서 끌리는 곳으로 가자'며 가방을 싼다."
    },
    {
        q: "시험 기간 공부 계획을 세울 때 나의 모습은?",
        type: "JP",
        A: "일별, 과목별, 페이지 수까지 세부 계획표를 작성하고 시작한다.",
        B: "교재 첫 페이지 펼치고 '오늘은 이 과목 필이 꽂히는데?' 하고 시작한다."
    },
    {
        q: "과제 마감일이 일주일 남았을 때, 나는 보통 어떻게 행동하는가?",
        type: "JP",
        A: "미리미리 매일 조금씩 작성해서 마감 2일 전에 제출한다.",
        B: "마감 전날 밤 11시, 초인적인 '벼락치기' 에너지를 발휘해 제출한다."
    },
    {
        q: "내 방 책상이나 서랍의 물건들은 보통 어떤 상태인가?",
        type: "JP",
        A: "물건들이 각각 지정된 위치에 칼같이 정리되어 있다.",
        B: "어디에 뭐가 있는지 나만 아는 '질서 있는 혼돈' 상태다."
    },
    {
        q: "친구와 내일 만나기로 했는데, 갑자기 당일 아침에 약속이 취소되었다!",
        type: "JP",
        A: "오늘 하려던 하루 스케줄이 다 꼬여서 순간적으로 스트레스를 받는다.",
        B: "오히려 좋아! 집에서 빈둥거릴 합법적 명분이 생겨서 행복하다."
    },
    {
        q: "수업 교재를 사러 서점에 가야 한다. 나의 행동은?",
        type: "JP",
        A: "온라인으로 재고가 있는지 미리 검색해보고 바로 사러 간다.",
        B: "일단 서점에 간 뒤, 눈에 띄는 다른 베스트셀러 책들까지 구경하다 온다."
    },
    {
        q: "스마트폰 카톡이나 메일 수신함의 알림 배지(빨간 숫자)를 보면 나는?",
        type: "JP",
        A: "쌓여있는 꼴을 못 본다. 바로 들어가서 읽거나 안 읽음 처리를 지운다.",
        B: "999+가 떠 있어도 별 신경 안 쓰고 둔다. 급한 것만 보면 됨."
    },
    {
        q: "과제를 하려고 노트북을 켰는데, 친구가 '야 지금 당장 피시방 가자!'고 한다.",
        type: "JP",
        A: "'나 오늘 이거 끝내야 해'라며 거절하고 할 일을 마친다.",
        B: "노트북을 빛의 속도로 닫으며 '개꿀! 일단 가고 과제는 새벽에 하지 뭐'라며 나간다."
    }
];

// 2. 16가지 MBTI 결과 데이터
const results = {
    "ISTJ": { univ: "PRO계획대학교", dept: "메모장관리학과", features: ["모든 일상에 체크리스트가 없으면 불안해합니다.", "학과의 필수 이수 과목은 '약속 시간 10분 전 도착하기'입니다.", "정리정돈의 신으로 불립니다."], good: "아이디어 대학교 (ENFP)", bad: "즉흥대학교 (ENTP)" },
    "ISFJ": { univ: "하트시그널대학교", dept: "오지랖케어학과", features: ["남의 눈치를 조용히 보며 챙겨주는 배려왕입니다.", "친구의 슬픈 사연에 본인이 밤새 잠을 못 잡니다.", "뒤에서 묵묵히 청소하고 과제 다 해두는 스타일."], good: "열정대학교 (ESTP)", bad: "철벽대학교 (INTJ)" },
    "INFJ": { univ: "호그와트대학교", dept: "새벽감성망상학과", features: ["생각이 너무 많아서 머릿속에 세계관이 하나 있습니다.", "겉으론 웃고 있지만 속으로는 우주 평화를 걱정합니다.", "애늙은이 같다는 소리를 자주 듣습니다."], good: "핵인싸대학교 (ENFJ)", bad: "로봇대학교 (ISTP)" },
    "INTJ": { univ: "AI인공지능대학교", dept: "나만의철벽학과", features: ["효율성을 최우선으로 하며 무의미한 대화를 싫어합니다.", "혼자 일할 때 최고의 아웃풋이 나옵니다.", "차갑다는 소리를 듣지만 내 사람에겐 진심입니다."], good: "논리대학교 (ENTP)", bad: "감성대학교 (ESFP)" },
    "ISTP": { univ: "귀차니즘대학교", dept: "마감직전벼락치기학과", features: ["만사가 귀찮지만 벼락치기 효율은 세계 최고입니다.", "말수가 적고 가성비를 엄청나게 따집니다.", "누워있기가 특기이며 효율적인 게으름뱅이입니다."], good: "리더십대학교 (ESTJ)", bad: "눈물샘대학교 (INFP)" },
    "ISFP": { univ: "누워있기대학교", dept: "이불속침대과학과", features: ["일단 침대 밖으로 나가는 것 자체가 큰 결심입니다.", "갈등을 싫어해서 '다 조아~'를 입에 달고 삽니다.", "속마음 거절을 잘못해서 속으로 앓는 편입니다."], good: "에너지대학교 (ESFJ)", bad: "워커홀릭대학교 (ENTP)" },
    "INFP": { univ: "방구석망상대학교", dept: "웹소설주인공학과", features: ["수많은 상상과 시나리오를 집필하는 낭만주의자.", "쿠쿠다스 멘탈이라 작은 한마디에도 밤새 고민합니다.", "하지만 한 번 꽂히면 누구보다 열정적입니다."], good: "아이디어 대학교 (ENFP)", bad: "현실타격대학교 (ESTJ)" },
    "INTP": { univ: "방구석아인슈타인대학교", dept: "위키백과정독학과", features: ["나무위키나 유튜브 지식 채널 보느라 밤새는 게 취미.", "감정 호소보다는 논리적 팩트를 좋아합니다.", "자신만의 흥미 분야 외에는 아예 관심이 없습니다."], good: "우주정복대학교 (ENTJ)", bad: "친목도모대학교 (ESFJ)" },
    "ESTP": { univ: "직진대학교", dept: "말보다행동학과", features: ["일단 저지르고 생각하는 행동파 스릴 마니아.", "어색한 분위기를 못 견뎌서 아무 말 대잔치를 합니다.", "뒤끝이 전혀 없고 시원시원한 성격입니다."], good: "마이웨이대학교 (ISFP)", bad: "망상대학교 (INFJ)" },
    "ESFP": { univ: "홍대거리대학교", dept: "슈퍼스타주인공학과", features: ["지나가는 사람 모두와 친구가 될 수 있는 친화력.", "관심받는 것을 은근히 즐기는 타입입니다.", "지루한 수업은 절대 못 참으며 인생이 축제입니다."], good: "로봇대학교 (ISFJ)", bad: "철벽대학교 (INTJ)" },
    "ENFP": { univ: "유니콘대학교", dept: "리액션대마왕학과", features: ["새로운 것에 금방 흥미를 느끼고 금방 식습니다.", "텐션이 높아서 주변 사람들을 즐겁게 만듭니다.", "계획은 거창하지만 실천은 내일부터 합니다."], good: "벼락치기대학교 (ISTJ)", bad: "AI대학교 (ISTJ)" },
    "ENTP": { univ: "PRO반박대학교", dept: "내말이맞다학과", features: ["토론과 말싸움에서 절대 지지 않는 브레인.", "꼰대나 고정관념을 깨부수며 카타르시스를 느깁니다.", "변덕이 심해 시작한 일의 끝을 잘 못 봅니다."], good: "인공지능대학교 (INTJ)", bad: "감성샘대학교 (ISFJ)" },
    "ESTJ": { univ: "정공법대학교", dept: "과대표조장학과", features: ["조별과제할 때 빌런들을 가차 없이 처단하는 맹장.", "시간 약속 어기는 것을 세상에서 가장 싫어합니다.", "일처리가 확실하고 현실적인 조언을 잘합니다."], good: "벼락치기대학교 (ISTP)", bad: "상상대학교 (INFP)" },
    "ESFJ": { univ: "인싸들의대학교", dept: "경조사참석학과", features: ["모든 친구들의 생일과 기념일을 챙기는 마당발.", "주변 사람들의 리액션과 칭찬에 힘을 얻습니다.", "조화로운 관계를 방해하는 사람을 싫어합니다."], good: "이불속대학교 (ISFP)", bad: "방구석대학교 (INTP)" },
    "ENFJ": { univ: "예수대학교", dept: "인류애충전학과", features: ["주변 사람들을 돕고 이끄는 것에 행복을 느깁니다.", "상처를 받아도 남을 먼저 배려하는 따뜻한 마음씨.", "가끔은 오지랖이 넓다는 소리를 듣기도 합니다."], good: "망상대학교 (INFJ)", bad: "냉혈한대학교 (ISTP)" },
    "ENTJ": { univ: "CEO최고경영대학교", dept: "구조조정정치학과", features: ["누구 밑에서 일하는 것보다 대장 노릇이 체질입니다.", "야망이 크고 자기관리가 매우 철저합니다.", "약해 빠진 소리나 징징거리는 것을 참지 못합니다."], good: "지식대학교 (INTP)", bad: "눈물샘대학교 (ISFP)" }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startTest() {
    document.getElementById("main-page").classList.remove("active");
    document.getElementById("quiz-page").classList.add("active");
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) {
        showLoading();
        return;
    }
    const currentQ = questions[currentIdx];
    document.getElementById("question-text").innerText = `${currentIdx + 1}. ${currentQ.q}`;
    document.getElementById("answer-a").innerText = currentQ.A;
    document.getElementById("answer-b").innerText = currentQ.B;

    const percent = (currentIdx / questions.length) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-icon").style.left = percent + "%";
}

function selectAnswer(type) {
    const currentQ = questions[currentIdx];
    
    // 유저 화면에는 글자가 안 보이지만, 백엔드 로직에서는 여전히 4대 지표에 맞춰 계산해 줍니다.
    if (type === 'A') {
        const scoreKey = currentQ.type[0];
        scores[scoreKey]++;
    } else {
        const scoreKey = currentQ.type[1];
        scores[scoreKey]++;
    }

    currentIdx++;
    showQuestion();
}

function showLoading() {
    document.getElementById("quiz-page").classList.remove("active");
    document.getElementById("loading-page").classList.add("active");

    setTimeout(() => {
        document.getElementById("loading-page").classList.remove("active");
        showResult();
    }, 2500);
}

function showResult() {
    document.getElementById("result-page").classList.add("active");

    let mbti = "";
    mbti += (scores.E >= scores.I) ? "E" : "I";
    mbti += (scores.S >= scores.N) ? "S" : "N";
    mbti += (scores.T >= scores.F) ? "T" : "F";
    mbti += (scores.J >= scores.P) ? "J" : "P";

    const resultData = results[mbti] || results["ENFP"];

    document.getElementById("mbti-badge").innerText = `나의 성향: ${mbti}`;
    document.getElementById("univ-name").innerText = resultData.univ;
    document.getElementById("dept-name").innerText = resultData.dept;
    document.getElementById("match-good").innerText = resultData.good;
    document.getElementById("match-bad").innerText = resultData.bad;

    const listContainer = document.getElementById("features-list");
    listContainer.innerHTML = "";
    resultData.features.forEach(feat => {
        const li = document.createElement("li");
        li.innerText = feat;
        listContainer.appendChild(li);
    });
}

function shareResult() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("🔗 링크가 복사되었습니다! 친구들에게 대학교 합격증을 자랑해보세요!");
    });
}

function restartTest() {
    currentIdx = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById("result-page").classList.remove("active");
    document.getElementById("main-page").classList.add("active");
}
