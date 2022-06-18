import { useState, useEffect } from 'react';
import DisplayTask from './components/DisplayTask.js';
import NewTask from './components/NewTask.js';
import getBlockchain from './components/Ethereum.js';
import './style.css';

function App() {
  const [tasks, setTasks] = useState(undefined);
  const [schedule, setSchedule] = useState(undefined);

  useEffect(() => {
     const init = async () => {
       const { schedule } = await getBlockchain();
       const tasks = await schedule.getTasks();
       setSchedule(schedule);
       setTasks(tasks);
     };
     init();
  }, []);

  const createTask = async (content, author) => {
    const tx = await schedule.createTask(content, author)
    await tx.wait();
    const tasks = await schedule.getTasks(); 
    setTasks(tasks);
  }

  const toggleDone = async id => {
    const tx = await schedule.toggleDone(id);
    await tx.wait();
    const tasks = await schedule.getTasks(); 
    setTasks(tasks);
  }

  return (
    <div id="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <NewTask createTask={createTask} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <DisplayTask tasks={tasks} toggleDone={toggleDone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;