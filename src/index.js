import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App8 from "./App8";
import App2 from "./App2";
import AApp from "./AApp";
import AApp2 from "./AApp2";
import App9 from "./App9";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  strictmode : 자바스크립트의 문법을 엄격하게 확인한다는 의미
  //  React.StrictMode : 베포 버전에는 제외되고 개발 버전에서 동작하는 엄격모드, 몇가지 함수를 중복 실행하여 잘못된 것이 없는지 개발자에게 확인하도록 함
  // <React.StrictMode>
  // </React.StrictMode>
  //   <App2 />
    //   <App8 />
<App9 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
