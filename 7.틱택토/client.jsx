import React from 'react';
import { createRoot } from 'react-dom/client';
import TicTacToe from './tictactoe';

createRoot(document.querySelector('#root')).render(<TicTacToe />);
