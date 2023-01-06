import React from "react";

const styles = {
    bg:{
        backgroundColor : "white"
    }
}
function ThemedButton(props) {
    return (
        // 자식 컴포넌트로 theme를 전달
        <Button theme={props.theme} />
    );
}
function Button(props){
    //부모에게서 전달받은 theme 를 사용하고 있음
    if(props.theme == "dark"){
        styles.bg.backgroundColor = "black";
    }
    else{
        styles.bg.backgroundColor = "white";
    }

    return <button style={styles.bg}>테마 적용 버튼</button>
}

export default ThemedButton;