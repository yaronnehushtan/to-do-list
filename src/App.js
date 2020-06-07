import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      tasks: []
    }
  }

  addTask(task){
    this.setState ({
      tasks: [...this.state.tasks, task]
    })
    
  }

  markAsChecked(task){
    let newTasks=this.state.tasks;
    newTasks[newTasks.indexOf(task)].isCompleted=!newTasks[newTasks.indexOf(task)].isCompleted
    this.setState({
      tasks:newTasks
    })    
  }

  deleteTask(taskToDeleta){
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskToDeleta)
    })
  }
  
  render() {
    return (
      <div>
        <AddTaskForm onAdd={this.addTask.bind(this)}/>
        <ul>
          {this.state.tasks.map( (task,index) => {
            return (<Task key={index}
                          task={task}
                          onDelete={this.deleteTask.bind(this)}
                          onCheck={this.markAsChecked.bind(this)}
                          checked={task.isCompleted ? "checked" : "UnChecked"}
                    />)
          })}
        </ul>
   
        
      </div>
    );
  }
}

export default App;