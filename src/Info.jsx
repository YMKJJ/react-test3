import React from "react";

const style = {
    fakeImg :{
        height:200,
        background:"#aaa"
    }
}

function Info(){
    return(
    <div>
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        <div style={style.fakeImg}>Fake Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    );
}

export default Info