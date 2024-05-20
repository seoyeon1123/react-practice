import React, { Component } from 'react';

class RenderAverage extends Component {
  render() {
    const { result, onReset } = this.props;
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간: {result.reduce((a, c) => a + c) / result.length} ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  }
}

export default RenderAverage;
