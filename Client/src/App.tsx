import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";

import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/updateUsers" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
