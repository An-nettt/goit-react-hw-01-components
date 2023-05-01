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
  border: 1px solid #2a2a2a;
`;

export const Title = styled.th`
  margin: 20px 0;
  padding: 10px;
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
  background-color: #3bace0;
  border: 1px solid #dcdcdc;
`;

export const List = styled.tbody`
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #dcdcdc;
`;

export const Item = styled.tr`
  margin: 0;
  padding: 5px 0 15px;
  flex-basis: calc((100% - 30px) / 4);
  border: 1px solid #dcdcdc;
  :nth-child(2n) {
    background-color: #f8f8f8;
  }
`;

export const TableData = styled.td`
  font-size: 10px;
  font-weight: 400;
  color: #a0a0a0;
  padding: 10px 10px 10px 60px;
  border: 1px solid #f0f0f0;
`;
