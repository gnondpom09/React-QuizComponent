import React, { Component } from "react";

class QuizQuestionButoon extends Component {
  render() {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButoon;
