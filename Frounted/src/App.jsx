import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/userSignup'
import UserLogin from "./pages/UserLogin"
import CaptainLogin from "./pages/CaptionLogin"
import CaptionSignup from "./pages/CaptionSignup"
import { UserContextData } from './context/UserContext'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import  UserLogout  from './pages/UserLogout'
import { CaptainHome } from './pages/CaptainHome'
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import {CaptainLogout} from "./pages/CaptainLogout";




const App = () => {


  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/captain-signup' element={<CaptionSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/home' element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>} />
        <Route path='/captain-logout' element={<CaptainProtectWrapper><CaptainLogout /></CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
