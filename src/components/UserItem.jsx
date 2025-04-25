import React, { useContext } from 'react'
import UserItemContext from '../context/UserItemContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UserCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const UserName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserAgeStatus = styled.p`
  font-size: 14px;
  color: #555;
`;

const Online = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #3ed13e;
  color: white;
`

const Offline = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: red;
  color: white;
`

const UserItem = ({id, name, age, status}) => {
    const navigate = useNavigate();

  return (
    <UserCard onClick={() => navigate("/user/"+ id)}>
        <UserName>{name}</UserName>
        <UserAgeStatus>나이 : {age}</UserAgeStatus>
        <UserAgeStatus>상태 : {status ? (<Online>온라인</Online>) : (<Offline>오프라인</Offline>)}</UserAgeStatus>
    </UserCard>
  )
}

export default UserItem