import React, { Component } from 'react';
import Try from './try';

//숫자 랜덤으로 4개 뽑기

function getNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length - 1; i++) {
    const j = Math.floor(Math.random() * 9);
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    //순서를 섞이게 해줌
  }
  console.log(numbers.slice(0, 4));
  return numbers.slice(0, 4);
}

class Baseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumber(), //랜덤으로 숫자 4개 뽑기
    tries: [], //시도한 기록 배열로 출력하기
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    //맞췄을 때

    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '정답 !',
        value: '',
        tries: [
          ...this.state.tries,
          { try: this.state.value, result: '홈런!' },
        ],
      });
      setTimeout(() => {
        alert('게임을 다시 시작합니다');
        this.setState({
          result: '',
          value: '',
          answer: getNumber(),
          tries: [],
        });
      }, 3000);
    } else {
      //10번 이상 틀렸을 때.
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      //사용자가 입력한 값을, 배열로 묶고 다시 문자열로 치환
      let strike = 0;
      let ball = 0;

      if (this.state.tries.length >= 9) {
        setTimeout(() => {
          alert('게임을 다시 시작합니다');
          this.setState({
            result: '',
            value: '',
            answer: getNumber(),
            tries: [],
          });
        }, 3000);
      } else {
        //10번 이전 실행
        for (let i = 0; i < answerArray.length; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        this.setState({
          value: '',
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike} 스트라이크 ${ball} 볼 입니다`,
            },
          ],
        });
      }
    }
  };

  onChangeForm = (e) => {
    const inputValue = this.state.value;
    if (inputValue.length < 4 && /^\d*$/.test(inputValue)) {
      this.setState({
        value: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <h1>⚾️ Number BaseBall ⚾️</h1>
        <div>{this.state.result}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="number"
            value={this.state.value}
            maxLength={4}
            onChange={this.onChangeForm}
          />
          <button>입력</button>
        </form>
        <div>시도 : {this.state.tries.length}</div>

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
