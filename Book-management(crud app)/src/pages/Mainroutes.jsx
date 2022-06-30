import React from 'react'
import {Routes,Route} from "react-router-dom"
import RequireAuth from '../hoc/RequireAuth'
import Admin from './Admin'
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBook from './SingleBook'


const Mainroutes = () => {
  return (
   
        <Routes>
            <Route path='/'  element={<Books/>}/>
            <Route path='/books/:id' element={<SingleBook/>} />
            <Route path='/books/:id/edit' element={<RequireAuth><EditBook/></RequireAuth>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<h1>Page is Not Available</h1>} />
            
        </Routes>
   
  )
}

export default Mainroutes