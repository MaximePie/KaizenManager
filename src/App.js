import './App.css';
import firebase from "firebase";
import "firebase/auth";
import {FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed} from "@react-firebase/auth";
import { FirebaseDatabaseProvider }  from "@react-firebase/database";
import {firebaseConfig} from "./firebaseConfig";
import React from "react";

import RegisterForm from "./RegisterForm.jsx";
import LoginForm from "./LoginForm.jsx";
import Tasks from './Tasks.jsx';

function App() {

  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <div className="App">
          <IfFirebaseUnAuthed>
            <p>
              Bonjour, connectez-vous !
            </p>
            <RegisterForm/>
            <LoginForm/>
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            <Tasks/>
          </IfFirebaseAuthed>
        </div>
      </FirebaseAuthProvider>
    </FirebaseDatabaseProvider>
  );
}

export default App;
