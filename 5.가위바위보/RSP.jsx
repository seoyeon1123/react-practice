import React, { Component } from 'react';

//클래스의 경우,constructor-> render -> ref ->  componentDidMount
//-> setState/props -> render -> componentDidUpdate
//-> 부모가 나를 없앴을 때 -> componentWillUnmount

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const score = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: rspCoords.바위,
  };

  interval;

  changeHand = () => {
    {
      const { imgCoord } = this.state;
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.changeHand(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => () => {
    clearInterval(this.interval);
    const myScore = score[choice];
    const cpuScore = score[computerChoice(this.state.imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      this.setState({
        result: '비김',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이김',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '짐',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(() => this.changeHand(), 100);
    }, 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        >
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn('가위')}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 : {score}점</div>
      </>
    );
  }
}
export default RSP;
