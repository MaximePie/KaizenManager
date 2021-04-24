import React from "react";
import {FirebaseDatabaseMutation, FirebaseDatabaseNode} from "@react-firebase/database";
import firebase from "firebase";

import Task from "./Task.jsx";
import * as moment from "moment";

export default function TasksList() {
  const user = firebase.auth().currentUser;
  const accessUrl = `users/${user.uid}/tasks`;
  return (
    <FirebaseDatabaseNode path={accessUrl}>
      {({value, isLoading}) => {
        if (value) {
          const tasks = Object.entries(value).filter(task => {
            const lastSuccessDate = task[1].lastSuccess;
            const hasBeenCompletedToday = moment(lastSuccessDate).isSame(moment(), 'd');
            return (!lastSuccessDate || !hasBeenCompletedToday) && task;
          });

          /**
           * Restore the currentQuantities for all tasks to 0
           */
          function resetCurrentQuantities() {

            tasks.map(task => {
              const path = `${accessUrl}/${task[0]}`;
              firebase.database().ref(path).set({
                ...task[1],
                currentQuantity: 0,
              })
                .then(() => window.location.reload(false))
            })
          }

          return (
            <div className="TasksList">
              <button onClick={resetCurrentQuantities}>Reset</button>
              {React.Children.toArray(tasks.map(task => {
                const updatePath = `/users/${user.uid}/tasks/${task[0]}`;
                return (
                  <FirebaseDatabaseMutation path={updatePath} type="set">
                    {({runMutation}) => (
                      <Task key={task[0]} task={task} runMutation={runMutation}/>
                    )}
                  </FirebaseDatabaseMutation>
                )
              }))}
            </div>
          )
        } else if (isLoading) {
          return (
            <p>Chargement ... Veuillez patienter, petit galopin</p>
          )
        } else {
          return null
        }
      }}
    </FirebaseDatabaseNode>
  )
}
