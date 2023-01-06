import React from "react";
import Goal from "./folder3/Goal"
import Greeting from "./folder3/Greeting";
import LoginControl from "./folder3/LoginControl";
import Mailbox from "./folder3/Mailbox";
import Counter from "./folder3/Counter";
import MainPage from "./folder3/MainPage";
import LandingPage from "./folder3/LandingPage";
import AttendanceBook from "./folder3/AttendanceBook";
import NameForm from "./folder3/NameForm";
import RequestForm from "./folder3/RequestForm";
import FruitSelect from "./folder3/FruitSelect";
import Reservation from "./folder3/Reservation";
import Parent from "./folder3/Parent";
import Parent2 from "./folder3/Parent2";


function App7(){
    return(
        <div className={"container"}>
            <Goal isGoal={false}/>
            <hr />
            <Greeting isLogin={false} />
            <hr />
            <LoginControl />
            <hr />
            <Mailbox unreadMessages={0}/>
            <Counter count={0}/>
            <MainPage />
        <hr />
        <LandingPage />
        <AttendanceBook /><NameForm />
        <RequestForm />
        <FruitSelect />
        <Reservation />
            <hr />
        <Parent />
            <br />
                <Parent2 />

        </div>
    );
}


export default App7;