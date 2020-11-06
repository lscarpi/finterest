import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../redux/auth/action-creators'
import styled from 'styled-components'
import { Input } from '../components/form/input/input'
import { Button } from '../components/form/button/button'
import { black } from '../config/colors'

const AuthWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AuthTitle = styled.h3`
  color: ${black};
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -1.2px;
  word-break: break-word;
  text-align: center;
  margin: 0;
`

const AuthSubtitle = styled.h4`
  color: ${black};
  text-align: center;
  font-size: 16px;
  font-weight: normal;
`

const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`

const Auth = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => (
    setEmail(e.target.value)
  )

  const handlePasswordChange = (e) => (
    setPassword(e.target.value)
  )

  const handleLogin = (e) => {
    e.preventDefault()
    props.startLogin(email,password)
  }
  
  return(
    <AuthWrapper>
      <div>
        <AuthTitle>
          Welcome to Finterest
        </AuthTitle>
        <AuthSubtitle>
          Calculate your costs
        </AuthSubtitle>
      </div>

      <FormWrapper>
        <form onSubmit={handleLogin}>
          <Input 
            type='text' 
            placeholder='Email'
            value={email}
            handleChange={handleEmailChange}
          />
          <Input 
            type='password' 
            placeholder='Password'
            value={password}
            handleChange={handlePasswordChange}
          />
          <Button type='submit' isLogin>
            Continue
          </Button>
        </form>
      </FormWrapper>
    </AuthWrapper>
  )
}

const mapStateToProps = (state) => {
  
  return ({
    isLoggedIn: state.isLoggedIn
  })
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)