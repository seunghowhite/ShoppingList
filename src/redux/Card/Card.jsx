import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteBuys, toggleBuys } from '../modules/buysSlice';
function Card({ buy }) {
  // todo 받아온 값을 내려줘야함

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DeleteButtonHandler = () => {
    dispatch(deleteBuys(buy.id))
  }
  const TogleButtonHandler = () => {
    dispatch(toggleBuys(buy.id))
    // console.log(buy);
  }
  return (
    <CardDiv>
      <CardTitle>{buy.title}</CardTitle>
      <CardContent>{buy.coments}</CardContent>
      <CardPrice>가격:{buy.price}</CardPrice>
      <StyledButton onClick={DeleteButtonHandler}>삭제</StyledButton>
      <StyledButton onClick={TogleButtonHandler}>{buy.isDone ? '삼' : '아직못삼'}</StyledButton>
      <StyledButton>수정하기</StyledButton>
      <StyledButton onClick={() => navigate(`/detail/${buy.id}`)
      } > 상세보기</StyledButton >
    </CardDiv >
  )
}

export default Card


const CardDiv = styled.div`
  width: 240px;
  height: 200px;
  border: 1px solid black;
  margin: 20px;
`

const CardTitle = styled.h2`
  color: blue;
`
const CardContent = styled.p`
  color: green;
`
const CardPrice = styled.p`
  color: gray;
`
const StyledButton = styled.button`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`