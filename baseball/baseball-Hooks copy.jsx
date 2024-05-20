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
  const [tries, setTries] = useState([]);

  const onSubmitForm = () => {
    e.preventDefault();
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
