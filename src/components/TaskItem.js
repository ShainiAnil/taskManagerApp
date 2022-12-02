import React from "react";

const TaskItem = ({
  id,
  title,
  description,
  status,
  setTaskData
}) => {
      

  const clickHandler = (id,title,description,status) => {
    setTaskData((prev) => {
      let pendingArray = [];
      let ongoingArray = [];
      let obj ={id,title,description}

      if (status === "pending") {
        pendingArray = prev.pending.filter(item => item.id !== id);
        return {
          pending: pendingArray,
          ongoing: [...prev.ongoing, obj],
          completed: prev.completed
        }
      }
      if (status === "ongoing") {
        ongoingArray = prev.ongoing.filter(item => item.id !== id);
        return {
          pending: prev.pending,
          ongoing: ongoingArray,
          completed: [...prev.completed, obj]
        }
      }
    })
  }
    

  return (
    <div className="taskItem">
      <div className="itemHeader">
        <h3>{title}</h3>
        {status !== "completed" && (
          <button className="taskMover" onClick={() => clickHandler(id,title,description,status)}>
            Move
          </button>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TaskItem;
