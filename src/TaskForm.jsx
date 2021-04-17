import React, {useState} from "react";

export default  function TaskForm({runMutation}) {

  const [taskWording, setTaskWording] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');

  return (
    <div style={formStyle}>
      <h3>Créez votre tâche ici</h3>
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
          Quantité
        </span>
        <input type="text" onChange={(event) => setCurrentQuantity(event.target.value)} value={currentQuantity}/>
      </label>
      <button onClick={createTask}>Créer une tâche</button>
    </div>
  );

  function createTask() {
    runMutation({
      wording: taskWording,
      currentQuantity,
      lastSuccess: null,
    })
      .then(response => console.log(response));
  }
}

const formStyle = {
  border: "solid",
  margin: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}