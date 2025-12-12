import React from 'react'

const TaskItem = () => {
  return (
   <div className="mt-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Task List</h2>

    <div className="flex gap-5">
      <div className="flex gap-1 items-center">
        <span className="text-orange-500 font-semibold">Active:</span>
        <span className="text-orange-500 font-bold">0</span>
      </div>

      <div className="flex gap-1 items-center">
        <span className="text-green-500 font-semibold">Completed:</span>
        <span className="text-green-500 font-bold">0</span>
      </div>
    </div>
  </div>

  {/* Task Item Card */}
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-3 mb-2">
    <input type="checkbox" className="h-5 w-5" />
    <span className="text-gray-800 dark:text-gray-200 font-medium">Playing football</span>
  </div>
    
</div>  
  )
}

export default TaskItem