import React, { Component } from 'react';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }
    
    addTask (e){
        e.preventDefault();
        this.props.onAdd ({
            title: this.taskInput.current.value,
            isCompleted: false
            });
        e.target.reset()     
    }

    render() {
        return (
            <form onSubmit={this.addTask.bind(this)}>
                <input type="text" ref={this.taskInput} placeholder="Your task..."/>
                <button>Add</button>                
            </form>
        );
    }
}

export default AddTaskForm;