import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Photo,
  UserName,
  UserInfo,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ card }) => {
  return (
    <Card>
      <Description>
        <Photo src={card.avatar} alt={card.username} />
        <UserName>{card.username}</UserName>
        <UserInfo>{card.tag}</UserInfo>
        <UserInfo>{card.location}</UserInfo>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{card.stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{card.stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{card.stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
