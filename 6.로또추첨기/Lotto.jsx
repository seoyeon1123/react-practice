import React, { Component } from 'react';
import Ball from './ball';

function getWinNumbers() {
  const numbers = [...Array(45).keys()].map((x) => x + 1);
  const shurffle = [];
  while (numbers.length > 0) {
    shurffle.push(
      numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]
    );
  }
  const bonusNumber = shurffle[shurffle.length - 1];
  const winNumber = shurffle.slice(0, 6).sort((a, c) => a - c);

  return [...winNumber, bonusNumber];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), //당첨 숫자들
    winBalls: [],
    bonus: null, //보너스 볼
    redo: null, //재실행
  };

  timeout = [];

  componentDidMount() {
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeout[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (1 + i) * 1000);
      this.timeout[6] = setTimeout(() => {
        this.setState({
          bonus: winNumbers[6],
          redo: true,
        });
      }, 6 * 1000);
    }
  }

  componentWillUnmount() {
    this.timeout.forEach((v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo, onClickRedo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <dlv>보너스!</dlv>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  }
}

export default Lotto;
