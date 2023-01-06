import React from "react";

function Navigate(){
    return(
        <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
            <div className={"container-fluid"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/main"}>Main</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/board"}>board</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href={"/about"}>About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navigate;