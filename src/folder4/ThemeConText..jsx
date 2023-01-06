import React from "react";


// 컨텍스트 객체 생성, 기본값으로 light 를 설정
const ThemeContext = React.createContext('light');
// 컨텍스트 이름 설정
ThemeContext.displayName = 'ThemeContext';



export default ThemeContext;