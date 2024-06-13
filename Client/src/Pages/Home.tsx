import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../Styles/Users.css";

function Home() {
  // VIEW USERS FUNCTIONALITY
  const [userData, setUserData] = useState(null);

  const viewUsers = async () => {
    try {
      const viewedUsers = await axios.get("http://localhost:3005/users");
      setUserData(viewedUsers.data);
    } catch (error) {
      console.error("Error while retrieving guards' data!", error);
    }
  };

  return (
    <>
      <div>Home</div>

      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      {/* <Link to="/users"> */}
      <button type="button" onClick={viewUsers}>
        View Users
      </button>
      {/* </Link> */}
      <Link to="/">
        <button>Logout</button>
      </Link>

      {userData && (
        <div className="userList">
          <h2>User List</h2>

          <table>
            <thead>
              <tr>
                <th>
                  N<sup>o</sup>
                </th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.Fullname}</td>
                  <td>{user.Username}</td>
                  <td>{user.Email}</td>
                  <td>
                    <Link to="/updateUsers">
                      <button>Edit</button>
                    </Link>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Home;
