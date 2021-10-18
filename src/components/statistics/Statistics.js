import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li>
        <p className={s.label}>
          Good: <span>{good}</span>
        </p>
      </li>
      <li>
        <p className={s.label}>
          Neutral: <span>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={s.label}>
          Bad: <span>{bad}</span>
        </p>
      </li>
      <li>
        <p className={s.label}>
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p className={s.label}>
          Positive feadback: <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  title: PropTypes.string,
  positivePercentage: PropTypes.number,
};

export default Statistics;
