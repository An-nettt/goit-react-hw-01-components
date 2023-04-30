import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  height: auto;
  margin: 40px auto 0;
  padding: 40px 15px 0 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  flex-basis: calc((100% - 4px) / 3);
  border-collapse: collapse;
`;

export const Title = styled.th`
  justify-content: center;
  margin: 20px 0;
  text-transform: uppercase;
  color: #fff;
  background-color: #3bace0;
  font-size: 12px;
  font-weight: 500;
`;

export const List = styled.tbody`
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.tr`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5px 0 15px;
  flex-basis: calc((100% - 30px) / 4);
`;

export const Type = styled.td`
  font-size: 10px;
  font-weight: 500;
  color: #686868;
  padding: 5px;
  border: 1px solid #2a2a2a;
`;

export const Amount = styled.td`
  font-size: 16px;
  font-weight: 500;
  color: #686868;
`;

export const Currency = styled.td`
  font-size: 16px;
  font-weight: 500;
  color: #686868;
  text-transform: uppercase;
`;
