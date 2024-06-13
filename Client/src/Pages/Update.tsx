import axios from "axios";
import { useState } from "react";

function Update() {

  // UPDATE USERS Functionality
  const [updatedUser, setupdatedUser] = useState(0);

  const updateUser = (id: number) => {
    axios.put("http://localhost:3005/updateUsers", { id, updatedUser });
  };
  
  return <>
   <div>Update User</div>;
{
  updatedUser.map((user: any, index: number) => {
    return <div key={index}>
      <h1>{user.Fullname}</h1>
      <h1>{user.Username}</h1>
      <h1>{user.Email}</h1>
      <h1>{user.Password}</h1>
      <input type="text" onChange={(e) => {
        setupdatedUser(e.target.value)
      }} />

      <button onClick={() => {updateUser(user._id)}}>Update</button>

    </div>

  })
}
</>

}

export default Update;
