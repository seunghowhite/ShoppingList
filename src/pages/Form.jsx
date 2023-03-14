import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useInput from '../Hooks/useInput'
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
  }
  //todo 유효성 검사 해야함

  const submitHnadler = (e) => {
    e.preventDefault();
    dispatch(addBuys(buy))
    alert('작성완료')
    navigate('/')
  }

  return (
    <>
      <StyledForm onSubmit={submitHnadler}>
        제목:<StyledInput height={'20px'} width={'200px'} type='text' value={title} onChange={titlehandler} />
        가격:<StyledInput height={'20px'} width={'100px'} type='text' value={price} onChange={pricehandler} />
        내용:<StyledInput height={'400px'} width={'500px'} type='text' value={coments} onChange={comentshandler} />
        <StyledButton height={'20px'} width={'100px'} >저장</StyledButton>
      </StyledForm>
    </>
  )
}

export default Form


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

