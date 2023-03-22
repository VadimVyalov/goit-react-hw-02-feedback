import { ButtonContainer, Button } from './FeedbackOptions.styled';

import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(e => (
      <Button key={e.id} type="button" onClick={() => onLeaveFeedback(e.state)}>
        <span>{e.caption}</span>
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
