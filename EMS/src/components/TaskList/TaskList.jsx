import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
// tasks: [
//       {
//         title: "UI Wireframe Design",
//         description: "Create wireframes for the new dashboard page",
//         date: "2025-09-01",
//         category: "Design",
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//       },
const TaskList = ({data}) => {
  return (
    <div id= "Tasklist" className=' flex-nowrap overflow-x-auto flex items-center justify-start gap-6 mt-15 h-5/10 w-full py-5 bg-[#1c1c1c]'>
      {data.tasks.map((task)=>{
        if(task.active)
        {
         
          return <AcceptTask data = {task}/>
        }
        // else if (task.newTask) {
        //   return <NewTask data = {task}/>
          
        // }
        else if (task.completed) {
          return <CompleteTask data = {task}/>
          

        }
        else
        {
          return <FailedTask data = {task}/>
        }
      })}
      {/* <div className='flex-shrink-0 h-full w-[400px] bg-green-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[400px] bg-red-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[400px] bg-blue-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[400px] bg-yellow-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[400px] bg-pink-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[400px] bg-orange-300 rounded-2xl p-5 '>
        <div className='flex justify-between items-center'>
            <h3 className=' bg-red-600 px-6 py-4 rounded-3xl'>High</h3>
            <h2>20-Feb-2025</h2>
        </div>
        <h2 className=' mt-5 text-3xl font-semibold'>Make a YouTube video</h2>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam fuga fugit animi odio.</p>
      </div> */}
      
       
 

    </div>

    
    
  )
}

export default TaskList
