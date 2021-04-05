import React from 'react';
import { CssBaseline } from '@material-ui/core';
import '../styles/App.css';
import ListaAtivos from './List';
import Routes from '../services/Routes';
import Navigation from '../services/Navigation';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <main>
        <Routes />
      </main>
    </React.Fragment>
  );
}

export default App;
