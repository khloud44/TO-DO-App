import './App.css';
import Home from "./Components/home";
import List from './Components/list'
function App() {
  const taskList=[];
  let handlersetTasks=(value)=>{
      taskList.push(value);
      // console.log(taskList);
      // console.log(value);
  }
  return (
    <div className="container my-5 border p-3 shadow ">
    <Home  setTasks={handlersetTasks} />
    <List 
      tasks= {taskList}
    />
    </div>
  );
}

export default App;
