import React from 'react';

const Task = props => {
    const {task, index, list, setList} = props;

    const onClick = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    }

    const onChange = e => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    let taskStyle = {};

    if (task.isComplete) {
        taskStyle.textDecoration="line-through";
    }

    return (
        <div className="container bg-secondary">
            <h4 style={taskStyle}>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Complete?</label>
                <input onChange={onChange} type="checkbox" checked={task.isComplete}/>
                <button className="btn btn-sm btn-danger" onClick={onClick}>X</button>
            </div>
        </div>
    )
}

export default Task;