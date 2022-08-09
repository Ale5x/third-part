import './styles/LoginForm.css'
import './styles/CertificateCatalog.css'
import './styles/ModelView.css'
import './styles/MainContent.css'
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Error.css'


import LoginForm from './components/LoginForm';
import RegistartionForm from './components/RegistrationForm';
import CertificatreCatalog from './components/CertificatreCatalog';
import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './components/Error/ErrorServer'
import ErrorPage404 from './components/Error/Error404'
import Error403 from './components/Error/Error403'
import AdminHeader from './components/AdminHeader'

import Test from './components/Test'
import Test2 from './components/Test2'
import TestModel from './components/TestModel'

import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div>
      <Router>
        {(localStorage.getItem("roles") === "[ADMIN]") ?
         (<AdminHeader/>) : (<Header/>)}
        
        <Routes>

        <Route path='*' element={<ErrorPage404/>}/>



          <Route path='test' element={<Test/>}/>
          <Route path='test2' element={<Test2/>}/>
          {/* <Route path='tm' 
                    render={() => <TestModel/>} */}
          {/* // element={<TestModel/>}
          /> */}
          <Route path='tt' element={<TestModel/>}/>
          <Route path='error' element={<Error403/>}/>


          <Route path='/' element={<Test/>}/>
          <Route path='error-page-server' element={<ErrorPage/>}/>
          <Route path='error-page-404' element={<ErrorPage404/>}/>
          <Route path='certificate-catalog' element={<CertificatreCatalog/>}/>
        </Routes>
      </Router>


      {/* <Router>
        {(localStorage.getItem("roles") === "[ADMIN]") ?
         (<AdminHeader/>) : (<Header/>)}
        
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='error-page-server' element={<ErrorPage/>}/>
          <Route path='error-page-404' element={<ErrorPage404/>}/>

          <Route path='login' element={<LoginForm/>}/>
          <Route path='registration' element={<RegistartionForm/>}/>
          <Route path='certificate-catalog' element={<CertificatreCatalog/>}/>
        </Routes> 
        <Footer/>
      </Router> */}
    </div>
    
  );
}

export default App;
