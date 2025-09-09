import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({setUser , data}) => {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        <Header setUser={setUser} data = {data}/>
        <TaskListNumber data = {data} />
         <TaskList data = {data}></TaskList>
      </div>
    </div>
  )
}

export default EmployeeDashboard
