import React, { useState } from 'react';
import RenderAverage from './RenderAverage';

const ResponseChecked = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null); // timeout 상태 추가
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 눌러주세요');
      const id = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭하세요!');
        setStartTime(new Date());
      }, Math.floor(Math.random() * 1000) + 2000);
      setTimeoutId(id); // timeoutId 업데이트
    } else if (state === 'ready') {
      // 성급하게 클릭
      clearTimeout(timeoutId); // timeout 취소
      setState('waiting');
      setMessage('너무 성급하시군요 ㅠㅠ 실패');
    } else if (state === 'now') {
      setEndTime(new Date());
      // 반응 속도 체크
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResult([...result, endTime - startTime]);
    }
  };

  const onReset = () => {
    setResult([]);
    setState('waiting');
    setMessage('클릭해서 시작하세요 ');
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <RenderAverage key={result.length} result={result} onReset={onReset} />
    </>
  );
};

export default ResponseChecked;
