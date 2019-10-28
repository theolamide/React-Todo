import React from "react";

class TodoList  extends React.Component {
    constructor() {
        super();
        this.state ={
            newTodo: ""
        };
    }


    render(){

        return(

            <form>
                <input
                    type="text"
                    name="item"
                />
                <button>Add ToDo</button>
            </form>
            
        );
    }
}

export default TodoList;