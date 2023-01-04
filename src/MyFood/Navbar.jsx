import React from "react";

function Navbar(){
    return(
        <nav className={"navbar fixed-top justify-content-between bg-white p-3"}>
            <a href={"#"} className={"text-decoration-none text-black"}>My Food</a>
        </nav>
    );
}

export default Navbar;