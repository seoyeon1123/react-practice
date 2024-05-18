import React, { Component } from 'react';

function getNumber() {} //숫자 네개를 겹치지 않게 랜덤하게 뽑는 함수

class Baseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumber(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

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
          {this.state.tries.map((tryItem, index) => {
            return (
              <li key={index}>
                {index}: {tryItem}
              </li>
            );
          })}
        </ul>

        <ul>
          {[
            { food: '사과', taste: '달다' },
            { food: '귤', taste: '시다' },
            { food: '포도', taste: '상큼하다' },
            { food: '어묵', taste: '생선맛이다' },
            { food: '고기', taste: '기름맛이다' },
            { food: '떡볶이', taste: '맛있다' },
          ].map((item, index) => {
            return (
              <li key={item.food}>
                {index + 1} : {item.food} = {item.taste}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Baseball;
