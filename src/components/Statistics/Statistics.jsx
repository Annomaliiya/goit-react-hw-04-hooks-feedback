import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => {
    return (
        <>
                <ul className={styles.statisticsList}>
                    <li className={styles.item}><b>Good:</b>{good}</li>
                    <li className={styles.item}><b>Neutral:</b>{neutral}</li>
                    <li className={styles.item}><b>Bad:</b>{bad}</li>
                    <li className={styles.item}><b>Total:</b>{total}</li>
                    <li className={styles.item}><b>Positive feedback:</b>{total ? positiveFeedback : 0}%</li>
            </ul >
            {/* : (<p className={styles.text}>No feedback given</p>) */}
            </>)}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired
}