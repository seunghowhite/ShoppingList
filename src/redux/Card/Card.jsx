import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteBuys, toggleBuys } from '../modules/buysSlice';
import { ButtonBox, CardContent, CardDiv, CardP, CardTitle, StyledButton } from './styles';
function Card({ buy }) {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DeleteButtonHandler = () => {
    dispatch(deleteBuys(buy.id))
  }
  const TogleButtonHandler = () => {
    dispatch(toggleBuys(buy.id))
  }


  return (
    <CardDiv>
      <CardTitle><CardP>{buy.title}</CardP></CardTitle>
      <CardP>가격:{buy.price}</CardP>
      <CardContent onClick={() => navigate(`/detail/${buy.id}`)}><CardP>{buy.coments}...자세히</CardP></CardContent>
      <ButtonBox>
        <StyledButton onClick={DeleteButtonHandler} color={'#e41717'}>삭제</StyledButton>
        <StyledButton onClick={TogleButtonHandler} color={'#92cc7a'}>{buy.isDone ? '안살래😓' : '구매🙂'}</StyledButton>
        <StyledButton onClick={() => navigate(`/update/${buy.id}`)} color={'#3537cc'}>수정하기</StyledButton>
      </ButtonBox>
    </CardDiv >
  )
}

export default Card

