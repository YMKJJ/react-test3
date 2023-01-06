import React from "react";
import {Link, Outlet} from "react-router-dom";

function Navb(){
    return(
        <div>
            <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
                <div className={"container-fluid"}>
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item"}>
                            <Link className={"nav-link"} to={"/"}>Main</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link className={"nav-link"} to={"/board"}>board</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link className={"nav-link"} to={"/about"}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}


export default Navb;