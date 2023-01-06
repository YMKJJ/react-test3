import React from "react"; // 설치되어있는 라이브러리는 경로 X
import Contents from "./Contents"; // 우리가만든것은 경로가 필요함.
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import Info from "./Info";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";


function App2(){
    return(
        <div>
            <Header />
            <Navigate />
                <div className={"row"}>
                    <div className={"col-sm-3"}>
                <Info />
                    </div>
                        <div className={"col-sm-8"}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"main"} element={<Contents />} />
                        <Route path={"board"} element={<Home />} />
                        <Route path={"about"} element={<Info />} />
                        <Route path={"*"} element={<NoPage />} />
                    </Routes>
                </BrowserRouter>

                    </div>
                </div>
            </div>
            );
}

export default App2;