import React from 'react'
import MenuBar from '../layout/MenuBar';
import LoginScreen from '../login/LoginScreen';
import Profile from '../profile/Profile';
import '../../css/menubar.css'


function IndexScreen() {
    const [showLogin, setShowLogin] = React.useState(false);
    const [showBarLinks, setShowBarLinks] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(true);


    return (
        <div className="home-background-box">

            {showMenuBar ?
                <MenuBar 
                    ShowLogin={(showLogin) => setShowLogin(showLogin)} 
                    ShowBarLinks={(showBarLinks) => setShowBarLinks(showBarLinks)} ShowBarLinks={showBarLinks}
                    ShowProfile={(showProfile) => setShowProfile(showProfile)}
                    ShowBar={(showMenuBar) => setShowMenuBar(showMenuBar)}
                />
            :
                <></>
            }

            <div className="scroll-bar"></div>

            {showLogin ?
                <LoginScreen
                    ShowLogin={(showLogin) => setShowLogin(showLogin)}
                    ShowBarLinks={(showBarLinks) => setShowBarLinks(showBarLinks)}
                    ShowBar={(showMenuBar) => setShowMenuBar(showMenuBar)}
                />
            :
                <></>
            }

            {showProfile ?
                <Profile/>
            :
                <></>
            }

        </div>
    );
}

export default IndexScreen;