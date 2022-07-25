import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import { Signup } from "./components/Auth/Signup/Signup";
import { Login } from "./components/Auth/Login/Login";
import Uploads from "./components/FileUploader/Uploads";
import { Currentuser } from "./services/authServices";
function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Routes>
          <Route exact element={<PrivateRoute />}>
            <Route path="/" element={<Uploads />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function PrivateRoute() {
  return <>{Currentuser ? <Outlet /> : <Navigate to="/login" />};</>;
}
