import { useState, useEffect } from 'react'
import Logo from '../assets/logo.jpg'
import { signUp } from '../helpers/apiAccess'
import Select from 'react-select';


export function SignUp(props) {

  const [selectedCountry, setSelectedCountry] = useState(1)
  const [selectedCity, setSelectedCity] = useState(1)

  const countryOptions = [
    { value: '1', label: 'England' }
  ]

  const cityOptions = [
    { value: '1', label: 'London' }
  ]

  const doSignUp = () => {

    var email = document.getElementById('txtSUEmail').value
    var pwd = document.getElementById('txtSUPW').value
    var pwdRepeat = document.getElementById('txtSUPWRPT').value

    var dispname = document.getElementById('txtSUDispName').value
    var gymName = document.getElementById('txtGymName').value
    var country = selectedCountry
    var city = selectedCity

    signUp(email, pwd, dispname, gymName, country, city, afterSignup);

  }

  const afterSignup = (data) => {
    props.closeSignup()
  }


  return (
    <div className="signupPanel" style={{ paddingTop: "20px"}}>
      <div>Email:</div>
      <div style={{ marginBottom: "5px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}><input id="txtSUEmail" className="inputBox" /></div>
      <div>Password:</div>
      <div style={{ marginBottom: "5px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}><input id="txtSUPW" className="inputBox" /></div>
      <div>Repeat password:</div>
      <div style={{ marginBottom: "25px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}><input id="txtSUPWRPT" className="inputBox" /></div>
      <div>Display name:</div>
      <div style={{ marginBottom: "5px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}><input id="txtSUDispName" className="inputBox" /></div>
      <div>Gym name:</div>
      <div style={{ marginBottom: "25px", maxWidth: "360px", marginLeft: "auto", marginRight: "auto" }}><input id="txtGymName" className="inputBox" /></div>
      <div>Gym country:</div>
      <div style={{ marginBottom: "5px", maxWidth: "320px", marginLeft: "auto", marginRight: "auto" }}>
        <Select className="basic-single"
          classNamePrefix="select" options={countryOptions} />
      </div>
      <div>Gym city:</div>
      <div style={{ marginBottom: "5px", maxWidth: "320px", marginLeft: "auto", marginRight: "auto" }}>
        <Select className="basic-single"
          classNamePrefix="select" options={cityOptions} />
      </div>
      <div class="flex" style={{ margin: "auto", maxWidth: "320px" }}>
        <div style={{ marginRight: "auto" }}>
          <button className="button" style={{ background: "#EE4444FF" }} onClick={() => props.closeSignup()}>Cancel</button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button className="button" onClick={() => doSignUp()}>Sign Up!</button>
        </div>
      </div>

    </div>
  )

}

export default SignUp