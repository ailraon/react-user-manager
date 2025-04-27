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
  margin-right: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const UserDetail = () => {
    const { id } = useParams();
    const { getUserItem, deleteUserItem } = useContext(UserItemContext);
    const user = getUserItem(id);
    const navigate = useNavigate();

    useEffect(() => {
      if(!user) {
        navigate("/");
        alert("없는 사용자입니다.");
      }
    }, [user, navigate]);

    const deleteUser = () => {
      if(confirm("정말 삭제하시겠습니까??") == true) {
        deleteUserItem(id);
        alert("정상적으로 삭제되었습니다.");
        navigate("/");
      }
    }

  return (
    <>
      {user && (
        <UserDetailContainer>
            <UserDetailHeading>사용자 정보</UserDetailHeading>
            <UserInfo>이름 : {user.name}</UserInfo>
            <UserInfo>나이 : {user.age}살</UserInfo>
            <UserInfo>상태 : {user.status ? "온라인" : "오프라인"}</UserInfo>
            <BackButton onClick={() => navigate("/")}>뒤로가기</BackButton>
            <ActionButton onClick={deleteUser}>유저 삭제</ActionButton>
        </UserDetailContainer>
      )}
    </>
  )
}

export default UserDetail