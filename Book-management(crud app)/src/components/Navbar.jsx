import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const isAuth = useSelector((state)=>state.AuthReducer.isAuth)
  return (
    <div style={{border:"1px solid black",height:'60px',display:"flex", gap:"100px",justifyContent:"flex-end",padding:"20px"}}>
      <Link to={"/"}>Home</Link>
      <Link to={""}>Book of the day</Link>

      <Link to={"/login"}>{isAuth?"Logout":"Login"}</Link>
    </div>
  )
}

export default Navbar