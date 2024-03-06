import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Todo from './Components/Todo';
export default function App() {
  const isAuthenticated=true;
 

  return (
    <>
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Login></Login>} />
           <Route path='/register' element={<Register></Register>} />
           <Route path='/Todo' element={isAuthenticated?(<Todo></Todo>):(<Login></Login>)}/>
           
           
           
        </Routes>
    </BrowserRouter>
    </>
  );
}
