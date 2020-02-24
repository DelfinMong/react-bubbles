import React, { useState }from "react";
import { axiosWithAuth } from "../Utils.js/Index"

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
});


const handleInputChange = event => {
     setCredentials({
        ...credentials,
        [event.target.name]: event.target.value 
      });
  };

const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
        .post("/login", credentials)
        .then(res => {
            console.log("Login.js", res);
            localStorage.setItem("token", res.data.payload);
            setCredentials(credentials)
            props.history.push("/BubblePage");

        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log(err)
        });
};
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={handleSubmit}>
          <input
            className="input"
            value={ credentials.username }
            name="username"
            type="username"
            placeholder="username"
            onChange={ handleInputChange  }
          />
          <input
            className="input"
            value={ credentials.password }
            name="password"
            type="password"
            placeholder="Password"
            onChange={ handleInputChange }
          />
          <button > Login </button>
        </form>
    </>
  );
};

export default Login;
