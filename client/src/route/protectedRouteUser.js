import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../auth/auth";

export const ProtectedRouteUser = ({
                                        component: Component,
                                        ...rest
                                    }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (Auth.isAuthenticated() && Auth.isUser()) {
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