
//TODO 여기서 데이터 다 받아와서 IS FALSE 뿌려 줘야함

import styled from 'styled-components'

const Home = () => {
  return (
    <>

      <h1>홈입니다.사야함</h1>
      <HomeDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
      </HomeDiv>
      <h1>홈입니다 산것들</h1>
      <HomeDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
        <CardDiv>카드</CardDiv>
      </HomeDiv>
    </>
  )
}
export default Home

const HomeDiv = styled.div`
  border:1px solid black;
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
`
const CardDiv = styled.div`
  width: 240px;
  height: 200px;
  border: 1px solid black;
  margin: 20px;
`
