import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import "./login.css";
function Login({ setShow, setShowToast, notify }) {
  const [showLogin, setShowLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const login = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let result = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      let data = await result.json();
      if (data.success) {
        // setShowToast(true);
        () => notify();
        localStorage.setItem("token", data.token);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      alert("Someting wrong happend");
    }
  };
  const register = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let result = await fetch("http://localhost:4000/api/user/register", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      let data = await result.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        setShow(false);
      }
    } catch (error) {
      console.log(error);
      alert("Someting wrong happend");
    }
  };
  return showLogin ? (
    <div className="flex">
      <form onSubmit={login}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" write your email here"
        />
        <input
          type="password"
          value={password}
          // autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Write your password here"
        />

        <Button type="submit">Login</Button>
      </form>
      <p
        onClick={() => {
          setShowLogin(false);
          setName("");
          setEmail("");
        }}
      >
        Dont have an account
      </p>
    </div>
  ) : (
    <div className="flex">
      <input
        type="text"
        placeholder=" write your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder=" write your email here"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Write your password here"
      />
      <Button onClick={register}>Create account</Button>
      <p
        onClick={() => {
          setName("");
          setEmail("");
          setShowLogin(true);
        }}
      >
        Aleardy have an account
      </p>
    </div>
  );
}

export default Login;
