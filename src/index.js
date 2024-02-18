import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './comp/header/header';
import Img from './comp/img/img';
import Main from './comp/main.js/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <> 
   <Header/>
   <Img/>
   <Main/>
   </>
  </React.StrictMode>
);

