import PropTypes from 'prop-types';
import { Stat } from './Stat/Stat';
import { Container, StatList } from './Stat/Stat.styled';
import { TitleMarkUp } from './Title';

export const Statistics = ({ title = '', stats }) => {
  return (
    <Container>
      <TitleMarkUp title={title} />
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  title: PropTypes.string.isRequired,
};
