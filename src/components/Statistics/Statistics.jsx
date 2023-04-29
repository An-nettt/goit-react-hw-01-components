import { Stat } from './Stat/Stat';
import { Container, Title } from './Stat/Stat.styled';

export const Statistics = ({ stats }) => {
  return (
    <Container>
      <Title>Upload data</Title>
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Stat key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </Container>
  );
};
