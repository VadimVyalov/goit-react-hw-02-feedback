import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = idx => {
    this.setState(prevState => {
      const keys = Object.keys(prevState);
      console.log(keys[idx]);
      return {
        [keys[idx]]: prevState[keys[idx]] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      // <>
      //   <div>
      <FeedbackOptions
        options={['Гарно', 'Середньо', 'Погано']}
        onLeaveFeedback={this.onIncrement}
      />
      /* </div> */

      /* <div>
          <span>{good}</span>
          <span>{neutral}</span>
          <span>{bad}</span>
          <span>{this.countTotalFeedback()}</span>
          <span>{this.countPositiveFeedbackPercentage()}</span>
        </div>
      </> */
    );
  }
}
