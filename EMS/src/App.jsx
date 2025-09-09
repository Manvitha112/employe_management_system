import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { GetLocalStorage, SetLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, SetLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)
// localStorage.clear()
useEffect(() => {
  // Only initialize if no employees/admin exist
  if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
    SetLocalStorage();
  }
  GetLocalStorage();
}, []);

 useEffect(() => {
  const syncLoggedInUser = () => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const UserData = JSON.parse(loggedInUser)
      setUser(UserData.role)
      SetLoggedInUserData(UserData.data)   // <-- refresh here
    }
  }

  // Run on storage change
  window.addEventListener("storage", syncLoggedInUser)

  // Also run immediately
  syncLoggedInUser()

  return () => {
    window.removeEventListener("storage", syncLoggedInUser)
  }
}, [])


  const HandleLogin = (email, password) => {
    if (AuthData) {
      // Check admin
      const admin = AuthData.admin.find(
        (admin) => admin.email === email && admin.password === password
      )
      if (admin) {
        localStorage.setItem('loggedInUser' , JSON.stringify({role : "admin" , data : admin}))
        SetLoggedInUserData(admin)
        setUser('admin')
        return
      }

      // Check employee
      const employee = AuthData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        localStorage.setItem('loggedInUser' , JSON.stringify({role : "employee" , data : employee}))
        SetLoggedInUserData(employee)
        setUser('employee')
        return
      }
    }

    alert('Invalid credentials!')
  }

  return (
    <>
      {!user ? (
        <Login HandleLogin={HandleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard setUser={setUser} data={LoggedInUserData} />
      ) : user === 'employee' ? (
        <EmployeeDashboard setUser={setUser} data={LoggedInUserData} />
      ) : null}
    </>
  )
}

export default App
