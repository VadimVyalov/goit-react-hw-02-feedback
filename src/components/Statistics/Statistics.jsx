//<Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
import { StaticticsContainer, Span } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StaticticsContainer>
    <span>Гарно: {good}</span>
    <span>Нейтрально: {neutral}</span>
    <span>Погано: {bad}</span>
    <span>Всього: {total}</span>
    <span>
      Позитивних відгуків: <Span>{positivePercentage}</Span> %
    </span>
  </StaticticsContainer>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
