//<Notification message="There is no feedback">.
import PropTypes from 'prop-types';
import { Span } from './Notification.styled';

export const Notification = ({ message }) => <Span>{message}</Span>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
