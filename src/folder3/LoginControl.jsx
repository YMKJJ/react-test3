import React, {useState} from "react";
import Greeting from "./Greeting";
import UserStatus from "./UserStatus";

let button;

function LoginControl(){
    const [isLogin,setIsLogin] = useState(false);
    const handleLoginClick = () => {
        setIsLogin(true);
    }

    const  handleLogoutClick = () =>{
        setIsLogin(false);
    }
    // 엘리먼트 변수 : 자바스크립트 변수에 리액트 컴포넌트를 지정하는 것

    // 조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button에 리액트 컴포넌트를 저장
    if(isLogin) {
        button = <LogoutBtn onClick={handleLogoutClick}/>
    }
    else{
        button = <LoginBtn onClick={handleLoginClick} />
    }

    return(
        <div>
            <Greeting isLogin={isLogin} />
            {/* 엘리먼트 변수에 저장된 리액트 컴포넌트가 출력됨 */}
            {button}
            {isLogin ? <LogoutBtn onClick={handleLogoutClick} />: <LoginBtn onClick={handleLoginClick} />}
            <UserStatus isLogin={isLogin} />
        </div>
    );
}

function LoginBtn(props){
        return(
            <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutBtn(props){
    return(
        <button onClick={props.onClick}>로그아웃</button>
    )
}

export default LoginControl;