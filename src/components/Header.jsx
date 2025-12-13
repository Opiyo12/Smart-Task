import React, { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"



const Header=({isDark, toggleDarMode})=>{

    return(
   
   <div className="bg-gray-100 dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-blue-600">
    Smart<span className="text-orange-500">Task</span>
  </h1>

  <div className="flex items-center gap-3">
    <input
      type="text"
      placeholder="Search tasks..."
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
      px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={toggleDarMode}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
      text-white shadow-sm active:scale-95 transition"
    >
      {isDark ? <MdDarkMode /> : <MdLightMode />}
      {isDark ? "Dark" : "Light"}
    </button>
  </div>
</div>

    )
}
export default Header