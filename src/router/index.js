import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Helpers
import AuthHelper from "../helpers/Auth";

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
import NotFoundAdmin from "../containers/views/Admin/NotFoundAdmin";

//General
import NotFound from "../containers/views/Main/NotFound";

export default () => {

    const RequireAuth = ({ children }) => {
        if(!AuthHelper.isAuthenticated()) {
            // return <Redirect to="/login" />;
            return children;
        }
        return children;
    };

    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route path="/404-page" component={NotFound} />
                <Route path="/admin/404-page" component={NotFound} />

                <Route path='/admin/*'>
                    <MainAdmin>
                        <Switch>
                            <RequireAuth>
                                <Route exact path='/admin/dashboard' component={Dashboard} />
                                <Route exact path='/admin/setting' component={Setting} />
                                <Redirect to="/admin/404-page"/>
                            </RequireAuth>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route path='/*'>
                    <Main>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Redirect to="/404-page"/>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    );
}
