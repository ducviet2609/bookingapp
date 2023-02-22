import React from 'react'
import Auth from './page/Auth/auth';
import Home from './page/Home/home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/auth' element={<Auth />} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
