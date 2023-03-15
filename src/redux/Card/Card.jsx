import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteBuys, toggleBuys, __deleteBuys, __togleButton } from '../modules/buysSlice';
import { ButtonBox, CardContent, CardDiv, CardP, CardTitle, StyledButton } from './styles';
function Card({ buy }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const DeleteButtonHandler = (buyid) => {
    dispatch(deleteBuys(buyid))
    dispatch(__deleteBuys(buyid))
    alert("삭재완료")
  }

  const TogleButtonHandler = (buyid) => {
    const updatebuy = { ...buy, isDone: !buy.isDone }
    dispatch(toggleBuys(buyid))
    dispatch(__togleButton({ id: buyid, data: updatebuy }))
  }

  return (
    <CardDiv>
      <CardTitle><CardP>{buy.title}</CardP></CardTitle>
      <CardP>가격:{buy.price}</CardP>
      <CardContent onClick={() => navigate(`/detail/${buy.id}`)}><CardP>{buy.coments}...자세히</CardP></CardContent>
      <ButtonBox>
        <StyledButton onClick={() => DeleteButtonHandler(buy.id)} color={'#e41717'}>삭제</StyledButton>
        <StyledButton onClick={() => TogleButtonHandler(buy.id)} color={'#92cc7a'}>{buy.isDone ? '안살래😓' : '구매🙂'}</StyledButton>
        <StyledButton onClick={() => navigate(`/update/${buy.id}`)} color={'#3537cc'}>수정하기</StyledButton>
      </ButtonBox>
    </CardDiv >
  )
}

export default Card

