import React from 'react';

const RenderAverage = ({ result, onReset }) => {
  return result.length === 0 ? null : (
    <>
      <div>평균 시간: {result.reduce((a, c) => a + c) / result.length} ms</div>
      <button onClick={onReset}>리셋</button>
    </>
  );
};

export default RenderAverage;
