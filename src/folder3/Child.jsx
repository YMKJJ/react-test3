import React from "react";

function Child(props){

    return(
        <div>
            <h2>Child 컴포넌트 영역</h2>
            <p> 부모 전달받은 값 : {props.value}</p>
        </div>
    )

}

export default Child;