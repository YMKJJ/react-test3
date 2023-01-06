import React,{useState,useCallback} from "react";
import ThemeConText from "./ThemeConText.";
import MainContent from "./MainContent.";


function DarkOrLight() {
    const [theme, setTheme] = useState('light');
    // useCallBack() : 콜백 함수를 반환하는 리액트 훅, 메모이제이션 기능을 사용할 수 있어 지정한 의존성 배열에등록된
    // 데이터가 변경되었을 경우에만 동작
    const toggleTheme = useCallback(() => {
        // state로 지정된 theme 값이 변경될 경우에만 동작
        if(theme == "light"){
            setTheme("dark");
        }
        else if(theme == "dark"){
            setTheme("light");
        }
    },[theme]);

    return (
        // 컨텍스트 provider로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 함
        <ThemeConText.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeConText.Provider>
    );
}

export default DarkOrLight;