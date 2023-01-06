import React from "react";

function Childd(props){

    const sendData = () => {
        props.childvalue('자식 데이터');
    }
    return(
        <div>
            <h3>Child 컴포넌트 영역</h3>
            <p>부모에게 전달받은 값 : {props.value}</p>

            <button onClick={sendData}>클릭 시 데이터 전달</button>
        </div>
    );
}

export default Childd;