import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  height: auto;
  justify-content: center;
  margin: 40px auto 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;

  align-items: center;
  margin: 0 0 15px;
  padding: 10px 0 10px;

  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 20px;

  background-color: ${props => {
    switch (props.children) {
      case true:
        return '#00b274';
      case false:
        return '#ff0000';
      default:
        return '#000';
    }
  }};
`;

export const Avatar = styled.img`
  margin: 0;
  padding: 10px 10px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 500;
`;
