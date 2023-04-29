import PropTypes from 'prop-types';
import {} from './Stat.styled';

export const Stat = ({ label, percentage }) => {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
