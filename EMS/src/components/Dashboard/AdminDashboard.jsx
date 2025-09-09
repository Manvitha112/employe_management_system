import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({setUser , data}) => {
  return (
    <div className="p-10 w-full h-screen bg-black text-white">
      {/* Header */}
      <Header setUser={setUser} data = {data}/>

      {/* Centered form */}
      <CreateTask></CreateTask>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
