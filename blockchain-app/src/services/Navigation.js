import React, { Component } from "react";
import history from './History';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import LogoImage from '../images/goledger-logo_alt.png';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Navigation = () => {
    const history = useHistory();
    return (
        <AppBar position="relative" style={{ background: "#fff" }}>
            <Toolbar style={{ paddingTop: 5, paddingBottom: 5 }}>
                <img
                    src={LogoImage}
                    height="65"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    onClick={() => history.push('/', { some: 'state' })}
                />
                <Button color="secondary"
                    onClick={() => history.push('/Categories')}>Categorias</Button>
                <Button color="secondary"
                    onClick={() => history.push('/Products')}>Produtos</Button>
                <Button color="secondary"
                    onClick={() => history.push('/Sellers')}>Vendedores</Button>
            </Toolbar>
        </AppBar>
    )

}

export default Navigation;