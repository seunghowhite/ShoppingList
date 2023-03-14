import styled from 'styled-components'

const CardDiv = styled.div`
  background-color: #c2c7d8;
  width: 240px;
  height: 200px;
  margin: 20px;
  border-radius:8px;
  :hover{
    background-color: #a0afcf;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardTitle = styled.h2`
  color: #000000;
  font-size: 20px;
  font-weight: 900;
  margin: 10px 0px;
`
const CardContent = styled.div`
cursor: pointer;
  color: #000000;
  background-color: #f5f4f4;
  width: 200px;
  height: 110px;
  padding: 10px;
  margin-top: 4px;
  border-radius: 10px;
`
const CardP = styled.p`
  color: #000000;
  `
const ButtonBox = styled.div`
    padding: 8px;
  `
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

export { CardDiv, CardTitle, CardContent, CardP, ButtonBox, StyledButton }