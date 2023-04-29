import { Stat } from './Stat/Stat';
import { Container, Title, StatList } from './Stat/Stat.styled';

export const Statistics = ({ stats }) => {
  return (
    <Container>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Container>
  );
};
