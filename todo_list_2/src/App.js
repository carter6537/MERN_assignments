import './App.css';
import Input from './components/Input';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App container">
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list}/>
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
