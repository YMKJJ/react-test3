import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

// 조건부 렌더링 : 어떠한 조건에 따라서 화면에 표시할 렌더링 달라지는 것
// if문 사용 시 render() 함수가 동작하는 return 부분에서 조건문을 사용하는 것이 아니고 함수 밖에서 사용 return문 안에선 삼항연산자를 사용
// 자바스크립트의 true / false
// true : 논리형 true, 빈 object 타입 {}, 빈 배열 [], 0이 아닌 숫자, 빈 문자열이 아닌 문자열
// false : 논리형 false, 숫자 0, 0.0 빈 문자열 '',"",``, null, undefined, NaN (Not a Number)
function Goal(props){

    const isGoal = props.isGoal;

    if(isGoal){
        return (
            <MadeGoal />
        );
    }
    else{
        return (
            <MissedGoal />
        );
    }

}

export default Goal;