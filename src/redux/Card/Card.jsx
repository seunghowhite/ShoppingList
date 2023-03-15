import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteBuys, toggleBuys } from '../modules/buysSlice';
import { ButtonBox, CardContent, CardDiv, CardP, CardTitle, StyledButton } from './styles';
function Card({ buy }) {
  // !클릭시 변경되는 state를 만들어 줘야함
  const { buys } = useSelector((state) => state.buys)
  const [buydata, setBuyData] = useState(buys)
  const dispatch = useDispatch()




  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const DeleteButtonHandler = (buyid) => {
    dispatch(deleteBuys(buy.id))
    axios.delete(`http://localhost:4000/buys/${buy.id}`)

    alert("삭재완료")
  }
  const TogleButtonHandler = async () => {
    const updatebuy = { ...buy, isDone: !buy.isDone }
    await axios.patch(`http://localhost:4000/buys/${buy.id}`, updatebuy);
    dispatch(toggleBuys(buy.id))
  }
  // console.log("buy.id:", buy.id);

  return (
    <CardDiv>
      <CardTitle><CardP>{buy.title}</CardP></CardTitle>
      <CardP>가격:{buy.price}</CardP>
      <CardContent onClick={() => navigate(`/detail/${buy.id}`)}><CardP>{buy.coments}...자세히</CardP></CardContent>
      <ButtonBox>
        <StyledButton onClick={() => DeleteButtonHandler(buy.id)} color={'#e41717'}>삭제</StyledButton>
        <StyledButton onClick={TogleButtonHandler} color={'#92cc7a'}>{buy.isDone ? '안살래😓' : '구매🙂'}</StyledButton>
        <StyledButton onClick={() => navigate(`/update/${buy.id}`)} color={'#3537cc'}>수정하기</StyledButton>
      </ButtonBox>
    </CardDiv >
  )
}

export default Card

