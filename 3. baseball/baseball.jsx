import React, { Component } from 'react';
import Try from './try';

function getNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  console.log(numbers.slice(0, 4));
  return numbers.slice(0, 4);
} //숫자 네개를 겹치지 않게 랜덤하게 뽑는 함수

class Baseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumber(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런!',
        value: '',
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: '홈런!' },
        ],
      });
      alert('게임을 다시 시작합니다');
      this.setState({
        value: '',
        answer: getNumber(),
        result: '',
        tries: [],
      });
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        // 10번 이상 틀렸을 때
        this.setState({
          result: `실패! 10번 넘게 틀리셨습니다. 답은 ${this.state.answer.join(
            ', '
          )} 입니다!`,
        });
        alert('게임을 다시 시작합니다');
        this.setState({
          value: '',
          answer: getNumber(),
          tries: [],
        });
      } else {
        // 10번 미만으로 틀렸을 경우
        for (let i = 0; i < answerArray.length; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크 ${ball} 볼 입니다`,
            },
          ],
          value: '',
        });
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div>{this.state.result}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="number"
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
          <div>시도 : {this.state.tries.length}</div>
        </form>

        <ul>
          {this.state.tries.map((v, i) => (
            <Try key={`try-${i}`} tryInfo={v} />
          ))}
        </ul>
      </>
    );
  }
}

export default Baseball;
