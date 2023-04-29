import PropTypes from 'prop-types';
import { Card } from './Profile.styled';

export const Profile = ({ card }) => {
  return (
    <Card>
      <div className="description">
        <img src={card.avatar} alt={card.username} class="avatar" />
        <p className="name">{card.username}</p>
        <p className="tag">{card.tag}</p>
        <p className="location">{card.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{card.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{card.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{card.stats.likes}</span>
        </li>
      </ul>
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

// console.log(user);
