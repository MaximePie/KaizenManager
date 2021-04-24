import React, {useState} from "react";

export default  function TaskForm({runMutation}) {

  const [taskWording, setTaskWording] = useState('');
  const [objective, setObjective] = useState('');

  return (
    <div style={formStyle}>
      <h3>Nouvelle tâche</h3>
      <label htmlFor="" style={{
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <span style={{marginBottom: "0.25rem"}}>
          Tâche
        </span>
        <input type="text" onChange={(event) => setTaskWording(event.target.value)} value={taskWording}/>
      </label>
      <label htmlFor="" style={{
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <span style={{marginBottom: "0.25rem"}}>
          Objectif
        </span>
        <input type="text" onChange={(event) => setObjective(event.target.value)} value={objective}/>
      </label>
      <button onClick={createTask}>Créer</button>
    </div>
  );

  function createTask() {
    runMutation({
      wording: taskWording,
      objective,
      currentQuantity: 0,
      lastSuccess: null,
    })
      .then(response => {
        setTaskWording('');
        setObjective('');
      });
  }
}

const formStyle = {
  borderRadius: "4px",
  margin: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}
