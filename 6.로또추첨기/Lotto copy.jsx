import React, { Component } from 'react';
import Ball from './ball';

function getNumbers() {
  const numbers = [...Array(45).keys()].map((x) => x + 1);
  const shurffle = [];
  while (numbers > 0) {
    shurffle.push(
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
    );
  }
}

class Lotto extends Component {
  state = {
    winNumbers: getNumbers(),
    winBalls: [],
    bonus: null,
    reto: false,
  };

  render() {
    return <></>;
  }
}
