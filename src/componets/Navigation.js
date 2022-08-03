import React from 'react'
import LoginForm from './LoginForm';
import CertificatreCatalog from './certificatreCatalog';
import RegistartionForm from './RegistrationForm';
import MainContent from './main-content';
import LoginF from './test/Log';
import  '../styles/LoginStyle.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function Navigation() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='test' element={<LoginF/>}/>
        <Route path='login' element={<LoginForm/>}/>
        <Route path='registration' element={<RegistartionForm/>}/>
        <Route path='certificate-catalog' element={<CertificatreCatalog/>}/>
      </Routes>
      
    </Router>
  )
}

export default Navigation