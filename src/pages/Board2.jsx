// Board2.jsx CreateDt : 2023-01-10
import React from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

function Board2(props) {
    const param1 = useLocation();
    const[param2, setParam2] = useSearchParams();
    const navi = useNavigate();

    const goBack = () => {
        navi(-1);
    }
    const goBoard = () => {
        navi('/board/100');
    }
    return (
        <div>
            <p>{param1.search}</p>
            <p>{param2.get("val1")}</p>
            <p>{param2.get("val2")}</p>
            <button onClick={goBack}>이전</button>
            <button onClick={goBoard}>board 페이지로 이동</button>
        </div>
    );
}

export default Board2;