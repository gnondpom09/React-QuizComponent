import React, { Component } from "react";

import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incorretAnswer: false,
    };
  }

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    }

    this.setState((state) => {
      return {
        incorretAnswer: !state.incorretAnswer,
      };
    });
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((text, index) => {
              return (
                <QuizQuestionButton
                  clickHandler={this.handleClick.bind(this)}
                  key={index}
                  button_text={text}
                />
              );
            })}
          </ul>
        </section>
        {this.state.incorretAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
