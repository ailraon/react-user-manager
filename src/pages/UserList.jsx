import React, { useContext, useState } from 'react'
import UserItem from '../components/UserItem';
import UserItemContext from '../context/UserItemContext';
import styled from 'styled-components';

// 유저 목록 페이지
// 전체 유저 리스트 보여주기
// 유저 아이템 클릭시, 유저 상세 페이지로.
// 유저 등록 버튼 클릭시 유저 등록 페이지로.

// 필요 상태. 유저 정보 리스트. 

const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const UserList = () => {
    const {userItemList} = useContext(UserItemContext);

  return (
    <>
        <UserListContainer>
            {userItemList.length > 0 ? userItemList.map((userItem) => (
                <UserItem key={userItem.key} id={userItem.key} name={userItem.name} age={userItem.age} status={userItem.isOnline}/>
            ))
            :
              <div>
                새로운 사용자를 등록해주세요.
              </div>
            }
        </UserListContainer>
    </>
  )
}

export default UserList