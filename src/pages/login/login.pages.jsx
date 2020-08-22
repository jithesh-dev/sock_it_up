import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./login.style.scss";
import { TextField } from "@material-ui/core";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase";
import Signup from "../../components/Signup/Signup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        setEmail("");
        setPassword("");
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login container">
      <div className="login__leftside">
        <h1 className="login__title">HAVE AN ACCOUNT? LOGIN</h1>
        <p className="login__text">Sign in with your email and password</p>

        <form
          className="login__signinForm"
          noValidate
          autoComplete="off"
          onSubmit={(e) => signIn(e)}
        >
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
          />
          <TextField
            label="Password"
            type="password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn login__signinBtn">
            Login
          </button>
        </form>
      </div>

      <div className="login__rightside">
        <Signup />
      </div>
    </div>
  );
}

export default Login;
