
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login, logout } from '../redux/AuthReducer/action'

const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in")
    const [password, setPassword] = useState("")
    const isAuth = useSelector(state=>state.AuthReducer.isAuth)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const comingFrom = location.state?.from?.pathname||"/"
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(email&&password)
        {
            dispatch(login({email,password})).then((r)=>{
                if(r.type==="USER_LOGIN_SUCCESS")
                {
                    navigate(comingFrom,{replace:true})
                }
            })

        }
    }
   const handlelogout =()=> 
   {
  dispatch(logout())
  navigate('/')
   }
    if(isAuth){
        return  <Logoutwrapper><button onClick={handlelogout}>Logout</button></Logoutwrapper>
       }else{
  return (
    <Loginwrapper>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Enter Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
            <label>Enter Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
    <button type='submit'>Login</button>
        </form>
        </Loginwrapper>
  )
       }
}

export default Login
const Loginwrapper=styled.div`
display:flex;
width:300px;
flex-direction:column;
align-items:center;
margin:auto;
`
const Logoutwrapper=styled.div`
display:flex;
width:300px;
flex-direction:column;
align-items:center;
margin:50px auto;
`
