import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';



const Detail = () => {
  const { buys } = useSelector((state) => state.buys)
  const params = useParams();
  const founddata = buys.find(
    (item) => {
      return item.id === parseInt(params.id)
    })
  return (
    <DetailDiv>
      <Styleddiv fontsize={'50px'}>{founddata.title}</Styleddiv>
      <Styleddiv fontsize={'20px'}>가격{founddata.price}</Styleddiv>
      <Styleddiv fontsize={'20px'} height={'250px'} width={'300px'}>{founddata.coments}</Styleddiv>
    </DetailDiv >
  )
}

export default Detail


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

const Styleddiv = styled.div`
  font-size: ${({ fontsize }) => fontsize};
  height: ${({ height }) => height}; 
  width:${({ width }) => width} ;
  margin-top: 30px;
  color: #ffffff;
  background-color: #4f6ca7;
  border-radius: 8px;
  padding: 10px;
`

