import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[400px] bg-red-300 rounded-2xl p-5'>
  <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 px-6 py-4 rounded-3xl'>Failed</h3>
    <h3 className='bg-red-600 px-6 py-4 rounded-3xl'>{data.category}</h3>
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

export default FailedTask
