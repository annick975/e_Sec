import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Fullname, setFullname] = useState<string>("");
  const [Username, setUsername] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const navigate = useNavigate();

// REGISTER FUNCTIONALITY

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const guard = {
      Fullname,
      Username,
      Email,
      Password,
    };

    console.log("e_Sec Guards being sent:", guard);

    axios
      .post("http://localhost:3005/signup", guard)
      .then((result) => console.log(result));
    navigate("/login").catch((err) => console.log(err));
  };

  return (
    <>
      <div>Signup</div>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Fullname">Full Name:</label>
        <input
          type="text"
          name="Fullname"
          id="Fullname"
          onChange={(e) => setFullname(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          name="Username"
          id="Username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          name="Email"
          id="Email"
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Register</button>
      </form>

      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

export default Signup;
