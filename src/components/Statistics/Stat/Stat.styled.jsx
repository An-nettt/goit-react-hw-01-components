import styled from 'styled-components';

export const Container = styled.section`
  width: 400px;
  height: auto;
  margin: 40px auto 0;
  padding: 40px 15px 0 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  text-transform: uppercase;
  color: #686868;
  font-size: 20px;
  font-weight: 500;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 5px 0 15px;
  flex-basis: calc((100% - 30px) / 4);
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #686868;
  padding: 5px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
