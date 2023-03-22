import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { id: 'b-01', state: 'good', caption: 'Гарно' },
    { id: 'b-02', state: 'neutral', caption: 'Нейтрально' },
    { id: 'b-03', state: 'bad', caption: 'Погано' },
  ];

  onIncrement = idx => {
    this.setState(prevState => ({ [idx]: prevState[idx] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) return 0;
    const goodFeedback = this.state.good;
    const positiveFeedback =
      Math.round((goodFeedback / totalFeedback) * 1000) / 10;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Залиште відгук">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onIncrement}
          />
        </Section>
        <Section title="Статистика">
          {!this.countTotalFeedback() ? (
            <Notification message={'відгуків немає'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
