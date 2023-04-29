import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

// import user from 'path/to/user.json;

export const App = () => {
  return <Profile card={user} />;
  return <Statistics stats={data} />;
};
