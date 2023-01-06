import React from "react";

const ThemeConText = React.createContext('light');
const UserContext = React.createContext({name:"Guest"})

function App3(props) {
    const {theme,signedInUser} = props;
    return (
        <ThemeConText.Provider value={theme}>
            <UserContext.Provider value={signedInUser}>
                <LayOut />
            </UserContext.Provider>
        </ThemeConText.Provider>
    );
}
function LayOut(){
    return(
        <div>
            <ThemeConText.Consumer>
                {theme => (
                    <UserContext.Consumer>
                        {user => (
                            <ProfilePage user={user} theme={theme} />
                        )}
                    </UserContext.Consumer>
                )}
            </ThemeConText.Consumer>
        </div>
    );
}

function ProfilePage(){
    return(
        <div>

        </div>
    );
}
export default App3;