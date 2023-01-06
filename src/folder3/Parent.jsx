// Parent.jsx

import React from "react";
import Child from "./Child";

function Parent(){
    return(
        <div>
            <h1>Parent 영역</h1>
            <Child value={"부모 데이터"} />
        </div>
    )
}

export default Parent;