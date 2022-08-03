import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import './Modal.css';
// import './main-content.css';
// import './certificateCatalog.css'
// import './footer.css'
// import './header-user.css';
import App from './App';
// import LoginForm from './componets/LoginForm';
import reportWebVitals from './reportWebVitals';
// import './styles/LoginStyle.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
