import * as React from "react";
import {useAuth} from "../App";
import {Link} from "react-router-dom";


export function AuthStatus() {
    const auth = useAuth();

    if (auth.user) {
        return (
            <div>Hello {auth.user}</div>
        )
    } else {
        return (
            <Link to="/login">Login</Link>
        )
    }
}