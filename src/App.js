import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
//import { Switch } from "@material-ui/core";
import { Routes } from "react-router-dom";
import { Switch } from "@material-ui/core";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />}></Route>
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            {/* <ListEmployeeComponent /> */}
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
