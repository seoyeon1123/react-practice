import React, { Component } from 'react';

class Try extends Component {
  render() {
    const { tryInfo } = this.props; // props로부터 tryInfo를 가져옴
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
