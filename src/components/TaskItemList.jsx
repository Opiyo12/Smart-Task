import React, { useContext } from 'react'
import { MdEdit, MdDelete  } from 'react-icons/md'
import { TaskContext } from '../context/TaskContext'

const TaskItemList = () => {
const{tasks, setTask}=useContext(TaskContext);
//function for checking completed status
const completedCheckBtn=(id)=>{
  setTask(prev=>
    prev.map((task)=>
      task.id===id ? {...task, completed: !task.completed} : task
    )
  );
}

 
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-blue-800 dark:text-gray-100">Task item list</h2>

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
    
        {
          tasks.map((task)=>(
        <div key={task.id}  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center justify-between gap-3 mb-2 ">
        <div className="flex items-center gap-3 justify-center ">
          <input
          className='w-5 h-5'
          type="checkbox"
          checked={task.completed}
          onChange={()=>completedCheckBtn(task.id)}
         
        />
          <div>
              <h3
               className={`text-gray-700 dark:text-gray-200 font-medium
                 ${task.completed? "line-through text-gray-500 font-bold":"text-gray-700  dark:text-gray-200"} `}>
               {task.text}
                </h3>
            <p className="text-xs text-gray-500 font-medium  dark:text-gray-400"></p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white rounded-lg text-sm">
            <MdEdit/>
            Edit
          </button>
          <button className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 active:bg-red-600 text-white rounded-lg text-sm">
            <MdDelete />
            Delete
          </button>
        </div>
      </div> 
          ))
        }
     
      
    </div>
  )
}

export default TaskItemList