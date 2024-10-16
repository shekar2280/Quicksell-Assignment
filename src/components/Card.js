// src/components/TaskCard.js
import React from 'react';
import { ReactComponent as DisplayIcon } from '../icons_FEtask/No-priority.svg'
import { ReactComponent as Backlog } from '../icons_FEtask/Backlog.svg'
import { ReactComponent as Cancelled } from '../icons_FEtask/Cancelled.svg'
import { ReactComponent as Done } from '../icons_FEtask/Done.svg'
import { ReactComponent as Inprogress } from '../icons_FEtask/in-progress.svg'
import { ReactComponent as Todo } from '../icons_FEtask/To-do.svg'



const Card = ({ task,check }) => {
  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Backlog':
        return <Backlog className="status-icon" />;
      case 'Cancelled':
        return <Cancelled className="status-icon" />;
      case 'Done':
        return <Done className="status-icon" />;
      case 'In progress':
        return <Inprogress className="status-icon" />;
      case 'Todo':
        return <Todo className="status-icon" />;
      default:
        return <DisplayIcon className="status-icon" />;
    }
  };
  return (
    <div className="task-card">
      <h1>{task.id}</h1>
      <div className='tc-cont'>
        <div>
          {}
        {check!== 'groupBy:status' && renderStatusIcon(task.status)}
        </div>
        <div>
        <p>{task.title}</p>
        </div>
        </div>
       {task.tag[0] && <div className='feature-request'>
        <DisplayIcon className="iconic" />
        <p className='frtext'>{task.tag[0]}</p>
      </div>}
      
    </div>
  );
};

export default Card;
