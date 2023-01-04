import React from "react";

function Profile(props){
    // props는 읽기전용임 바꾸려면 자바스크립트 변수에 props를 담아서 변경해야함
    let data = props;
    let userId = props.userId;
    let userName = props.userName;
    let userTel = props.userTel;
    let userEmail = props.userEmail;

    console.log(data);
    return(
        <div className={"border rounded-2 px-3 m-4"}>
            <div className={"my-3"}>
                <label for={"user-id"} className={"form-label"}>아이디 : </label>
                <input type={"text"} id={"user-id"} className={"form-control"} value={userId} />
            </div>

            <div className={"my-3"}>
                <label for={"user-name"} className={"form-label"}>이름 :</label>
                <input type={"text"} id={"user-name"} className={"form-control"} value={userName} />
            </div>

            <div className={"my-3"}>
                <label for={"user-tel"} className={"form-label"}>전화번호 :</label>
                <input type={"tel"} id={"user-tel"} className={"form-control"} value={userTel} />
            </div>

            <div className={"my-3"}>
                <label for={"user-email"} className={"form-label"}>이메일 :</label>
                <input type={"email"} id={"user-email"} className={"form-control"} value={userEmail} />
            </div>
        </div>
    );
}


export default Profile;