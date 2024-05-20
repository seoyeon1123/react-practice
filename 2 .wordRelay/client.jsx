import React from 'react';
import { createRoot } from 'react-dom/client'; // 이 부분 수정
import WordRelay from './wordRelay-hooks';

createRoot(document.querySelector('#root')).render(<WordRelay />);
