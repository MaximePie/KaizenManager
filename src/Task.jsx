import React, {useState} from "react";
import moment from "moment";

export default function Task({task: initialTask, runMutation}) {
  const [updatedTask, setUpdatedTask] = useState(initialTask);
  // eslint-disable-next-line no-unused-vars
  const [taskId, {currentQuantity, wording, objective}] = updatedTask;

  return (
    <div className="Task">
      <span>
        {wording}
      </span>
      <span>
        {currentQuantity} / {objective}
      </span>
      <button onClick={incrementTask}>+</button>
      <button onClick={finishTask}>OK</button>
    </div>
  )

  function incrementTask() {
    console.log(currentQuantity);
    console.log(objective);
    if (currentQuantity + 1 === objective) {
      finishTask();
    }
    else {
      runMutation({
        ...updatedTask[1],
        currentQuantity: parseInt(currentQuantity) + 1,
      }).then((response) => {
        setUpdatedTask([null, response.value]);
      })
    }

  }


  function finishTask() {
    const date = moment().format('L');
    const updatedObjectiveValue = objective !== undefined ? parseInt(objective) + 1 : 1;
    runMutation({
      wording,
      currentQuantity: 0,
      objective: updatedObjectiveValue,
      lastSuccess: date,
    }).then(response => {
      // // Updating the current task to refresh the display
      // const currentTask = [];
      // currentTask.push(updatedTask[0]);
      // currentTask.push(response.value);
      // setUpdatedTask(currentTask);
    });
  }
}
