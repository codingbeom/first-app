const quiz = [
  {
    id: 1,
    question: "일론 머스크의 우주 탐사 기업 이름은?",
    answers: [
      { text: "Space X", corret: true },
      { text: "Tesla", corret: false },
      { text: "Boring Company", corret: false },
      { text: "SolaCity", corret: false },
    ],
  },
  {
    id: 2,
    question: "일론 머스크의 고향은 어디일까요?",
    answers: [
      { text: "미국 캘리포니아", corret: false },
      { text: "남아프리카 공화국 프리토리아", corret: true },
      { text: "캐나다 벤쿠버", corret: false },
      { text: "호주 시드니", corret: false },
    ],
  },
  {
    id: 3,
    question: "일론 머스크가 창업한 페이팔 전신 기업의 이름은?",
    answers: [
      { text: "Zip2 Corporation", corret: false },
      { text: "Alpha Exploration", corret: false },
      { text: "X.com", corret: true },
      { text: "Everything Co.", corret: false },
    ],
  },
];

export { quiz };
