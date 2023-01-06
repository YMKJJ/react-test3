
import React from "react";

function UserStatus(props){
    let isLogin = props.isLogin;
    if(isLogin){
        return(
            <div>
                이 사용자는 현재 <b>로그인</b> 상태입니다.
            </div>
        );
    }
    else{
        return (
            <div>
                이 사용자는 현재 <b>로그아웃</b> 상태입니다.
            </div>
        );
    }

}

export default UserStatus;