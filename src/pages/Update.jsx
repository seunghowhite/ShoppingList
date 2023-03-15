import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import Button from '../redux/Button/Button';
import { StyledButton } from '../redux/Card/styles';
import { updateBuy, __updateBuys, } from '../redux/modules/buysSlice';

function Update() {
  const { buys } = useSelector((state) => state.buys)
  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const founddata = buys.find(
    (item) => {
      return item.id === parseInt(params.id)
    })

  const [title, titlehandler] = useInput(founddata.title)
  const [coments, comentshandler] = useInput(founddata.coments)
  const [price, pricehandler] = useInput(founddata.price)
  const Buy = {
    title,
    coments,
    price,
    id: founddata.id,
    isDone: founddata.isDone
  }

  const submitHnadler = (Buy) => {
    if (title && coments && price) {
      dispatch(updateBuy(Buy))
      dispatch(__updateBuys({ id: founddata.id, data: Buy }))
      alert('수정완료')
      navigate('/')
    } else {
      alert('값을 입력하세요')
    }
  }

  return (
    <DetailDiv>
      <StyledForm onSubmit={(e) => { e.preventDefault(); submitHnadler(Buy) }}>
        <DetailP>제목:</DetailP>
        <StyledInput height={'20px'} width={'200px'} type='text' value={title} onChange={titlehandler} />
        <DetailP>가격:</DetailP>
        <StyledInput height={'20px'} width={'100px'} type='text' value={price} onChange={pricehandler} />
        <DetailP>내용:</DetailP>
        <StyledInput height={'400px'} width={'500px'} type='text' value={coments} onChange={comentshandler} />
        <Button height={'20px'} width={'100px'} color={'#777777a6'}>수정하기</Button>
      </StyledForm>
    </DetailDiv>
  )
}

export default Update


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const DetailDiv = styled.div`
  padding: 20px;
  min-height: 400px;
  margin: 10%;
  background-color: #282C34;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 500px;
`

const StyledInput = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: larger;
  border-radius: 8px;
`

const DetailP = styled.p`
  color:#8edb6d;
  font-size: 25px;
`