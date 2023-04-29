import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

// import user from 'path/to/user.json;

export const App = () => {
  return <Profile card={user} />;
};
