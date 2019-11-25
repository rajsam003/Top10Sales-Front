import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/css/top10sales.css";

// pages
import Home from "views/Home";
import Top10Refrigrators from "views/examples/Categories/Top10Refrigrators";
import SectionSignup from "views/examples/SectionSignup";
import SectionSignin from "views/examples/SectionSignin";
import AdminDashboard from "views/examples/AdminDashboard";
import AdminRoute from "auth/AdminRoute";
import Dashboard from "views/examples/UserDashboard";
import PrivateRoute from "auth/PrivateRoute";
import AddCategory from 'views/examples/AddCategory';
import AddProduct from 'views/examples/AddProduct';
import Top10WashingMachines from 'views/examples/Categories/Top10WashingMachines';
import Top10AC from 'views/examples/Categories/Top10AC';
import Top10KitchenAppliances from 'views/examples/Categories/Top10KitchenAppliances';

const App = () => {
    return (
        <div style={{overflowX:'hidden'}}>
        <BrowserRouter>
            <Switch>
                <Route path="/index" render={props => <Home {...props} />} />
                <Route path="/top-10-air-conditioners-in-india" render={props => <Top10AC {...props} />} />
                <Route path="/top-10-washing-machines-in-india" render={props => <Top10WashingMachines {...props} />} />
                <Route path="/top-10-refrigrators-in-india" render={props => <Top10Refrigrators {...props} />} />
                <Route path="/top-10-kitchen-appliances-in-india" render={props => <Top10KitchenAppliances {...props} />} />
                <Route path="/signup" exact component={SectionSignup} />
                <Route path="/signin" exact component={SectionSignin} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AddCategory path="/create/category" exact component={AddCategory} />
                <AddProduct path="/create/product" exact component={AddProduct} />
                <Redirect to="/index" />
            </Switch>
        </BrowserRouter>
        </div>
    );
};
export default App;