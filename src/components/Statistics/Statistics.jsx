import PropTypes from 'prop-types';
import { Stat } from './Stat/Stat';
import { Container, StatList } from './Stat/Stat.styled';
import { TitleMarkUp } from './Title';

export const Statistics = ({ stats }) => {
  return (
    <Container>
      <TitleMarkUp title="Upload stats" />
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
};
