import React from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Header = ({ isDark, toggleDarMode }) => {
  return (
   <header className="bg-gray-100 dark:bg-gray-800 shadow-md px-4 py-4">
  <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">

    {/* Logo */}
    <h1 className="text-2xl font-bold text-blue-600 flex-shrink-0">
      Smart<span className="text-orange-500">Task</span>
    </h1>

    {/* Controls */}
    <div className="flex flex-1 flex-wrap gap-2 min-w-0">

      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        className="flex-1 min-w-0 bg-gray-200 dark:bg-gray-700 
        text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Toggle */}
      <button
        onClick={toggleDarMode}
        className="flex items-center gap-2 px-3 py-2 rounded-lg 
        bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
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
