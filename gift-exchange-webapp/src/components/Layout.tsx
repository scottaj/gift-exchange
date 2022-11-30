import * as React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the components on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/gift-exchanges">Gift Exchanges</Link>
                    </li>
                </ul>
            </nav>

            <hr/>

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet/>
        </div>
    );
}