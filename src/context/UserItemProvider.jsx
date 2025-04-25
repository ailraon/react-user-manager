import React, { useState, useCallback, useEffect, useMemo } from "react";
import UserItemContext from './UserItemContext';

const UserItemProvider = ({ children }) => {

  // 로컬 스토리지에서 값 가져오기
  const loadUserItemsFromLocalStorage = () => {
    const savedUserItems = localStorage.getItem("userItemList");
    if (savedUserItems) {
      return JSON.parse(savedUserItems);
    }
    return []; // 로컬 스토리지에 값이 없으면 빈 배열 반환
  };

  // userItemList 상태 초기화
  const [userItemList, setUserItemList] = useState(loadUserItemsFromLocalStorage);
  // const sortedUserItemList = useMemo(() => sortUserItems());

  // 로컬 스토리지에 userItemList 값 저장
  const saveUserItemsToLocalStorage = (items) => {
    localStorage.setItem("userItemList", JSON.stringify(items));
  };

  // userItemList 상태가 변경될 때마다 로컬 스토리지에 값 저장
  useEffect(() => {
    saveUserItemsToLocalStorage(userItemList);
  }, [userItemList]);

  const addUserItem = (userItem) => {
    console.log("하이");
    setUserItemList([...userItemList, userItem]);
  };

  const deleteUserItem = (key) => {
    const updatedItemList = userItemList.filter(userItem => Number(userItem.key) !== Number(key));
    console.log("deleteUser",updatedItemList);
    console.log(key);
    setUserItemList(updatedItemList);
  };

  const getUserItem = useCallback((key) => {
    const userItem = userItemList.filter((userItem) => Number(userItem.key) === Number(key)).at(0);
    return userItem;
  }, [userItemList]);

  // 정렬
  const sortUserItems = (criteria) => {
    const sortedItems = [...userItemList]; // 원본을 수정하지 않기 위해 복사본을 만듬
  
    switch (criteria) {
      case 'latest':
        // 최신순: id 값이 큰 것부터 정렬 (내림차순)
        sortedItems.sort((a, b) => b.key - a.key);
        break;
      case 'oldest':
        // 오래된 순: id 값이 작은 것부터 정렬 (오름차순)
        sortedItems.sort((a, b) => a.key - b.key);
        break;
      case 'nameAs':
        // 이름순: 알파벳 순으로 정렬 (오름차순)
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDe':
        // 이름순: 알파벳 순으로 정렬 (내림차순)
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'ageAs':
        // 나이순: 나이가 적은 순으로 정렬 (오름차순)
        sortedItems.sort((a, b) => a.age - b.age);
        break;
      case 'ageDe':
        // 나이순: 나이가 많은 순으로 정렬 (내림차순)
        sortedItems.sort((a, b) => b.age - a.age);
        break;
      default:
        console.log("실패함.");
        break;
    }
    return sortedItems;
  };

  return (
    <UserItemContext.Provider value={{ userItemList, addUserItem, deleteUserItem, getUserItem, sortUserItems }}>
      {children}
    </UserItemContext.Provider>
  );
};

export default UserItemProvider;
