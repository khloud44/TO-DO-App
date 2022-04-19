export default function List({tasks , onDelete ,isDone}){
    return (
        <>
        <div className="container border my-2 rounded p-3">
            <div className="row text-center  p-2 flex-column">
                <div className="col-12 shadow text-light my-3">
                    <h2>Let's get Some Work DONE ! 😎</h2>
                </div>
                {tasks.map((task) =>(
                    <div className="col-12 d-flex justify-content-between m-2 border shadow p-2" key={task.id}>
                        <h5 className={`p-1 ${task.isDone ?"text-decoration-line-through": "" }` }>{task.name}</h5>
                        <div>
                        <button className=" btn btn-success border px-2 mx-2" onClick={()=>{isDone(task)}}>{task.isDone ? <i className="fa-solid fa-check-double"></i>:<i className="fa-solid fa-calendar-check"></i>}</button>
                        <button className="btn btn-secondary border px-2"onClick={()=>onDelete(task)}><i className="fa-solid fa-calendar-xmark"></i></button>
                        </div>
                    </div>
                ))} 
            </div>
        </div>        
        </>
    )
}