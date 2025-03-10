import React from "react";
import { Switch, Route } from "react-router-dom";
import Category from '../components/Category';
import Product from '../components/Product';
import Seller from '../components/Seller';
import Home from '../components/Home';
import EditProduct from '../components/EditProduct';

const Routes = () => (

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Categories" component={Category} />
            <Route path="/Products" component={Product} />
            <Route path="/Sellers" component={Seller} />
            <Route path="/EditProduct/:id/:code" component={EditProduct} />
        </Switch>

)
    
export default Routes;