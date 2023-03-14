import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';
import { updateBuy } from '../redux/modules/buysSlice';

function Update() {
  const buys = useSelector((state) => state.buys.buys)
  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const founddata = buys.find(
    (item) => {
      return item.id === params.id
    })
  console.log(founddata.title);
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

  const submitHnadler = (e) => {
    e.preventDefault();
    //todo 수정으로 바꾸자
    dispatch(updateBuy(Buy))
    alert('수정완료')
    navigate('/')
  }
  return (
    <>
      <StyledForm onSubmit={submitHnadler}>
        제목:<StyledInput height={'20px'} width={'200px'} type='text' value={title} onChange={titlehandler} />
        가격:<StyledInput height={'20px'} width={'100px'} type='text' value={price} onChange={pricehandler} />
        내용:<StyledInput height={'400px'} width={'500px'} type='text' value={coments} onChange={comentshandler} />
        <StyledButton height={'20px'} width={'100px'} >수정하기</StyledButton>
      </StyledForm>
    </>
  )
}

export default Update


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: gray;
  height: 1000px;
`

const StyledInput = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: 0px;
`

const StyledButton = styled.button`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`