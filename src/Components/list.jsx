import { useEffect, useState } from "react";

export default function List({tasks}){
    const [myTasks , setMyTasks]=useState([])
    useEffect(()=>{
        console.log("Did Mout");
        console.log(myTasks);
        return ()=>{
            setMyTasks(tasks);
        }
    },[tasks]);

    //Done
    let handlerDone=(e,task)=>{
        // console.log(e.target.innerHTML);
        e.target.innerHTML="DONE";
        // console.log(e.target.innerHTML);
        // console.log(task);
        // task.color("red");
    };
    let handlerDelete=(task)=>{
        let taskIndex=tasks.indexOf(task);
        console.log(taskIndex);
        tasks.splice(taskIndex,1);
    }

    return (
        <>
        <div className="container border my-2 rounded p-3">
            <div className="row text-center justify-content-center p-2 flex-column align-items-center">
                <div className="col-12  bg-light my-3">
                    <h2>Let's get Some Work DONE ! 😎</h2>
                </div>
                {tasks.map((task,index) =>(
                    <div className="col-6 d-flex justify-content-between m-2 border shadow p-2" key={index}>
                        <h5 className="p-1">{task}</h5>
                        <button className=" btn btn-success border p-1 mx-2" onClick={(e)=>{handlerDone(e,task)}}>Comfirem</button>
                        <button className="btn btn-danger border p-1"onClick={()=>{handlerDelete(task)}}>Delete</button>
                    </div>

                ))} 
            </div>
        </div>
        
        
        </>
    )
}