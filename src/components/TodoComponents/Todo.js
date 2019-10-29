import React from "react";

const Todo = props => {
    console.log(props.item.id)
   return (
        <div className={`item${props.item.completed ? " Done": ""} `}
        onClick={()=>props.toggleDone(props.item.id)}>
            
            <p>{props.item.task}</p>
            
        </div>
    )
}

export default Todo;
