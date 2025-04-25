import React, { useContext, useEffect, useMemo, useState } from 'react'
import UserItem from './UserItem'
import UserItemContext from '../context/UserItemContext';
import styled from 'styled-components';

const UserListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  padding-top: 50px;
`;

const UserListBox = ({keyword, fillterOption}) => {
  const { userItemList, sortUserItems } = useContext(UserItemContext);

  const sortUserItemList = useMemo(() => sortUserItems(fillterOption), [fillterOption, userItemList])
  const [filterItemList, setFilterItemList] = useState(sortUserItemList);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const filterResult = sortUserItemList.filter(user => {
        return user.name.includes(keyword.value);
      })
      setFilterItemList(filterResult)
      console.log(filterResult);
    }, 500);
    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [keyword, sortUserItemList]);

  return (
    <UserListContainer>
      {filterItemList.length > 0 ? (
        filterItemList.map((userItem) => (
          <UserItem
            key={userItem.key}
            id={userItem.key}
            name={userItem.name}
            age={userItem.age}
            status={userItem.isOnline}
          />
        ))  
      ) : (
        <div>일치하는 사용자가 없습니다.</div>
      )
      
        }
    </UserListContainer>
  )
}

export default UserListBox