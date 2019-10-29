import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import styled from 'styled-components';


const StyledHeader = styled.div`
background: blue;
`;


const data = [
  {
    task: "Clean Room",
    id: 1,
    completed: false
  },
  {
    task: "Meal Prep",
    id: 12,
    completed: false
  },
  {
    task: "Read",
    id: 123,
    completed: false
  },
  {
    task: "Complete Project",
    id: 1234,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todoItem: data
    };
  }

  addTodoItem = name => {
    const newTodo = {
      task: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoItem: [...this.state.todoItem, newTodo]
    });
  }

  toggleDone = Id => {
    this.setState({
      todoItem: this.state.todoItem.map(item => {
        if(item.id === Id) {
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  filterCompleted = completed => {
    this.setState({
      todoItem: this.state.todoItem.filter(item =>{
        if(item.completed === true){
              delete item.task           
        }
      })
    })
  };
  
  render() {
    console.log('this is rendering...App.js')
    return (
      <div className = "App">
        <StyledHeader className = "header">
          <h2>To-do by Ọlámidé</h2>
          <TodoForm addTodoItem={this.addTodoItem}/>
        </StyledHeader>
        <TodoList 
          toggleDone={this.toggleDone} 
          todoItem={this.state.todoItem} 
          filterCompleted={this.filterCompleted}
        />
      </div>
    );
  }
}

export default App;
