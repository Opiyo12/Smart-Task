import React from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Header = ({ isDark, toggleDarMode }) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-md px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 text-center sm:text-left">
          Smart<span className="text-orange-500">Task</span>
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">

          {/* Search */}
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full sm:w-64 bg-gray-200 dark:bg-gray-700 
            text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Theme Toggle */}
          <button
            onClick={toggleDarMode}
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg 
            bg-blue-600 hover:bg-blue-700 text-white shadow-sm 
            active:scale-95 transition"
          >
            {isDark ? <MdDarkMode /> : <MdLightMode />}
            <span className="hidden sm:inline">
              {isDark ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
