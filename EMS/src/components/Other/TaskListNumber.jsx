import React from 'react'

//  taskCount: {
//       total: 3,
//       active: 1,
//       new: 1,
//       completed: 1,
//       failed: 1,
//       pending: 0,
//     },
const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen  gap-6 mt-12'>
      
      <div className=' w-4/10 px-20 py-6 bg-red-400 rounded-3xl shadow-lg shadow-red-500
'>
       
            <h1 className='text-4xl mt-3 px-8'>{data.taskCount.new}</h1>
        <h2 className='text-3xl px-8'>New Task</h2>
      </div>
<div className=' w-4/10 px-20 py-6 bg-blue-400 rounded-3xl shadow-lg shadow-blue-500'>
       
            <h1 className='text-4xl mt-3 px-8'>{data.taskCount.active}</h1>
        <h2 className='text-3xl px-8'>Active Task</h2>
      </div>
      <div className=' w-4/10 px-20 py-6 bg-green-400 rounded-3xl shadow-lg shadow-green-500'>
       
            <h1 className='text-4xl mt-3 px-8'>{data.taskCount.completed}</h1>
        <h2 className='text-3xl px-8'>Completed Task</h2>
      </div>
      <div className=' w-4/10 px-20 py-6 bg-yellow-400 rounded-3xl shadow-lg shadow-yellow-500'>
       
            <h1 className='text-4xl mt-3 px-8'>{data.taskCount.failed}</h1>
        <h2 className='text-3xl px-8'>Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskListNumber
