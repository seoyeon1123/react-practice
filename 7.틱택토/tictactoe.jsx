import React, { useCallback, useReducer, useState } from 'react';
import Table from './table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const reducer = () => {};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([
  //   ['', '', ''],
  //   ['', '', ''],
  //   ['', '', ''],
  // ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: 'SET-WINNER', winner: '0' });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} />
      {state.winner && <div> {state.winner}</div>}님의 승리
    </>
  );
};

export default TicTacToe;
