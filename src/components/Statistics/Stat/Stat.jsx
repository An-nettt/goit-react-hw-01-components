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

// function changeColors() {
//   const changeColor = document.querySelectorAll('li');
//   changeColor.style.backgroundColor = getRandomHexColor();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
