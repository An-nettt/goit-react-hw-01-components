import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Stat.styled';

export const Stat = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
