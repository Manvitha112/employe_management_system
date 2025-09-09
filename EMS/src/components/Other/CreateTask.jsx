import React, { useState } from 'react'

// {
//   title: "Backup",
//   description: "Ensure all critical data is backed up",
//   date: "2025-09-15",
//   category: "Maintenance",
//   active: false,
//   newTask: false,
//   completed: true,
//   failed: false,
// }

const CreateTask = () => {
  const [TaskTitle, SetTaskTitle] = useState('')
  const [TaskDesc, SetTaskDesc] = useState('')
  const [TaskDate, SetTaskDate] = useState('')
  const [TaskAssignTo, SetTaskAssignTo] = useState('')
  const [TaskCategory, SetTaskCategory] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault()

    const NewTask = {
      title: TaskTitle,
      description: TaskDesc,
      date: TaskDate,
      category: TaskCategory,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    }

    const Data = JSON.parse(localStorage.getItem('employees'))

    const UpdatedData = Data.map((emp) =>
      emp.name == TaskAssignTo
        ? {
            ...emp,
            tasks: [...emp.tasks, NewTask],
            taskCount: {
              ...emp.taskCount,
              active: emp.taskCount.active + 1,
            },
          }
        : emp
    )

    localStorage.setItem('employees', JSON.stringify(UpdatedData))

    SetTaskAssignTo('')
    SetTaskCategory('')
    SetTaskDate('')
    SetTaskDesc('')
    SetTaskTitle('')
  }

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <form
          onSubmit={(e) => {
            SubmitHandler(e)
          }}
          className="bg-gray-900 border-2 border-amber-400 p-10 rounded-2xl shadow-lg w-[500px] space-y-5 shadow-amber-500"
        >
          <h2 className="text-2xl font-semibold text-center text-amber-400 mb-6">
            Create New Task
          </h2>

          {/* Task Title */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Task Title</label>
            <input
              value={TaskTitle}
              onChange={(e) => {
                SetTaskTitle(e.target.value)
              }}
              type="text"
              placeholder="Make a UI design"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Description</label>
            <textarea
              value={TaskDesc}
              onChange={(e) => {
                SetTaskDesc(e.target.value)
              }}
              cols="30"
              rows="5"
              placeholder="Enter task details..."
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Date</label>
            <input
              value={TaskDate}
              onChange={(e) => {
                SetTaskDate(e.target.value)
              }}
              type="date"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Assign To</label>
            <input
              value={TaskAssignTo}
              onChange={(e) => {
                SetTaskAssignTo(e.target.value)
              }}
              type="text"
              placeholder="Employee Name"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium">Category</label>
            <input
              value={TaskCategory}
              onChange={(e) => {
                SetTaskCategory(e.target.value)
              }}
              type="text"
              placeholder="Design"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
