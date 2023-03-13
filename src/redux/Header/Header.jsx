import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledHeader, StyledP } from './styles'
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
  const navigator = useNavigate()
  return (
    <StyledHeader>
      <StyledP onClick={() => navigator(`/`)} className="logo"><FaShoppingBasket />SeunghoWhite</StyledP>
      <StyledP onClick={() => navigator(`/form`)} >작성하러 가기</StyledP>
    </StyledHeader>
  )
}

export default Header