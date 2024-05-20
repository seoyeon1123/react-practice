import React, { Component } from 'react';

class ResponseChecked extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  setTime;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색으로 변하면 클릭하세요',
      });
      this.setTime = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 누르세요!',
        });
        this.startTime = new Date(); // now로 화면이 변한 시간
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'now') {
      this.endTime = new Date(); // 사용자가 클릭한 시간
      const clickTime = this.endTime.getTime() - this.startTime.getTime(); // 클릭까지 걸린 시간 계산
      this.setState((prevState) => ({
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [...prevState.result, clickTime], // 결과 추가
      }));
    } else if (state === 'ready') {
      clearTimeout(this.setTime);
      this.setState({
        state: 'waiting',
        message: '성급! 초록색 화면이 나오면 눌러주세요 !',
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>평균 시간: {result.reduce((a, c) => a + c) / result.length} ms</div>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseChecked;
