import React from "react"; // 설치되어있는 라이브러리는 경로 X
import Contents from "./Contents"; // 우리가만든것은 경로가 필요함.
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import Info from "./Info";


function App2(){
    return(
        <div>
            <Header />

            <Navigate />

            <div className={"container mt-5"}>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                        <Info />
                        <LinkList />
                    <hr className={"d-sm-none"} />
                    </div>
                    <div className="col-sm-8">
                        <Contents />

                        <Contents />
                    </div>
            </div>
        </div>

            <Footer />

        </div>
            );
}

export default App2;