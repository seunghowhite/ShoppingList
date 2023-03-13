import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Form from '../pages/Form'
import Home from '../pages/Home'
// import Footer from '../redux/Footer/Footer'
import Header from '../redux/Header/Header'
import { Reset } from 'styled-reset'
import { LayoutDiv } from '../redux/Layout/styled'


const Router = () => {
  return (
    <BrowserRouter>
      <LayoutDiv>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
        {/* <Footer /> */}
      </LayoutDiv>
    </BrowserRouter>
  )
}
export default Router