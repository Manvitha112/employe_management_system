import React, { useContext } from 'react'
import Login from '../Auth/Login'


const Header = ({setUser , data}) => {
  
  
  
  const HandleLogout = () => {
    setUser(null); // reset user -> goes back to login
    localStorage.setItem("loggedInUser" , "")
  }
  console.log(data);
  
  return (
    <div className='flex items-start justify-between'>
      <h1 className='text-3xl'>Hello Admin <br/> <span className='text-4xl font-extrabold'>{data?.name ? data.name : "Guest"}</span></h1>
      <button onClick={HandleLogout} className='bg-red-500 text-amber-50 rounded-4xl px-10 py-5'>Log Out</button>
    </div>
  )
}

export default Header
