import React from 'react'
import { FaFilter } from 'react-icons/fa'


const AddTaskForm = () => {
  return (
   <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
  <div className="flex items-center gap-2 mb-4">
    <input
      type="text"
      placeholder="Enter your task..."
      className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200
        px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow">
      Add
    </button>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
      <FaFilter />
      <span>Filter</span>
    </div>

    <select
      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 
      rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  </div>
</div>
     

  )
}

export default AddTaskForm