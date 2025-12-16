import React, { useContext, useState } from "react"
import { FaFilter } from "react-icons/fa"
import { TaskContext } from "../context/TaskContext"

const AddTaskForm = () => {
  const { tasks, setTask, filteredStatus, setFilteredStatus } =
    useContext(TaskContext)

  const [taskInputText, setTaskInputText] = useState("")

  const saveTaskButton = () => {
    if (taskInputText.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: taskInputText,
      completed: false,
      CreatedAt: new Date().toLocaleString(),
    }

    setTask([...tasks, newTask])
    setTaskInputText("")
  }

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 p-4 sm:p-6 
    rounded-xl shadow max-w-3xl mx-auto overflow-hidden">

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4 min-w-0">
        <input
          value={taskInputText}
          onChange={(e) => setTaskInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveTaskButton()}
          type="text"
          placeholder="Enter your task..."
          className="w-full min-w-0 bg-gray-100 dark:bg-gray-700 
          text-gray-800 dark:text-gray-200 px-4 py-3 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={saveTaskButton}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 
          text-white px-6 py-3 rounded-lg font-semibold shadow
          whitespace-nowrap"
        >
          Add Task
        </button>
      </div>

      {/* Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center 
      justify-between gap-3 min-w-0">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <FaFilter />
          <span>Filter</span>
        </div>

        <select
          value={filteredStatus}
          onChange={(e) => setFilteredStatus(e.target.value)}
          className="w-full sm:w-40 bg-gray-100 dark:bg-gray-700 
          text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg
          focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  )
}

export default AddTaskForm
