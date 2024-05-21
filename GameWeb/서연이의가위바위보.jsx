import React, { useState, useRef, useEffect } from 'react';

// 가위바위보
// 이미지 무한 로딩 (버튼 클릭시 잠깐 멈춤)
// 점수 계산 (주먹 1, 가위 0 보 -1)

const imgRSP = {
  주먹: './img/주먹.jpeg',
  가위: './img/가위.jpeg',
  보: './img/보.jpeg',
};

const scores = {
  가위: 0,
  주먹: 1,
  보: -1,
};

const computerChoice = (rsp) => {
  return Object.keys(imgRSP).find((key) => imgRSP[key] === rsp);
};

const RSP = () => {
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [rsp, setRsp] = useState(imgRSP.주먹);
  const imgInterval = useRef();

  // 버튼 눌렀을 때, 이미지 잠깐 멈추고, 이겼는지 찾아보고, 점수 계산
  const onClickBtn = (choice) => {
    clearInterval(imgInterval.current);
    const myScore = scores[choice];
    const cpuChoice = computerChoice(rsp);
    const cpuScore = scores[cpuChoice];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      setResult('비겼습니다!');
    } else if ([1, -2].includes(diff)) {
      setResult('이겼습니다!');
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult('졌습니다 ㅠㅠ');
      setScore((prevScore) => prevScore - 1);
    }

    setTimeout(() => {
      imgInterval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  const changeHand = () => {
    if (rsp === imgRSP.주먹) {
      setRsp(imgRSP.가위); // 가위
    } else if (rsp === imgRSP.가위) {
      setRsp(imgRSP.보); // 보
    } else if (rsp === imgRSP.보) {
      setRsp(imgRSP.주먹); // 주먹
    }
  };

  // 이미지 무한 로딩
  useEffect(() => {
    imgInterval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(imgInterval.current);
    };
  }, [rsp]);

  return (
    <div className="container">
      <h1>서연이를 이겨라!</h1>
      <img
        src={rsp} // 현재 선택된 이미지 경로를 지정합니다.
        id="rspImg"
        alt="가위바위보"
        style={{ width: '150px', height: '150px' }}
      />
      <div className="btn-container">
        <button id="rock" className="btn" onClick={() => onClickBtn('주먹')}>
          주먹
        </button>
        <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>
          가위
        </button>
        <button id="paper" className="btn" onClick={() => onClickBtn('보')}>
          보
        </button>
      </div>
      <div className="result">{result}</div>
      <div className="score"> 점수 : {score}</div>
    </div>
  );
};

export default RSP;
