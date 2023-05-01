import PropTypes from 'prop-types';
import { Item, TableData } from '../TransactionHistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <Item>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </Item>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
