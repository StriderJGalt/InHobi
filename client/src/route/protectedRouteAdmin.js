import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../auth/auth";

export const ProtectedRouteAdmin = ({
                                        component: Component,
                                        ...rest
                                    }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (Auth.isAuthenticated() && Auth.isAdmin()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};