import { useState } from 'react';
import './App.css';


import Home from "./Components/home";
import List from './Components/list'
function App() {
  const [taskList ,setTastList] = useState([])
  const handlersetTasks=(task)=>{
      console.log(taskList.length)
      setTastList([...taskList,task])
      console.log(taskList);
    }
    const handlerDelete=(task)=>{  
    let taskIndex=taskList.indexOf(task);
    taskList.splice(taskIndex,1);
    setTastList( [...taskList]);
  }

      //Done
  let handlerDone=(task)=>{
    console.log(task);
    let taskIndex=taskList.indexOf(task);
    taskList[taskIndex] ={...task,isDone:!task.isDone}
    setTastList([...taskList]);
    console.log(task);
  }

  return (
    <div className="container App my-5  p-3 shadow w-50 ">
    <h1 className='text-light'>TO-DO App!</h1>  
    <Home  setTasks={handlersetTasks}
    taskLength={taskList.length}
    />
    <List 
      tasks= {taskList}
      onDelete={handlerDelete}
      isDone={handlerDone}
      
    />
    </div>
  );
}

export default App;
