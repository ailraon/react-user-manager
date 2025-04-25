import React, { useContext, useState } from "react";
import UserItemContext from "../context/UserItemContext";
import styled from "styled-components";
import useInput from "../customHook/useInput";
import UserListBox from "../components/UserListBox";

// 유저 목록 페이지
// 전체 유저 리스트 보여주기
// 유저 아이템 클릭시, 유저 상세 페이지로.
// 유저 등록 버튼 클릭시 유저 등록 페이지로.

// 필요 상태. 유저 정보 리스트.

const UserListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 5px;
`;

const Fillter = styled.div`
  position: fixed;
  width: 100%;
  background-color : #fff;
  z-index: 5;
  height: 30px;
`;

const UserList = () => {
  const [fillterOption, setFillterOption] = useState("latest");
  const keyword = useInput("");
  const { userItemList } = useContext(UserItemContext);

  return (
    <>
      <UserListContainer>
        <Fillter>
          <span>사용자 검색 : </span>
          <input type="text" placeholder="검색어를 입력하세요." {...keyword} />
          <span style={{marginLeft : "10px"}}>정렬 기준</span>
          <select style={{marginLeft: "10px"}} onChange={(e) => setFillterOption(e.target.value)}>
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="nameAs">이름순 ↑</option>
            <option value="nameDe">이름순 ↓</option>
            <option value="ageAs">나이순 ↑</option>
            <option value="ageDe">나이순 ↓</option>
          </select>
        </Fillter>
        {userItemList.length > 0 ? (
          <UserListBox keyword={keyword} fillterOption={fillterOption}></UserListBox>
        ) : (
          <div>새로운 사용자를 등록해주세요.</div>
        )}
      </UserListContainer>
    </>
  );
};

export default UserList;
