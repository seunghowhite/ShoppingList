import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const Detail = () => {
  const buys = useSelector((state) => state.buys.buys)
  const params = useParams();
  const founddata = buys.find(
    (item) => {
      return item.id === params.id
    })

  return (
    <div>
      <h1>{founddata.title}</h1>
      <p>{founddata.price}</p>
      <p>{founddata.coments}</p>
    </div>
  )
}

export default Detail