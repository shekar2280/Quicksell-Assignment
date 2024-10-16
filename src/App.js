import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import Filter from './components/Filter';
import './App.css'
function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTasks(result.data.tickets);  
      setUsers(result.data.users); 
    };
    fetchData();
  }, []);

  const processTasks = () => {
    let processedTasks = [...tasks];
    const [type, value] = filterOption.split(':');

    // Grouping Logic
    if (type === 'groupBy') {
      // console.log(value); 
      if (value === 'user') {
        processedTasks = groupByUser(processedTasks);
      } else {
        processedTasks = groupBy(processedTasks, value);
      }
    }

    // Ordering Logic
    if (type === 'orderBy') {
      if (value === 'priority') {
        processedTasks.sort((a, b) => b.priority - a.priority);
        processedTasks = groupBy(processedTasks, value);
      } else if (value === 'title') {
        processedTasks.sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return processedTasks;
  };

  const groupByUser = (tasks) => {
    return tasks.reduce((acc, task) => {
   
      const user = users.find((u) => u.id === task.userId);
      const userName = user ? user.name : 'Unknown User';

      if (!acc[userName]) {
        acc[userName] = [];
      }
      acc[userName].push(task);
      return acc;
    }, {});
  };

  const groupBy = (arr, key) => {

    if(key==='status')
    {
      arr=[...arr,{id:"",
        priority:"",
        status:"Done",
        tag:[],
        title:"",
        userId:"",
  
        },{id:"",
          priority:"",
          status:"Cancelled",
          tag:[],
          title:"",
          userId:"",
    
          }]
    }
    
    return arr.reduce((acc, item) => {
 
      const groupKey = item[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    }, {});
  };

  return (
    <div className="App">
      <div className="nav">
      <Filter setFilterOption={setFilterOption} />
      </div>
      <div className="tb">
      <KanbanBoard tasks={processTasks()} filterOption={filterOption}/>
      </div>
    </div>
  );
}

export default App;
