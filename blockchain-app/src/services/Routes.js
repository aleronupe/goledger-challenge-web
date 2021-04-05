import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from '../components/Category';
import Product from '../components/Product';
import Seller from '../components/Seller';
import Home from "../components/Home";
import history from './History';

const Routes = () => (

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Categories" component={Category} />
            <Route path="/Products" component={Product} />
            <Route path="/Sellers" component={Seller} />
        </Switch>

)
    
export default Routes;