import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

useEffect(() => {
  const syncData = () => {
    const { employees, admin } = GetLocalStorage();
    if (employees != null && admin != null) {
      SetuserData({ employees, admin });
    } else {
      SetuserData({ employees: [], admin: [] });
    }
  };

  // run once initially
  syncData();

  // run whenever localStorage changes
  window.addEventListener("storage", syncData);

  return () => {
    window.removeEventListener("storage", syncData);
  };
}, );





    const [userData , SetuserData] = useState({employees : [] , admin : []})


    useEffect(()=>{
        const {employees , admin} = GetLocalStorage();
        if(employees!=null && admin!=null)
        {
            SetuserData({employees , admin})
        }
        else
        {
            SetuserData({employees : [] , admin : []})
        }
    } , [])
  return (
    <div>
      <AuthContext.Provider value = {userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
