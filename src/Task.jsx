import React, {useState} from "react";
import moment from "moment";

export default function Task({task: initialTask, runMutation}) {
  const [updatedTask, setUpdatedTask] = useState(initialTask);
  // eslint-disable-next-line no-unused-vars
  const [taskId, {currentQuantity, wording}] = updatedTask;

  return (
    <div className="Task">
      <span>
        {wording}
      </span>
      <span>
            {currentQuantity}
      </span>
      <button onClick={finishTask}>OK</button>
    </div>
  )


  function finishTask() {
    console.log(currentQuantity);
    const date = moment().format('L');
    runMutation({
      wording,
      currentQuantity: parseInt(currentQuantity) + 1,
      lastSuccess: date,
    }).then(response => {
      // Updating the current task to refresh the display
      const currentTask = [];
      currentTask.push(updatedTask[0]);
      currentTask.push(response.value);
      setUpdatedTask(currentTask);
    });
  }
}
