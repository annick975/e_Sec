import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div>Index</div>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    
    </>
  );
}

export default Index;
