import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/ForgetPage/Profile";
import Home from "./Components/Home/Home";
import Login from "./Components/Login-SignUp/login";
import Narbar1 from "./Components/Login-SignUp/navbar1";
import Signup from "./Components/Login-SignUp/signup";
// import Logout from "./Components/Logout/Logout";
import PrivateComponent from "./Components/PrivateComponent/PrivateComponent";

function App() {
  return (
    <div className="App-main">
      <BrowserRouter>
        <Narbar1 />
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<h2>Logout Component</h2>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
