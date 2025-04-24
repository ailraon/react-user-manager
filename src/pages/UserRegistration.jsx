import React, { useContext, useState } from 'react'
import useInput from '../customHook/useInput';
import UserItemContext from '../context/UserItemContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

const InputLabel = styled.label`
    text-align: left;
    margin : 10px 0;
`

const InputCheck = styled.input`
    margin-top: 10px;
    margin-right: 10px;
    width : 16px;
    height: 16px;
`

const UserRegistration = () => {
    const {addUserItem} = useContext(UserItemContext);
    const name = useInput("");
    const age = useInput(0);
    const isOnline = useInput(false);
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if(name.value.trim() === "") return; // 이름 입력해야함.
        if(age.value <= 0) return; // 나이가 0이거나 0보다 낮을 수 없음.
        addUserItem({
            key : Date.now(),
            name : name.value,
            age : age.value,
            isOnline : isOnline.value,
        });
    }

  return (
    <FormContainer onSubmit={handelSubmit}>
        <FormHeading>사용자 등록</FormHeading>
        <InputLabel htmlFor="inputName">이름</InputLabel>
        <FormInput id='inputName' type="text" placeholder='이름...' {...name}/>
        <InputLabel htmlFor="inputAge">나이</InputLabel>
        <FormInput id='inputAge' type="number" {...age} />
        <InputLabel htmlFor="inputStatus"><InputCheck id='inputStatus' type="checkbox" {...isOnline}/>온라인 여부</InputLabel>
        
        <SubmitButton>제출</SubmitButton>
        <CancelButton onClick={() => navigate("/")}>취소</CancelButton>
    </FormContainer>
  )
}

export default UserRegistration