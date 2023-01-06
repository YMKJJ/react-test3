import React,{useState} from "react";
import ToolBar from "./ToolBar";

function LandingPage(props){
    const[isLogin,setIsLogin] = useState(false);

    // State값 변경을 위한 생성
    const onClickLogin = () => {
        setIsLogin(true);
    }

    const onClickLogout = () => {
        setIsLogin(false);
    }
    return(
        <div>
            <ToolBar isLogin={isLogin} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <div style={{padding:16}}>베너 확인</div>
        </div>
    )
}

export default LandingPage;