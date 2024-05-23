import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  //useMemo 는 함수의 리턴값을 기억하고,
  //useCallback은 함수 자체를 기억하는 것
} from 'react';
import Ball from './ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const numbers = [...Array(45).keys()].map((x) => x + 1);
  const shuffle = [];
  while (numbers.length > 0) {
    shuffle.push(
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);

  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeOuts = useRef([]);

  const runTimeOut = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeOuts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }

    // 보너스 번호를 설정하는 타임아웃은 반복문 밖으로 이동합니다.
    timeOuts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  useEffect(() => {
    runTimeOut();

    return () => {
      timeOuts.current.forEach((v) => clearTimeout(v));
    };
  }, [timeOuts.current]);

  const onClickRedo = useCallback(() => {
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeOuts.current = [];
  }, [winBalls]);

  return (
    <>
      <div>당첨 숫자</div>
      <div>
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더</button>}
    </>
  );
};

export default Lotto;
