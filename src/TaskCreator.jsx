import React from "react";
import {FirebaseDatabaseMutation} from "@react-firebase/database";
import firebase from "firebase";

import TaskForm from "./TaskForm.jsx";

export default function TaskCreator() {

  const user = firebase.auth().currentUser;
  const storagePath = `users/${user.uid}/tasks/`;

  return (
    <FirebaseDatabaseMutation path={storagePath} type="push">
      <TaskForm/>
    </FirebaseDatabaseMutation>
  );

}
