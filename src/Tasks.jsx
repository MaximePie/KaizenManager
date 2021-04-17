import React from "react";
import firebase from "firebase";

import TaskCreator from "./TaskCreator.jsx";
import TasksList from "./TasksList.jsx";

export default function Tasks() {
  const TasksStyle = {
    margin: "1rem",
    padding: "1rem",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "solid 1px",
  }

  return (
      <div className="Tasks" style={TasksStyle}>
        <h2>To do list</h2>
        <TasksList/>
        <TaskCreator/>
        <button onClick={logout}>Se déconnecter</button>
      </div>
  )

  function logout() {
    firebase.auth().signOut();
  }
}
