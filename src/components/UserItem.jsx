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

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const UserItem = ({id, name, age, status}) => {
    const {deleteUserItem} = useContext(UserItemContext);

    const navigate = useNavigate();

  return (
    <UserCard>
        <UserName onClick={() => navigate("/user/"+ id)}>{name}</UserName>
        <UserAgeStatus>나이 : {age}, 현재 온라인 상태 {status ? "온라인" : "오프라인"}</UserAgeStatus>
        <Button onClick={() => deleteUserItem(id)}>삭제</Button>
    </UserCard>
  )
}

export default UserItem