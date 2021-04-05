import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from "react-router-dom";
import '../styles/App.css';
import Routes from '../services/Routes';
import Navigation from '../services/Navigation';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router >
        <Navigation />
        <main>
          <Routes />
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
