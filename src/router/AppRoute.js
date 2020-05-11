import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthHelper from "../helpers/Auth";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {

    const RequireAuth = () => {
        if (!AuthHelper.isAuthenticated()) {
            return true;
        }
        return true;
    };
    if(rest.protected){
        if(RequireAuth()){
            return (
                <Route
                    {...rest}
                    render = { props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            );
        } else {
            return <Redirect to="/login" />;
        }
    } else {
        return (
            <Route
                {...rest}
                render = { props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
            />
        );
    }
}

export default AppRoute;
