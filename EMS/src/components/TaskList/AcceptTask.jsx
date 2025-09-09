import React from 'react'

// {
//         title: "Prototype Update",
//         description: "Update the interactive prototype with new feedback",
//         date: "2025-09-10",
//         category: "Development",
//         active: false,
//         newTask: false,
//         completed: false,
//         failed: true,
//       },
const AcceptTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[400px] bg-blue-300 rounded-2xl p-5'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-green-600 px-6 py-4 rounded-3xl'>Accepted</h3>
    <h3 className='bg-green-600 px-6 py-4 rounded-3xl'>{data.category}</h3>
    <h2 className="px-4 py-1 bg-gray-700 text-white rounded-full text-xs font-medium">
  {data.date}
</h2>

  </div>
  <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
  <p className='text-2xl mt-5'>
    {data.description}
  </p>
</div>
    </div>
  )
}

export default AcceptTask
