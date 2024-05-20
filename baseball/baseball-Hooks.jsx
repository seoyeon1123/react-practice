import React, { useState } from 'react';
import Try from './try';

function getNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  console.log(numbers.slice(0, 4));
  return numbers.slice(0, 4);
}

const BaseBall = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumber);
  //lazy init
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => [...prevTries, { try: value, result: '홈런!' }]);
      setTimeout(() => {
        alert('게임을 다시 시작합니다!');
        setResult('');
        setValue('');
        setTries([]);
        setAnswer(getNumber());
      }, 3000);
    } else {
      //10 이상 실패
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        setResult(`실패: 정답은 ${answer.join(',')} 입니다.`);
        setTimeout(() => {
          alert('게임을 다시 시작합니다!');
          setResult('');
          setValue('');
          setTries([]);
          setAnswer(getNumber());
        }, 3000);
      } else {
        for (let i = 0; i < answerArray.length; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        setTries((prevTries) => [
          ...prevTries,
          { try: value, result: `${strike} 스트라이크 ${ball} 볼` },
        ]);
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 4 && /^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <>
      <h1>⚾️ Number BaseBall ⚾️</h1>
      <div>{result}</div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={value}
          onChange={onChangeInput}
          maxLength={4}
        />
        <button>입력</button>
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`try-${i}`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
};

export default BaseBall;
