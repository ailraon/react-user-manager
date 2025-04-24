import React, { useState, useCallback } from "react";
import UserItemContext from './UserItemContext';

const UserItemProvider = ({ children }) => {
  const [userItemList, setUserItemList] = useState([]);

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
