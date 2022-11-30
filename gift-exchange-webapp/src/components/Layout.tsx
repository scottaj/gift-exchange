import * as React from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthStatus} from "./AuthStatus";

export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/gift-exchanges">Gift Exchanges</Link>
                    </li>
                </ul>
            </nav>

            <AuthStatus/>

            <Outlet/>
        </div>
    );
}