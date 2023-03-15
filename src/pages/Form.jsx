import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useInput from '../Hooks/useInput'
import { StyledButton } from '../redux/Card/styles'
import { addBuys } from '../redux/modules/buysSlice'

function Form() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [title, titlehandler] = useInput(``)
  const [coments, comentshandler] = useInput(``)
  const [price, pricehandler] = useInput(``)

  const buy = {
    title: title,
    coments: coments,
    price: price,
    isDone: false,
  }
  //!!todo 유효성 검사 해야함
  //!저장!!!!!!!!!!!!!!!!!!!!
  const submitHnadler = async (buy) => {
    // dispatch(addBuys(buy))
    await axios.post("http://localhost:4000/buys", buy);
    alert('작성완료')
    navigate('/')
  }

  return (
    <DetailDiv>
      <StyledForm onSubmit={(e) => { e.preventDefault(); submitHnadler(buy) }}>
        <DetailP>제목:</DetailP>
        <StyledInput height={'20px'} width={'200px'} type='text' value={title} onChange={titlehandler} />
        <DetailP>가격:</DetailP>
        <StyledInput height={'20px'} width={'100px'} type='text' value={price} onChange={pricehandler} />
        <DetailP>내용:</DetailP>
        <StyledInput height={'400px'} width={'500px'} type='text' value={coments} onChange={comentshandler} />
        <StyledButton height={'20px'} width={'100px'} color={'#777777a6'} >저장</StyledButton>
      </StyledForm>
    </DetailDiv>
  )
}

export default Form

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
