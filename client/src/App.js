import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./PrivateRoute.js/Index";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        
        <NavLink to="/login">Login</NavLink><br/>
        <NavLink to="/BubblePage">BubblePage</NavLink>
      
      <Switch>
      
        <PrivateRoute exact path="/BubblePage" component={BubblePage} />
        <Route path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </Switch>  
      </div>
    </Router>
  );
}

export default App;
