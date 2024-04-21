import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const NOT_FOUND_FEEDBACK_MESSAGE = 'No feedback given';
const LEAVE_FEEDBACK_TITLE = 'Please leave feedback';
const STATISTICS_TITLE = 'Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  changeStatistic = evt => {
    const type = evt.target.textContent;

    if (!this.state.hasOwnProperty(type)) {
      console.error(`Type "${type}" does not exist in state.`);
      return;
    }

    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good / total) * 100).toFixed(2) : 0;
  };

  render() {
    return (
      <div>
        <Section title={LEAVE_FEEDBACK_TITLE}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.changeStatistic}
          />
        </Section>
        <Section title={STATISTICS_TITLE}>
          {
            this.countTotalFeedback() > 0
              ? <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              : <Notification message={NOT_FOUND_FEEDBACK_MESSAGE}/>
          }
        </Section>
      </div>
    );
  }
}
