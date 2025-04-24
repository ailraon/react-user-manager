import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserItemContext from '../context/UserItemContext';
import styled from 'styled-components';

const UserDetailContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserDetailHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const UserInfo = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const ActionButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const BackButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const UserDetail = () => {
    const { id } = useParams();
    const { getUserItem, deleteUserItem } = useContext(UserItemContext);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
      console.log("test");
      const userInfo = getUserItem(id);
      if(!userInfo) {
        navigate("/");
        alert("없는 사용자입니다.");
      }
      setUser(userInfo);
    }, [])

    const deleteUser = () => {
      deleteUserItem(id);
      navigate("/");
    }

  return (
    <>
      {user && (
        <UserDetailContainer>
            <UserDetailHeading>사용자 정보</UserDetailHeading>
            <UserInfo>{user.name}</UserInfo>
            <UserInfo>{user.age}살</UserInfo>
            <UserInfo>현재 {user.status ? "온라인" : "오프라인"} 상태입니다.</UserInfo>
            <BackButton onClick={() => navigate("/")}>뒤로가기</BackButton>
            <ActionButton onClick={deleteUser}>유저 삭제</ActionButton>
        </UserDetailContainer>
      )}
    </>
  )
}

export default UserDetail