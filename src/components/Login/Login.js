import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { ValidatorForm } from "react-material-ui-form-validator";
import TextValidator from "react-material-ui-form-validator/lib/TextValidator";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  function signIn(e) {
    signInWithEmailAndPassword(auth, email, values.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }
  function Register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, values.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }

  function RegisterWithGoogle() {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        console.log(auth, email, values.password);
      })
      .catch((error) => alert(error.message));
  }

  function handleChange(event) {
    setValues({ ...values, password: event.target.value });
  }

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="amazon logo"
      />
      <div className="login__container">
        <h1>Sign-in with App</h1>
        <ValidatorForm
          onSubmit={(event) => {
            event.preventDefault();
            signIn(email, values.password);
          }}>
          <TextValidator
            label="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
            fullWidth
          />
          <br></br>
          <TextValidator
            label="Password"
            onChange={handleChange}
            name="password"
            type="password"
            validators={["required"]}
            errorMessages={["this field is required"]}
            value={values.password}
            fullWidth
          />

          <br></br>
          <Button
            type="Submit"
            style={{
              textTransform: "capitalize",
              background: " #ffd814",
              borderRadius: "5px",
              width: "100%",
              height: "30px",
              border: "1px solid",
              marginTop: "10px",
              borderColor: "#a88734 #9c7e31 #846a29",
              color: "black",
              cursor: " pointer",
            }}>
            Login
          </Button>
        </ValidatorForm>
        <p style={{ fontStyle: "italic" }}>
          If you are new here please press enter email address and password to
          Create your Amaon Account..{" "}
        </p>
        <button className="login__registerButton" onClick={Register}>
          Create your Amazon Account{" "}
        </button>
        <br />
        <p style={{ fontStyle: "italic", paddingLeft: "7em" }}>
          Or Sign in with
        </p>
        <br />
        <div style={{ display: "block", paddingLeft: "0.5em" }}>
          {" "}
          <GoogleButton onClick={RegisterWithGoogle} />
        </div>
      </div>
    </div>
  );
}

export default Login;
