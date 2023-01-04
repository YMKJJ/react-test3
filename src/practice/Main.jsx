import React from "react";
import MainImg from "./MainImg.png";

function Main(){
    return(
        <div className={"container mt-5"}>
            <div className={"row"}>
                <div className={"col-sm mt-5"}>
                    <img src={MainImg} className={"mb-5"}/>
                </div>
                <div className={"col-sm mt-5"}>
                    <h1 className={"text-center"}>About Catering</h1>
                    <br />
                    <h5 className={"text-center"}>Tradition since 1889</h5>
                    <p className={"mt-5 ms-3 fs-5"}>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
                        consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We only use
                     <span className={"bg-secondary"}> seasonal </span>ingredients.</p>
                    <p className={"mt-5 ms-3 fs-5 text-secondary"}>Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim
                        id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Main;