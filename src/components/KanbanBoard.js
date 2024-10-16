import React from 'react';
import Card from './Card';
import { ReactComponent as AddIcon } from '../icons_FEtask/add.svg';
import { ReactComponent as DisplayIcon } from '../icons_FEtask/No-priority.svg'
import { ReactComponent as Backlog } from '../icons_FEtask/Backlog.svg'
import { ReactComponent as Cancelled } from '../icons_FEtask/Cancelled.svg'
import { ReactComponent as Done } from '../icons_FEtask/Done.svg'
import { ReactComponent as Inprogress } from '../icons_FEtask/in-progress.svg'
import { ReactComponent as Todo } from '../icons_FEtask/To-do.svg'

import { ReactComponent as Hp } from '../icons_FEtask/High Priority.svg'
import { ReactComponent as Lp } from '../icons_FEtask/Low Priority.svg'
import { ReactComponent as Mp } from '../icons_FEtask/Medium Priority.svg'
import { ReactComponent as Up } from '../icons_FEtask/Urgent Priority.svg'
import { ReactComponent as Np } from '../icons_FEtask/No-priority.svg'


const KanbanBoard = ({ tasks, filterOption }) => {

  if (typeof tasks === 'object' && !Array.isArray(tasks)) {
  
    return (
      <div className="task-board">
        {Object.keys(tasks).map((key) => (
          <div key={key} className="task-group">
            <div className="subhead">
              <div className="part1">
                {filterOption==='groupBy:status' && key==='In progress' && <Inprogress className="status-icon" />}
                {filterOption==='groupBy:status' && key==='Backlog' && <Backlog className="status-icon" />}
                {filterOption==='groupBy:status' && key==='Cancelled' && <Cancelled className="status-icon" />}
                {filterOption==='groupBy:status' && key==='Done' && <Done className="status-icon" />}
                {filterOption==='groupBy:status' && key==='Todo' && <Todo className="status-icon" />}

                {filterOption=='groupBy:priority' && key==0 && <div className='pl'><Np className="status-icon"/>No Priority</div>}
                {filterOption=='groupBy:priority'&& key==1 && <div className='pl'><Lp className="status-icon" />Low</div>}
                {filterOption=='groupBy:priority'&& key==2 && <div className='pl'><Mp className="status-icon" />Medium</div>}
                {filterOption=='groupBy:priority' && key==3 && <div className='pl'><Hp className="status-icon" />High</div>}
                {filterOption=='groupBy:priority'&& key==4 && <div className='pl'><Up className="status-icon" />Urgent</div>}

                {filterOption=='orderBy:priority' && key==0 && <div className='pl'><Np className="status-icon"/>No Priority</div>}
                {filterOption=='orderBy:priority'&& key==1 && <div className='pl'><Lp className="status-icon" />Low</div>}
                {filterOption=='orderBy:priority'&& key==2 && <div className='pl'><Mp className="status-icon" />Medium</div>}
                {filterOption=='orderBy:priority' && key==3 && <div className='pl'><Hp className="status-icon" />High</div>}
                {filterOption=='orderBy:priority'&& key==4 && <div className='pl'><Up className="status-icon" />Urgent</div>}


  
                <p>{filterOption!=='groupBy:priority' && filterOption!=='orderBy:priority' && key}</p>
                {<p className="pc">{tasks[key][0].id!==''?tasks[key].length:0}</p>}
              </div>
              <div className="part2">
                <AddIcon className="icon" />
                <DisplayIcon className="icon" />
              </div>
            </div>
           <div className="ti">
           {tasks[key].map((task) => (
              <div key={task.id} className="task-item">
                
                {task.id!=="" && <Card task={task} check={filterOption}/>}
              </div>
            ))}
           </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="task-board">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <Card task={task} />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
