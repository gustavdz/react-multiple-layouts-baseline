import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

//Layouts
import MainAdmin from "../containers/layouts/MainAdmin";
import Main from "../containers/layouts/Main";

//views without login
import Login from "../containers/views/Main/Login";
import SignUp from "../containers/views/Main/SignUp";
import About from "../containers/views/Main/About";
import Home from "../containers/views/Main/Home";

//views authenticated
import Dashboard from "../containers/views/Admin/Dashboard";
import Setting from "../containers/views/Admin/Setting";


//General
import NotFound from "../containers/views/Main/NotFound";
import AppRoute from "./AppRoute";

const AppRouter = () => (
    <Router>
        <Switch>
            <AppRoute exact path="/" layout={Main} component={Home} protected={false} />
            <AppRoute exact path="/about" layout={Main} component={About} protected={false}/>
            <AppRoute exact path="/dashboard" layout={MainAdmin} component={Dashboard} protected={true} />
            <AppRoute exact path="/setting" layout={MainAdmin} component={Setting} protected={true} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;
