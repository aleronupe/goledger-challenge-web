import React from 'react';
import '../style/App.css';
import ListaAtivos from './List';
import { CssBaseline, Toolbar, AppBar, Typography } from '@material-ui/core';
import LogoImage from '../images/goledger-logo_alt.png';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar  position="relative" style={{ background: "#fff" }}>
        <Toolbar style={{ paddingTop: 5, paddingBottom: 5}}>
          <img
            src={LogoImage}
            height="65"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <ListaAtivos />
      </main>
    </React.Fragment>
  );
}

export default App;
