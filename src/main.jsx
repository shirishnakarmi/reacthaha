import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom/client';
// import '../src/index.css';
// // import SolarPanels from './modalExample/modal_example';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './compo/home';
// import Setting from './compo/settings';
// import Profile from './compo/profile';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App/>}/>
//       <Route index element={<Home/>}/>
//       <Route path="profile" element={<Profile/>}/>
//       <Route path="setiings" element={<Setting/>}/>
//       </Routes>
//       </BrowserRouter>
//   </React.StrictMode>
// )
