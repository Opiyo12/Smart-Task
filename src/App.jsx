import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { getItem, setItem } from './utils/localStorage';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';



function App() {

 const[isDark, setIsDark]=useState(()=>getItem("theme", false))
 //persistence to local storage
 useEffect(()=>{
    setItem("theme", isDark)  
 },[isDark]);
 //function for toggling darkmode
 const toggleDarMode=()=>setIsDark((prev)=>!prev)
  return (
   <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
  <div className="bg-gray-200 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <Header isDark={isDark} toggleDarMode={toggleDarMode} />

    <div className="max-w-3xl mx-auto px-4">
      <AddTaskForm />

      <TaskItem />
    </div>
  </div>
</div>
  );
}

export default App;
