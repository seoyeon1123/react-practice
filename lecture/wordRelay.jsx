const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '이서연',
    value: '',
    result: '',
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  inputRef = (c) => {
    this.input = c;
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { word, value } = this.state;

    const hasInvalidChars = /[^가-힣]/.test(value);
    if (hasInvalidChars) {
      this.setState({
        value: '',
        result: '오답! (숫자나 기호가 포함되어 있습니다)',
      });
      this.input.focus();
      return;
    }

    if (word.charAt(word.length - 1) === value.charAt(0)) {
      this.setState({
        word: value,
        value: '',
        result: '정답!',
      });
      this.input.focus();
    } else {
      this.setState({
        value: '',
        result: '오답!',
      });
      this.input.focus();
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            type="text"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type="submit">입력</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

module.exports = WordRelay;
