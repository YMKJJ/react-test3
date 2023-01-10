// // DailyBoxOffice.jsx CreateDt : 2023-01-10
// import React, {useState} from "react";
// import axios from "axios";
//
// function DailyBoxOffice(props) {
//     // 버튼 클릭시 엑시오스 통신을 통해서 데이터를 가져와서 화면의 table에 출력하는 컴포넌트를 작성하시오
//     // state 사용, map() 사용
//     const loadBoxOffice = () =>{
//         axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220901')
//             .then((req) => {
//                 // boxOffice를 state로 설정, 초기값이 빈 배열
//                 const [boxOffice,setBoxOffice] = useState([]);
//
//                 const dailyboxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
//                 setBoxOffice(dailyboxOffice);
//             })
//             .catch((err) => {
//
//             })
//     }
//
//     return (
//         <div className={'container'}>
//             <div className={'row'}>
//                 <div className={"col-sm-8 mx-auto"}>
//                     <table className={'table table-striped table-hover'}>
//                         <thead>
//                         <tr>
//                             <th>순위</th>
//                             <th>제목</th>
//                             <th>개봉일</th>
//                             <th>당일 관람객</th>
//                             <th>누적 관람객</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {boxOffice.map((item) =>{
//                         return(
//                             <tr key={item.rnum}></tr>
//                             <td>{item.rank}</td>
//                             <td>{item.movieNm}</td>
//                             <td>{item.OpenDt}</td>
//                             <td>{item.audiCnt}</td>
//                             <td>{item.audiAcc}</td>
//                         )
//                             )
//                         )}
//
//                         </tbody>
//                     </table>
//                     <hr />
//                     <div className={'my-3 d-flex justify-content-end'}>
//                         <button className={'btn btn-outline-primary'} onClick={loadBoxOffice}>이제 영화 순위 조회</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default DailyBoxOffice;