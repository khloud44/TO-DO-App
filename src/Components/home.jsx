import { useState } from "react";

export default function Home({ setTasks , taskLength}){
    const [task , getTask]=useState("");
    const [tasksErr , setTasksErr]=useState(null);
    let handlergettask=(e)=>{
        getTask(e.target.value);
        setTasksErr(
            e.target.value.length === 0 ? 
            "Task Name Is Required" :
            e.target.value.length < 3 ?
            "This Must greater than '2' Character ":null
        );

    };
    let hanglersetTasks =()=>{
        if(!tasksErr && task !=""){
            console.log(taskLength);
            setTasks(
                {id:taskLength+1 , name:task, isDone:false}
            );
        }else if(task ==""){
            setTasksErr("Task Name Is Required");
        }
        getTask("")
    }
    return (
        <>
        <div className="container  text-light p-3 rounded">
            <div className="row d-flex flex-colunm justify-content-end align-items-end">
                <div className="col-12 text-end mt-3">
                    
                </div>
                <div className="col-md-6 text-end mt-3 ">
                    <label htmlFor="task">Add New Task</label>
                </div>
                <div className="col-md-12 text-end mb-3">
                    <input type="text" className={`form-control text-info ${tasksErr ? "border-danger":""}`} id="task" value={task} onChange={(e)=>{handlergettask(e)}}/>
                    <div id="nameHelp" className="form-text text-info">
                        {tasksErr}
                    </div>
                </div>
                <div className="col-md-12 text-end ">
                    <button className="btn btn-success border border-light" value="add" onClick={()=>hanglersetTasks()}><i className="fa-solid fa-calendar-plus"></i></button>
                </div>
            </div>
        </div>
        
        </>
    )
}
