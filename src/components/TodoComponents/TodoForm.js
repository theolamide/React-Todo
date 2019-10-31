import React from "react";

class TodoForm  extends React.Component {
    constructor() {
        super();
        this.state ={
            newTodo: ""
        };
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("this works!");
        this.props.addTodoItem(this.state.newTodo);
        this.setState({newTodo:""});
    };


    render(){
            console.log("rendering from todofrom")
            console.log(this.state.newTodo)
        return(

            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add ToDo</button>
            </form>
            
        );
    }
}

export default TodoForm;