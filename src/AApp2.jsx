// AApp2.jsx CreateDt : 2023-01-06
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Navigate from "./Navigate";
import Info from "./Info";
import Contents from "./Contents";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import LayO from "./LayO";
import Blogs from "./pages/Blogs";

function AApp2(props) {
    return(
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LayO />}>
                        <Route index element={<Blogs /> } />
                        <Route path={"board"} element={<Home />} />
                        <Route path={"about"} element={<Info />} />
                        <Route path={"*"} element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}

export default AApp2;