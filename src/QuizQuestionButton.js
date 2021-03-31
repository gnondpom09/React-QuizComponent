import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    if (this.props.quiz_question.answer === this.props.button_text) {
      this.props.showNextQuestionHandler();
    }
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
