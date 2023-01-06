import React, {useState} from "react";
import Childd from "./Childd";

function Parentt(){

    const [value2,setValue2] = useState('');


    return(
        <div>
        <h1>Parent 영역</h1>
        <Childd value={'부모 데이터'} childvalue={setValue2}/>
            <p>{value2}</p>
        </div>
    );
}

export default Parentt;