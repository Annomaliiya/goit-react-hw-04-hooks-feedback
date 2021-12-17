import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = options.map(option => (
    <button
      type="button"
      onClick={() => onLeaveFeedback(option)}
      className={styles.btn}
      key={option}
    >
      {option}
                </button>
  ));

  return <> {buttons}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};