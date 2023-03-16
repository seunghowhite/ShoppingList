import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Form from '../pages/Form'
import Home from '../pages/Home'
import Header from '../redux/Header/Header'
import { Reset } from 'styled-reset'
import { LayoutDiv } from '../redux/Layout/styled'
import Update from '../pages/Update'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Router = () => {
  return (
    <BrowserRouter>
      <Reset />
      <LayoutDiv>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </LayoutDiv>
    </BrowserRouter>
  )
}
export default Router