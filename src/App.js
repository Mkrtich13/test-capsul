import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
