import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startChecking } from '../../actions/auth';
import MenuBar from '../layout/MenuBar';
import LoginScreen from '../login/LoginScreen';
import Profile from '../profile/Profile';
import '../../css/menubar.css'
import '../../css/indeximage.css'


import importScript from '../../actions/script-load.js';

function IndexScreen() {
    importScript("../js/scroll-bar.js");

    const [showLogin, setShowLogin] = React.useState(false);
    const [showBarLinks, setShowBarLinks] = React.useState(true);
    const [showProfile, setShowProfile] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking()).then((response)=>{
            // Mejorar el sistema de espera con un spinner.
            
            console.log(response);
            if (response === 200 || response === 201){
                setShowBarLinks(true);
            }
        });
    });


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