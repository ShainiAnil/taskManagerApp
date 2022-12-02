import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({taskData,status,setTaskData,statusItems}) => {
    
  return (<div className="taskList">
             { statusItems?.map(item=>{
                return <TaskItem key={item.id} {...item} status={status} setTaskData={setTaskData} />
            })} 
            </div>
        )}

export default TaskList