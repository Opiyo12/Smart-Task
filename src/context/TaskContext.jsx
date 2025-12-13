import React, { createContext, useState, useEffect } from "react";
import { getItem, setItem } from "../utils/localStorage";
//create context to act as the global storage
export const TaskContext=createContext(null);
//create provider component
export const TaskProvider=({children})=>{
const[tasks,setTask]=useState(()=>
    getItem("tasks", []));
//setting the persisted task to render
 useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);

const addTask=()=>{

}
return(
    <TaskContext.Provider
    value={{tasks, addTask,setTask}}
    >
     {children}
    </TaskContext.Provider>
);

};