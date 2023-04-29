import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/Stat/data.json';

// import user from 'path/to/user.json;

export const App = () => {
  return (
    <div>
      <Profile card={user} />;
      <Statistics stats={data} />;
    </div>
  );
};
