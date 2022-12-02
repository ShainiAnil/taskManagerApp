import React from 'react'
import TaskColumn from './TaskColumn'

const TaskBoard = ({pending,ongoing,completed,taskData, setTaskData}) => {
  //console.log(taskData);
 // console.log(Object.keys(taskData))
   return (
    <div className="taskBoard">
      {taskData?
      Object.entries(taskData).map(([dataKey, itemValue]) => (
          <TaskColumn
            status={dataKey}
            statusItems={itemValue}
            setTaskData={setTaskData}
            key={dataKey}
            taskData = {taskData}
          />
        )):""} 
      {/* { Object.entries(taskData).map((task,index)=>{ console.log(task)
        return <TaskColumn key={index} {...task} taskData={taskData} setTaskData={setTaskData}/>
      })}   */}
    </div>
  )
}

export default TaskBoard