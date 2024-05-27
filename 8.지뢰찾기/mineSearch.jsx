import React, { useReducer, createContext, useMemo } from 'react';
import Table from './table';
import Form from './Form';

const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, //0이상이면 오픈
};

export const START_GAME = 'START_GAME';

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    tableData: state.tableData, dispatch;
  }, [state.tableData]);

  return (
    <TableContext.Provider>
      <Form />
      <Table />
      <div>{state.timer}</div>
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;
