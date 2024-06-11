import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [Username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const guard = {
      Username,
      Password,
    };

    console.log("e_Sec Guards being sent:", guard);

    axios
      .post("http://localhost:3005/login", guard)
      .then((result) => {
        console.log(result);
        if (result.data === "Successfully Logged in!") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>Login</div>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          name="Username"
          id="Username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          name="Password"
          id="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Login</button>
      </form>

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </>
  );
}

export default Login;
