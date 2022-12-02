import React from "react";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

const TaskColumn = ({taskData,setTaskData ,status,statusItems}) => {
  let count = statusItems.length;

  return (
    <div className="taskColumn">
      <TaskHeader status={status} count={count}/> 
      <TaskList taskData={taskData} setTaskData={setTaskData} statusItems={statusItems} status={status}/> 
    </div>
  );
};

export default TaskColumn;
