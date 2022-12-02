import React from "react";
import TaskBoard from "./TaskBoard";

const Main = ({taskData,setTaskData}) => {
  return (
    <div className="appMain">
      <TaskBoard taskData={taskData} setTaskData = {setTaskData} />
    </div>
  );
};

export default Main;
