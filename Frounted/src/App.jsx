import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/userSignup'
import UserLogin from "./pages/UserLogin"
import CaptionLogin from './pages/captionLogin'
import CaptionSignup from './pages/captionSignup'
import { UserContextData } from './context/UserContext'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import  UserLogout  from './pages/UserLogout'



const App = () => {


  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/captain-signup' element={<CaptionSignup />} />
        <Route path='/captain-login' element={<CaptionLogin />} />
        <Route path='/home' element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
