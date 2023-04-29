import styled from 'styled-components';

export const Card = styled.div`
  width: 250px;
  height: auto;
  margin: 40px auto 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`;

export const Description = styled.div``;

export const Photo = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding-top: 40px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  text-align: center;
  margin-bottom: 12px;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const UserInfo = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0a0;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #f0f0f0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #b4b4b4;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0 5px;
  flex-basis: calc(100% / 3);
  :nth-child(-n + 2) {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #b4b4b4;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: #686868;
  padding: 5px;
`;

export const Quantity = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
