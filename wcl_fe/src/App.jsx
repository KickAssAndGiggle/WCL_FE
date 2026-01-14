import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UIFramework from './layout/UIFramework'
import Login from './login/Login'

function App() {

  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('token') != null)
  
  const onLogin = () => {
    setLoggedIn(true)
  }

  return (
    <>
      {
        loggedIn ?
          <UIFramework />
          :
          <Login onLogin={onLogin} />
      }
    </>
  )
}

export default App
