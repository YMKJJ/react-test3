// Reservation.jsx

import React, {useState} from "react";

function Reservation(props){
    const [haveBreakfast,setHaveBreakfast] = useState(true);
    const [numberOfGuest,setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부 : ${haveBreakfast} \n방문자 수 : ${numberOfGuest}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div class={"my-3"}>
                <label htmlFor={""} className={"form-label"}>아침식사 여부 :</label>
                <input type={"checkbox"} checked={haveBreakfast} onChange={(event) =>{setHaveBreakfast(event.target.checked)}} />
            </div>

            <div className={"my-3"}>
                <label className={"form-label"}>방문객 수 : </label>
                <input type={"number"} value={numberOfGuest} onChange={(event) => {setNumberOfGuest(event.target.value)}} />
            </div>
            <div className={"my-3"}>
                <button type={"submit"} className={"btn btn-primary"}>제출</button>
            </div>
        </form>
    )
}

export default Reservation;