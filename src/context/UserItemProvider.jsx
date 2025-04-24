import React, { useState, useCallback, useEffect } from "react";
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

  return (
    <UserItemContext.Provider value={{ userItemList, addUserItem, deleteUserItem, getUserItem }}>
      {children}
    </UserItemContext.Provider>
  );
};

export default UserItemProvider;
