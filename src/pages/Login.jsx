import React from 'react'
import { useNavigate } from 'react-router-dom'
import useInput from '../Hooks/useInput'
import Button from '../redux/Button/Button'

function Login() {
  const navigator = useNavigate()
  const [username, usernameHandler] = useInput(``);
  const [userPw, userPwHandler] = useInput(``);

  return (
    <>
      <div>Login</div>
      유저네임<input type='text' value={username} onChange={usernameHandler}></input>
      비밀번호<input type='text' value={userPw} onChange={userPwHandler}></input>
      <Button>로그인</Button>


      <Button onClick={() => navigator(`/signup`)}>회원가입</Button>
    </>
  )
}

export default Login