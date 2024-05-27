import React, { useState, useCallback, useContext } from 'react';
import { TableContext, START_GAME } from './mineSearch';

const Form = () => {
  const [row, setRow] = useState(10); // 세로 줄 수
  const [cell, setCell] = useState(10); // 가로 줄 수
  const [mine, setMine] = useState(20); // 지뢰 수
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine, dispatch]);

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="세로"
          value={row}
          onChange={onChangeRow}
        />
        <input
          type="number"
          placeholder="가로"
          value={cell}
          onChange={onChangeCell}
        />
        <input
          type="number"
          placeholder="지뢰"
          value={mine}
          onChange={onChangeMine}
        />
      </div>

      <button onClick={onClickBtn}>시작</button>
    </>
  );
};

export default Form;
