import React from 'react';

import Task from './Task';

const Tasks = (props) => {
    const { taskeds, handleTaskClick, handleTasklDeletion } = props;


    return (  
        <div>
            {taskeds.map((taskMap, index) => (    
                <Task key={index} 
                    task={taskMap} 
                    handleTaskClick={handleTaskClick}
                    handleTasklDeletion={handleTasklDeletion}
                    />
            ))}
        </div>
    );
}
 
export default Tasks
