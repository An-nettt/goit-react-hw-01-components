import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import { Table, Title, List } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>
      <List>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </List>
    </Table>
  );
};

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
