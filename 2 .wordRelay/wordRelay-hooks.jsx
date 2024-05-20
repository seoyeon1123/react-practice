import React, { useState } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('이서연');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const hasInvalidChars = /[^가-힣]/.test(value);
    if (hasInvalidChars) {
      setValue('');
      setResult('오답! (숫자나 기호가 포함되어 있습니다).');
      return;
    }

    if (word.charAt(word.length - 1) === value.charAt(0)) {
      setWord(value);
      setValue('');
      setResult('통과!');
    } else {
      setValue('');
      setResult('다시 작성하세요!');
    }
  };

  return (
    <>
      <div>{word}로 끝나는 말은? </div>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={value} onChange={onChangeInput} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
