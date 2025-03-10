// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {


    return(
        <div className = "Todo List">
            {props.todoItem.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleDone={props.toggleDone}
                />
            ))}
        <button 
            className="clear-btn"
            onClick={props.filterCompleted}>
                Clear Done Items
        </button>
        </div>
    );

} 
        


export default TodoList;