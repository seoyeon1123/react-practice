const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: 'hello!',
  };

  render() {
    return <div>안녕하세요 {this.state.text}</div>;
  }
}

module.exports = WordRelay;
