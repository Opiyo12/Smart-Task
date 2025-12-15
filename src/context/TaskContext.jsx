import React, { createContext, useState, useEffect } from "react";
import { getItem, setItem } from "../utils/localStorage";

//create context to act as the global storage
export const TaskContext=createContext(null);
//create provider component
export const TaskProvider=({children})=>{
const[tasks,setTask]=useState(()=>
    getItem("tasks", []));
//filtered tasks state
const[filteredStatus, setFilteredStatus]=React.useState(tasks); 
//deleting a specific task
const deleteTask=(id)=>{
  setTask((prev)=>prev.filter((task)=>task.id !==id));
}
//setting the persisted task to render
 useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

return(
    <TaskContext.Provider
    value={{tasks,setTask, deleteTask, filteredStatus, setFilteredStatus}}
    > 
     {children}
    </TaskContext.Provider>
);

};