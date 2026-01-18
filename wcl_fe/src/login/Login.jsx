import { useState, useEffect } from 'react'
import Logo from '../assets/logo.jpg'
import { login, getGymId } from '../helpers/apiAccess'
import SignUp from './SignUp'

export function Login(props) {

  const [smallScreen, setSmallScreen] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const doLogin = async (data) => {
    const un = document.getElementById('txtUser').value
    const pw = document.getElementById('txtPassword').value
    login(un, pw, loginResult)
  }

  const signUp = () => {
    setShowSignUp(true)
  }

  const loginResult = (data) => {
    sessionStorage.setItem('token', data)
    getGymId(getGymResult)
  }

  const getGymResult = (data) => {
    props.onLogin()
  }

  const windowResized = () => {
    if (window.innerWidth <= 800) {
      setSmallScreen(true)
    } else {
      setSmallScreen(false)
    }
  }

  const closeSignup = () => {
    setShowSignUp(false)
  }

  useEffect(() => {
    window.onresize = windowResized
    windowResized()
  }, []);

  return (
    <div className="centralFullWidth" style={{ textAlign: "center" }}>
      <div className="outerLogoBorder">
        {smallScreen ? <h2>Web Combat League</h2> :
          <h1>Web Combat League</h1>}
        <img src={Logo} style={{ width: smallScreen ? "240px" : "450px", height: smallScreen ? "240px" : "400px", margin: "auto" } } />
        <p>Email:<br />
          <input className="inputBox" id="txtUser" />
          <br />Password<br />
          <input className="inputBox" id="txtPassword" type="password" />
        </p>
        <button className="button" onClick={() => doLogin()}>Login</button>
        <p>New here? <a href="#" onClick={() => signUp() }>Sign up!</a></p>
      </div>
      {showSignUp ? <SignUp closeSignup={closeSignup} /> : <></> }
    </div>
  )

}

export default Login;