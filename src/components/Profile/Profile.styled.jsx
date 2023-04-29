import styled from 'styled-components';

export const Card = styled.div`
  width: 250px;
  height: 300px;
  margin: 40px auto 40px;
  padding: 40px 15px 20px 15px;
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
  border-radius: 50%;
`;

export const UserName = styled.p`
  text-align: center;
  margin-bottom: 12px;
  font-size: 17px;
  font-weight: 700;
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
  justify-content: space-around;
  padding: 0;
  list-style: none;
  background-color: #dcdcdc;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
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