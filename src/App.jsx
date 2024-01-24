import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OtpLogin from './components/OtpLogin'

function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold my-4 ">
        REACT OTP FILEDS!
      </h1>
      <OtpLogin />
    </div>
  )
}

export default App
