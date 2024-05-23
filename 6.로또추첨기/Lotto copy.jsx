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
    redo: false,
  };

  timeOut = [];

  componentDidMount() {
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeOut[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 1000);

      this.timeOut[i] = setTimeout(() => {
        this.setState({
          bonus: winNumbers[6],
          redo: true,
        });
      }, 6 * 1000);
    }
  }

  componentWillUnmount() {
    for (let i = 0; i < this.timeOut.length; i++) {
      clearTimeout(this.timeOut[i]);
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeOut = [];
  };

  render() {
    return (
      <>
        <div>로또 추첨기 : 당첨 숫자는 ? </div>
        <div>
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div> 보너스 </div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  }
}

export default Lotto;
