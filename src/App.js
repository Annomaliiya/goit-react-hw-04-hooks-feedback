
import { useState } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import styles from './App.module.css';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
}

const App = () => {
  const [state, setState] = useState(initialState);
  const btnOptions = ['good', 'neutral', 'bad'];

  const handleClick = option => {
    setState(
      prevState => {
        prevState[option] = prevState[option] + 1;
        return { ...prevState };

      }
    );
  };

  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    console.log(total)

    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const good = state.good;
    const positiveFeedback = Math.round(good / total * 100);
    return positiveFeedback;
  }

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const renderStatisticsSection =
    total ?
      <Statistics good={state.good
      } neutral={state.neutral} bad={state.bad} total={total} positiveFeedback={positiveFeedback} />
      : <Notification message="There is no feedback"></Notification>;

  return (
    <>
      <Section className={styles.section} title="Please leave feedback" >
        <FeedbackOptions options={btnOptions} onLeaveFeedback={handleClick}
        />
      </Section>
      <Section className={styles.section} title="Statistics">
        {renderStatisticsSection}
      </Section></>
  )
};


export default App;
