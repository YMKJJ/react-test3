// AsyncAwait.jsx CreateDt : 2023-01-10
import React from "react";
import axios from "axios";

// async / await : 비동기 처리를 조금 더 쉽게 하기 위해서 개발됨
// 기본적으로 promise를 사용함

// 사용법 :
// async function 함수명(매개변수 {
// const 변수명 = await promise를 사용하는 함수();
// console.log(변수명)
// }
function AsyncAwait(props) {
    const fetchItems = () =>{
        return new Promise((resolve,reject) => {
        let items = [1,2,3];
        resolve(items);
    });
    }

    const logItems = () =>{
        fetchItems()
            .then((item) =>{
                console.log(item)
            })
        .catch((err) => {
            console.log(err)
        })
    }
    const logItem2 = async () => {
        const resultItems = await fetchItems();
        console.log(resultItems);
    }

    const getData = async() => {
        const {data} = await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220901')
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }

    return (
        <div>
            <button className={'btn-primary btn'} onClick={logItems}>프로미스 사용</button>
            <button className={'btn-success btn'} onClick={logItem2}>async/await 사용</button>
            <button className={'btn-info btn'} onClick={getData}>axios와 함께 사용</button>
        </div>
    );
}

export default AsyncAwait;