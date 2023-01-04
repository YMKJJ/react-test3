import React,{useState} from "react";

let CalResult = 0;

function Calculator(){
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [result,setResult] = useState(0);
    // 함수 선언
    const plusBtn = () =>{
        CalResult = (num1 + num2);

    }

    const minusBtn = () =>{
        CalResult = (num1 - num2);
    }

    const multiBtn = () => {
        CalResult = (num1 * num2);
    }

    const divBtn = () => {
        CalResult = (num1 / num2);
    }

    const resultBtn = () =>{
        setResult(CalResult)
    }

    return (
        <div className={"row"}>
            <div className={"col-sm-4 mx-auto border rounded-3"}>
                <div className={"my-3"}>
                    <label for={"num1"}>첫번째 숫자 : </label>
                    <input type={"text"} id={"num1"} name={"num1"} className={"form-control"} placeholder={"첫번째 숫자를 입력하세요"} value={num1}
                           onChange={(e) => setNum1(Number(e.target.value))} />
                </div>
                <div className={"my-3"}>
                    <label for={"num2"}>두번째 숫자 : </label>
                    <input type={"text"} id={"num2"} name={"num2"} className={"form-control"} placeholder={"두번째 숫자를 입력하세요"} value={num2}
                           onChange={(e) => setNum2(Number(e.target.value))} />
                </div>
                <hr/>
                <div className={"my-3 d-flex justify-content-between"}>
                    <button type={"button"} className={"btn btn-primary"} onClick={plusBtn}> + </button>
                    <button type={"button"} className={"btn btn-primary"} onClick={minusBtn}> - </button>
                    <button type={"button"} className={"btn btn-primary"} onClick={multiBtn}> * </button>
                    <button type={"button"} className={"btn btn-primary"} onClick={divBtn}> / </button>
                    <button type={"button"} className={"btn btn-info"} onClick={resultBtn}> = </button>
                </div>
                <hr/>
                <div className={"my-3"}>
                    <label for={"result"}>계산 결과 : </label>
                    <input type={"text"} id={"result"} name={"result"} className={"form-control"} value={result} />
                </div>
            </div>
        </div>
    );
}

export default Calculator;
