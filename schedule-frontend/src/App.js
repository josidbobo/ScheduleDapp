import { useState, useEffect } from 'react';
//import DisplayTask from './components/DisplayTask.js';
import NewTask from './components/NewTask.js';
import getBlockchain from './components/Ethereum.js';
import './style.css';
import TaskList from './components/DisplayTask.js';
import Schedule from './artifacts/contracts/Schedule.sol/Schedule.json';
import { ethers } from 'ethers' ;


function App() {
  const [tasks, setTasks] = useState(undefined);
  const [schedule, setSchedule] = useState(undefined);

  useEffect(() => {
     const init = async () => {
       const { schedule } = await getBlockchain();
       const tasks = await schedule.getTask();
       setSchedule(schedule);
       setTasks(tasks);
     };
     init();
  }, []);

  const createTask = async (content, author) => {
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const schedule = new ethers.Contract('0x57B25FAB2CE53935812FBe022D5c30b445BA326B', Schedule.abi, signer);
  
    const tx = await schedule.createTask(content, author);
    tx.wait();
    const tasks = await schedule.getTask(); 
    setTasks(tasks);
    console.log('WEB3 function: created tasks');} 
    catch(e){
      alert(e.toString());
    }
  }

  const toggleDone = async id => {
    try{
    const tx = await schedule.toggleDone(id);
    await tx.wait();
    const tasks = await schedule.getTask(); 
    setTasks(tasks);
    }catch(e){
      console.log(e.message);
    }
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
            <TaskList tasks={tasks} toggleDone={toggleDone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;