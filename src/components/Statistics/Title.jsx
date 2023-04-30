import { Title } from './Stat/Stat.styled';

export const TitleMarkUp = ({ title }) => {
  return <div>{title && <Title>{title}</Title>}</div>;
};
