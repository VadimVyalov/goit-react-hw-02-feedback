import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((e, i) => {
        return (
          <button key={i} type="button" onClick={() => onLeaveFeedback(i)}>
            <span>{e}</span>
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
