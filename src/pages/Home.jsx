
//TODO 여기서 데이터 다 받아와서 IS FALSE 뿌려 줘야함

import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../redux/Card/Card'

const Home = () => {

  // todo 저장값 받아와서 map돌려서 내려주기.
  const buys = useSelector((state) => state.buys.buys)
  console.log('바이스', buys);
  return (

    <>
      <h1>홈입니다.사야함</h1>
      <HomeDiv >
        {buys.map((item) => {
          return !item.isDone && <Card buy={item} key={item.id}></Card>
        })}

      </HomeDiv>
      <h1>산것들</h1>
      <HomeDiv >
        {buys.map((item) => {
          return item.isDone && <Card buy={item} key={item.id}></Card>
        })}
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

