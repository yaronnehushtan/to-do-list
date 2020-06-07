import React, { Component } from 'react';
import './Task.css'


class Task extends Component {

    constructor(props) {
        super(props);
        
    }
    
    // delete(e){
    //     this.props.onDelete (this.props.task);
    // }

    render() {
        return (
            <li className={this.props.checked}>
                {this.props.task.title}
                <button onClick={this.props.onDelete.bind(this,this.props.task)}>Delete</button>
                <button onClick={this.props.onCheck.bind(this,this.props.task)}>Mark as complete</button>
            </li> 
        );
    }
}

export default Task;