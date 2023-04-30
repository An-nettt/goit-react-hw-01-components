import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/Stat/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/FriendListItem/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/Transaction/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile card={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
