import React from "react";

function MailBox(props){
    const unreadMessages = props.unreadMessages;

    // inline if : jsx 문법으로 렌더링을 진행하는 render()함수 내부에서 if 문을 사용할 수 없기 대문에 && 연산자를 사용하거나
    //             삼항연산자를 사용하여 조건부 렌더링을 진행할 수 있다.
    // && 연산자 사용 시 && 연산자 오른쪽에 있는 피연산자는 왼쪽에 있는 피연산자의 값에 따라 렌더링이 결정됨
    // && 연산자 왼쪽의 피연산자 값이 false일 경우 오른쪽의 피연산자는 연산 평가 자체가 동작하지 않음
    // && 연산자 왼쪽의 피연산자는 연산 평가가 이루어 지기 때문에 해당 값이 그대로 출력.
    return(
        <div>
            <h1>안녕하세요.</h1>
            <h3>inline if (&& 연산자 테스트)</h3>
            {unreadMessages > 0 &&
            <h2>
                현재 {unreadMessages} 개의 읽지 않은 메세지가 있습니다.
            </h2>}
        </div>
    );
}

export default MailBox;