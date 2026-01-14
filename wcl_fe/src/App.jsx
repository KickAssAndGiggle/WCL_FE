import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { loggedIn } from './globals'
import UIFramework from './layout/UIFramework'
import Login from './login/Login'

function App() {



  return (
    <>
      {
        loggedIn ?
          <UIFramework />
          :
          <Login />
      }
    </>
  )
}

export default App
