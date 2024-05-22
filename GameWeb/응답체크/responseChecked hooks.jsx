import React, { useState, useRef } from 'react';
import RenderAverage from '../renderAverage';

const ResponseChecked = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 눌러주세요');
      timeOut.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭하세요!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(timeOut.current);
      setState('waiting');
      setMessage('너무 성급하시군요 ㅠㅠ 실패');
    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResult((prevResult) => [
        ...prevResult,
        endTime.current - startTime.current,
      ]);
    }
  };

  const onReset = () => {
    setResult([]);
    setState('waiting');
    setMessage('클릭해서 시작하세요');
  };

  return (
    <>
      <h1>당신의 반응속도는 ❓ </h1>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <RenderAverage key={result.length} result={result} onReset={onReset} />
    </>
  );
};

export default ResponseChecked;
