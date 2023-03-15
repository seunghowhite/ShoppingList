import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../redux/Card/Card'
import { StyledButton } from '../redux/Card/styles'
import { __getBuys } from '../redux/modules/buysSlice'


const Home = () => {
  const { buys, isLoading, error } = useSelector((state) => state.buys)
  const navigator = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBuys())
  }, [])
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러발생.. 다시 시도해주세요.</div>;


  return (
    <>
      {/* 구매목록 */}
      <HomeTitleDiv>
        <HometitleH1>사고싶은 물건들!🥺</HometitleH1>
        <StyledButton onClick={() => navigator(`/form`)} color={'#777777a6'} height='50px'>작성하러 가기</StyledButton>
      </HomeTitleDiv>
      {/* 사고싶은 물건들 */}
      <HomeDiv >
        {buys?.map((item) => {
          return !item.isDone && <Card buy={item} key={item.id}></Card>
        })}
      </HomeDiv>
      <HomeTitleDiv><HometitleH1>구매 완료!😋</HometitleH1></HomeTitleDiv>
      {/* 구매완료 */}
      <HomeDiv >
        {buys?.map((item) => {
          return item.isDone && <Card buy={item} key={item.id}></Card>
        })}
      </HomeDiv>
    </>
  )
}
export default Home

const HometitleH1 = styled.div`
  font-size:40px;
  margin: 20px;
`

const HomeDiv = styled.div`
  background-color: #ececec;
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  min-height: 250px;
`

const HomeTitleDiv = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
`



