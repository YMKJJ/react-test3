import React from "react";
import hamburger from "./hambuger.png";

function Header(){
    return(
        <div className={"container-xl my-auto"}>
            <div className={"position-relative"}>
                <img src={hamburger} className={"w-100"}/>
                <h1 className={"position-absolute bottom-0 start-0 ms-4"}>Le Catering</h1>
            </div>
        </div>
    );
}

export default Header;