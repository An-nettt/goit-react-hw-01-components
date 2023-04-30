import PropTypes from 'prop-types';
import { Item, Type, Amount, Currency } from '../TransactionHistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <Item>
      <Type>{type}</Type>
      <Amount>{amount}</Amount>
      <Currency>{currency}</Currency>
    </Item>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
