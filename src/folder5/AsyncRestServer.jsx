// AsyncRestServer.jsx CreateDt : 2023-01-10
import React from "react";
import axios from "axios";

function AsyncRestServer(props) {

    const sendDataGet = () => {
        axios.get('http://localhost:8080/async/sendDataGet')
            .then((req) => {
                console.log(req);
            })
            .catch((err) => {
                console.log('통신실패');
            })
    }

    const sendDataPost = () => {
        axios.post('http://localhost:8080/async/sendDataPost',null, {
            params:{
                id:"test1",
                pw:"asd1234"
            }
        })
            .then((req) =>{
                console.log(req);
                console.log("post 방식으로 통신 성공")
            })
        .catch((err) => {
            console.log('통신실패')
        })
    }

    const sendDataPut = () => {
        axios.put('http://localhost:8080/async/sendDataPut',null,{
            params:{
                idx:100
            }
        })
            .then((req) =>{
                console.log(req);
                console.log("put 방식으로 통신 성공")
            })
            .catch((err) => {
                console.log('통신실패')
            })
    }

    const sendDataDelete = () => {

        axios.delete('http://localhost:8080/async/sendDataDelete',{params:
                {idx:200}
            })
            .then((req) =>{
                console.log(req);
                console.log("delete 방식으로 통신 성공");
            })
            .catch((err) => {
                console.log('통신실패')
            })

    }
    return (
        <div className={'container my-5'}>
            <h1>Axios를 통한 비동기 통신</h1>
            <div className={'row'}>
                <div className={'col-sm-8 mx-auto'}>
                    <div>

                    </div>
                    <div className={'my-3 d-flex justify-content-center'}>
                        <button className={'btn btn-primary me-3'}onClick={sendDataGet}>get 방식</button>
                        <button className={'btn btn-primary me-3'}onClick={sendDataPost}>post 방식</button>
                        <button className={'btn btn-primary me-3'}onClick={sendDataPut}>put 방식</button>
                        <button className={'btn btn-primary me-3'}onClick={sendDataDelete}>delete 방식</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsyncRestServer;