import React from "react";

function NavBar(){
    return(
      <nav className={"navbar navbar-expand-lg  bg-white fixed-top justify-content-between fs-5 p-3"}>
          <div>
              <a href={"#"} className={"text-decoration-none text-black ms-3"}>Gourmet au Catering</a>
          </div>
          <div>
              <a href={"#"} className={"text-decoration-none text-black me-4"}>About</a>
              <a href={"#"} className={"text-decoration-none text-black me-4"}>Menu</a>
              <a href={"#"} className={"text-decoration-none text-black me-5"}>Content</a>
          </div>
      </nav>
    );
}

export default NavBar;