import { useState } from "react";

export default function Home({ setTasks}){
    const [task , getTask]=useState("");
    const [tasksErr , setTasksErr]=useState(null);
    let handlergettask=(e)=>{
        getTask(e.target.value);
        setTasksErr(
            e.target.value.length === 0 ? 
            "Tasck Name Is Required" :
            e.target.value.length < 3 ?
            "This Must greater than '2' Character ":null
        );

    };
    let hanglersetTasks =()=>{
        if(!tasksErr){
            setTasks(
                task
            );
        }
        getTask("")
    }
    return (
        <>
        <div className="container bg-info text-light p-3 rounded">
            <div className="row d-flex flex-colunm justify-content-end align-items-end">
                <div className="col-12 text-end mt-3">
                    <h1>TO-DO App!</h1>
                </div>
                <div className="col-md-6 text-end mt-3 ">
                    <label htmlFor="task">Add New Task</label>
                </div>
                <div className="col-md-12 text-end mb-3">
                    <input type="text" className={`form-control text-info ${tasksErr ? "border-danger":""}`} id="task" value={task} onChange={(e)=>{handlergettask(e)}}/>
                    <div id="nameHelp" className="form-text text-danger">
                        {tasksErr}
                    </div>
                </div>
                <div className="col-md-12 text-end my-3">
                    <button className="btn btn-info border border-light text-light" value="add" onClick={()=>hanglersetTasks()}>Add</button>
                </div>
            </div>
        </div>
        
        </>
    )
}