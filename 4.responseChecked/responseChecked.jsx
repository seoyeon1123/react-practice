import React, { Component } from 'react';
import RenderAverage from './renderAverage';

class ResponseChecked extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;

    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 눌러주세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭하세요!',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(this.timeout);
      // 성급하게 클릭
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요 ㅠㅠ 실패',
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      // 반응 속도 체크
      this.setState((prevState) => ({
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [...prevState.result, this.endTime - this.startTime],
      }));
    }
  };

  onReset = () => {
    this.setState({
      result: [],
      state: 'waiting',
      message: '클릭해서 시작하세요 ',
    });
  };

  render() {
    const { state, message, result } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        <RenderAverage
          key={result.length}
          result={result}
          onReset={this.onReset}
        />
      </>
    );
  }
}

export default ResponseChecked;
