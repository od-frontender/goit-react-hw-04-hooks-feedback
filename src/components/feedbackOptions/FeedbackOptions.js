import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map((option) => (
        <li key={option} className={s.list__item}>
          <button
            className={s.button}
            type="button"
            name={option}
            value={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
Notification.FeedbackOptions = {
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
