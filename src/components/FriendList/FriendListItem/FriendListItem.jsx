import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from '../FriendList.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} avatar width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
