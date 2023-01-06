import React, {useContext} from "react";
import ThemeConText from "./ThemeConText.";
// 파일로 생성된 컨텍스트를 임포트하여 사용,

function MainContent(props) {
    // useContext() 훅을 사용하여 (<ConText.Consumer> 없이 컨텍스트에 저장된 정보를 사용함)
    const {theme,toggleTheme} = useContext(ThemeConText)
    return (
        <div style={{width:"100vw",
            height:"100hw",
            padding:"1.5rem",
            backgroundColor: theme === "light"?"white":"black",
        color: theme === "light" ? "black":"white"}}>
        <p>테마 변경이 가능한 웹 사이트</p>
            {/* 버튼 태그의 클릭 이벤트에 컨텍스트를 통해 가져온 함수를 설정함 */}
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    );
}

export default MainContent;