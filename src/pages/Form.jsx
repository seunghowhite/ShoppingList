import React from 'react'
import styled from 'styled-components'
import useInput from '../Hooks/useInput'

function Form() {

  const [title, titlehandler] = useInput(``)
  const [contents, contentshandler] = useInput(``)
  const [price, pricehandler] = useInput(``)

  const submitHnadler = () => {

  }

  return (
    <>
      <StyledForm onSubmit={submitHnadler()}>
        <StyledInput height={15} type='text' value={title} onChange={titlehandler} />
        <StyledInput type='text' value={contents} onChange={contentshandler} />
        <StyledInput type='text' value={price} onChange={pricehandler} />
        <button>저장</button>
      </StyledForm>
    </>
  )
}

export default Form


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: gray;
  height: 1000px;
`

const StyledInput = styled.input`
   

`



