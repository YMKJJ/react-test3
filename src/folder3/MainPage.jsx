// MainPage.jsx

import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(){
    const [showWaring, setShowWaring] = useState(false);

    const handleToggleClick = () => {
        setShowWaring(prevState => !prevState);
    }

    return(
        <div>
            <WarningBanner warning={showWaring} />
            <button onClick={handleToggleClick}>{showWaring ? '감추기':'보이기'} ></button>
        </div>
    );
}

export default MainPage