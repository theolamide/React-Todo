import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';





const data = [
  {
    todo: "Clean Room",
    id: Date.now(),
    completed: false
  },
  {
    todo: "Meal Prep",
    id: Date.now(),
    completed: false
  },
  {
    todo: "Read",
    id: Date.now(),
    completed: false
  },
  {
    todo: "Complete Project",
    id: Date.now(),
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
  
  render() {
    console.log('this is rendering...App.js')
    return (
      <div className = "App">
        <div className = "header">
          <h2>To-do by Ọlámidé</h2>
          <TodoForm />
        </div>
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
