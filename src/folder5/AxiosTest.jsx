// AxiosTest.jsx CreateDt : 2023-01-10
import React, {useEffect} from "react";
import axios from "axios";


// Axios : Node.Js  비동기 통신을 하기 위한 라이브러리, promise를 사용함
// axios 는 rest 방식을 지원함
// get(url, config) : get 방식으로 서버에 데이터를 요청함
// post(url, data[,config]) : post 방식으로 서버에 데이터를 요청함
// put(url, data[,config]) : put 방식으로 서버에 데이터 전달
// delete(url, data[, config]) delete 방식으로 데이터 전달
// options(url, config) : axios 객체 생성 시 설정 정보를 변경할 수 있음

// then() : 정상적으로 통신이 성공 했을 경우 실행
// catch() : 통신이 실패하였을 경우 실행

// async/await와 함께 사용 시 then()을 필요로 할 경우 나중에 호출할 수 있음
// async/await와 함께 사용 시 예외처리를 try/catch 사용하여 처리

// npm install axios : 사용할 프로젝트에 axios 설치
// import axios from 'axios'; 사용할 컴포넌트에서 axios import

// 응답객체 : 요청에 대한 응답 객체가 json 방식으로 전달됨
// data{} : 서버에서 제공한 데이터 json 타입
// status : 서버와의 통신 응답 신호, 200: ok, 300:redirect, 400: 리소스 없음, 500 서버 내부 오류
// statusText : 서버와의 응답 메시지
// headers : 서버에서 응답한 헤더 정보
// config : 서버에 요청시 axios의 설정 정보
// request{} : 응답을 생성한 요청

// 사용법 :

// axios({
//         method: 'get|post|put|delete',
//         url:'url',
//         data: {
//              param: 'data',
//              param2: 'data',
// },
// });

// 주로 이방법 사용
// useEffect(() =>{
// axios.get(url)
// .then((rep) => {
// 성공시 실행할 소스;
// })

// .catch((err) => {
// 실패시 실행할 소스;
// });
//}

// axios.post(url,{
//              param1:'data1',
//              param2:'data2'
//})
// .then(function(req){
// 성공시 실행할 소스
// });
// .catch((err) => {
// 실패시 실행할 소스;
// });
//}

function AxiosTest(props) {
    useEffect( ()=>{
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220901')
            .then((req)=>{
                alert('통신 성공');
                // console.log(req);
                // console.log(req.data)
                // console.log(req.data.boxOfficeResult.dailyBoxOfficeList)
                const List = req.data.boxOfficeResult.dailyBoxOfficeList
                // console.log(dailyBoxOfficeList);
                for(let i=0; i<List.length; i++){
                    let str = `순번 : ${List[i].rnum} 
                    순위 : ${List[i].rank} 
                    제목 : ${List[i].movieNm} 
                    개봉일 : ${List[i].openDt} 
                    관람객 :${List[i].audiCnt}`
                    console.log(str);
                }
            })
            .catch((err) =>{
                alert('통신 실패');
            })
    },[])
    return (
        <div>

        </div>
    );
}

export default AxiosTest;