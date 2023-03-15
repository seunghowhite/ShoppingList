import React from 'react'
import styled from 'styled-components'

function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button


const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  position: relative;
  margin: 5px 5px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  :hover{
    background-color: ${({ color }) => color};
  }
`