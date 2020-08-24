import React, { useState } from "react";
import "./Signup.scss";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { TextField } from "@material-ui/core";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupFormStatus, setSignupFormStatus] = useState("");
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const displayName = result.user.displayName;
        createUserProfileDocument(result.user, { displayName });
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  function signUpEmailPassword() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const displayName = name;
        createUserProfileDocument(result.user, { displayName });
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        setEmail("");
        setPassword("");
        setName("");
        history.push("/");
      })
      .catch((err) => alert(err.message));
  }
  const createAccountButtonHandle = (e) => {
    e.preventDefault();
    if (!signupFormStatus) {
      setSignupFormStatus("show");
    } else {
      if (password === confirmPassword) signUpEmailPassword();
      else alert("Passwords dont match");
    }
  };

  return (
    <div className="signup">
      <h1 className="signup__title">NEW CUSTOMERS</h1>
      <p className="signup__text">
        Creating an account is easy, and you'll enjoy the benefits of faster
        checkout, order history, a wish list and more.
      </p>
      <div className={`signup__signupForm ${signupFormStatus}`}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup__input"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup__input"
        />
        <TextField
          label="Password"
          type="password"
          className="signup__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          className="signup__input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button
          onClick={(e) => createAccountButtonHandle(e)}
          className="btn  signup__signupBtn"
        >
          Create An Account
        </button>
        <button onClick={signInWithGoogle} className="btn signup__googleBtn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
