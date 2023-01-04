// ConfirmButton.jsx

import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed((isConfirmed) => !isConfirmed)
    }
    return(
        <div>
            <button type={"button"} className={"btn btn-success"} onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인완료":"확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButton