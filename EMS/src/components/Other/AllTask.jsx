import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const AuthData = useContext(AuthContext)
  const EmployeeData = AuthData.employees

  return (
    <div
      id="AllTask"
      className="bg-[#121212] h-[500px] overflow-auto p-6 mt-6 rounded-3xl shadow-lg"
    >
      {/* Header */}
      <div className="p-4 rounded-xl flex justify-between mb-6 bg-[#1f1f1f] border-2 border-amber-50 text-gray-300 font-semibold text-lg shadow-md shadow-amber-50">
        <h2 className="flex-1">Employee</h2>
        <h3 className="flex-1 text-center">Active</h3>
        <h3 className="flex-1 text-center">New</h3>
        <h3 className="flex-1 text-center">Completed</h3>
        <h3 className="flex-1 text-center">Failed</h3>
      </div>

      {/* Rows */}
      {EmployeeData.map((emp, index) => (
        <div
          key={index}
          className="p-4 rounded-xl flex justify-between mb-4 bg-[#1e1e1e] text-white text-lg items-center 
                     hover:bg-[#2a2a2a] transition-all duration-200 shadow-md shadow-amber-50 border-2 border-amber-50"
        >
          <h2 className="flex-1 font-l text-2xl">{emp.name}</h2>

          <h3 className="flex-1 text-center">
            <span className="bg-blue-600 px-4 py-1 rounded-full text-xl font-bold">
              {emp.taskCount.active}
            </span>
          </h3>

          <h3 className="flex-1 text-center">
            <span className="bg-yellow-500 px-4 py-1 rounded-full text-xl font-bold">
              {emp.taskCount.new}
            </span>
          </h3>

          <h3 className="flex-1 text-center">
            <span className="bg-green-600 px-4 py-1 rounded-full text-xl font-bold">
              {emp.taskCount.completed}
            </span>
          </h3>

          <h3 className="flex-1 text-center">
            <span className="bg-red-600 px-4 py-1 rounded-full text-xl font-bold">
              {emp.taskCount.failed}
            </span>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default AllTask
