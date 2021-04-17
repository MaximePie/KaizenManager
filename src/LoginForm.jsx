import React, {useState} from "react";
import firebase from "firebase";

export default function LoginForm() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const formStyle = {
    margin: "1rem",
    padding: "1rem",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "solid 1px",
  }

  return (
    <div style={formStyle}>
      <h2>Connexion</h2>
      <label style={{margin: "1rem"}}>
        Mail
        <input style={{marginLeft: "0.5rem"}} type="text" onChange={updateMail} value={mail}/>
      </label>
      <label style={{margin: "1rem"}}>
        Password
        <input style={{marginLeft: "0.5rem"}} type="text" onChange={updatePass} value={pass}/>
      </label>
      <button onClick={login}>S'enregistrer</button>
    </div>
  )

  function updateMail(event) {
    setMail(event.target.value);
  }

  function updatePass(event) {
    setPass(event.target.value);
  }

  function login() {
    firebase.auth().signInWithEmailAndPassword(mail, pass).then(response => {
      console.log(response);
    })
  }

}
