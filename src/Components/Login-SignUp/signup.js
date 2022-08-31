/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "../../index.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  function myFunction() {
    let timeout = setTimeout(submitHandler, 1000);
  }
  const submitHandler = async () => {
    console.warn(name, email, password, username, passwordConfirm);
    let data = { name, email, password, username, passwordConfirm };
    let result = await fetch(
      "https://massab-hammad.herokuapp.com/api1/users/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // .then((result) => {
    //   result.json().then((data) => {
    //     console.warn("response", data);
    //   });
    // });
    result = await result.json();
    console.warn("Result", result);

    localStorage.setItem("user", JSON.stringify(result));
    navigate("/profile");

    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <div className="signup-container  ">
      <h2>Sign Up Page!</h2>
      <div className="input-fields">
        <input
          className="form-control-signup"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>{" "}
        <br />
        <br />
        <input
          className="form-control-signup"
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>{" "}
        <br />
        <br />
        <input
          className="form-control-signup"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <input
          className="form-control-signup"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <input
          className="form-control-signup"
          type="password"
          name="passwordConfirm"
          placeholder="ConfirmPassword"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button className="btn btn-primary" type="submit" onClick={myFunction}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Signup;
