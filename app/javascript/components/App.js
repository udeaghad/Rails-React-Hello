import React from 'react';
import Messages from './Messages';
import {Routes, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const App = () => {

  return (  
    <>
      <h1>Home Page</h1>

      <NavLink to='/messages'>Click to see messages</NavLink>  

      <Routes>
        <Route path="/messages" element={<Messages />}/>      
      </Routes>
    </>
  )
}

export default App;