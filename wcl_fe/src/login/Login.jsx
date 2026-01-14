import Logo from '../assets/logo.jpg'
import { login } from '../helpers/apiAccess'

export function Login() {

  const doLogin = async (data) => {
    const un = document.getElementById('txtUser').value
    const pw = document.getElementById('txtPassword').value
    login(un, pw, loginResult)
  }

  const loginResult = (data) => {
    console.log(data)
  }


  return (
    <div className="centralFullWidth" style={{ textAlign: "center" }}>
      <div className="outerLogoBorder">
        <h1>Web Combat League</h1>
        <img src={Logo} style={{ width: "450px", height: "450px", margin: "auto" }} />
        <p>Email:<br />
          <input id="txtUser" />
        </p>
        <p>Password<br />
          <input id="txtPassword" />
        </p>
        <button onClick={() => doLogin()}>Login</button>
        <p>New here? <a href="#">Sign up!</a></p>
      </div>
    </div>
  )

  useEffect(() => {
    console.log("effect running")
    debugger
  }, [])



}

export default Login;