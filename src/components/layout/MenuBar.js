import React from 'react'


export default function MenuBar (props) {


    const handleClickLogin = () => {
        props.ShowBar(false);
        props.ShowLogin(true);
    };

    const handleClickProfile = () => {
        props.ShowBar(false);
        props.ShowProfile(true);
    };

    return (
        <>
            <div className="menu-bar">
                
                {props.ShowBarLinks ?
                    <>
                        <input onClick={handleClickProfile} type="submit" value="PROFILE" id="profile-link" className="menu-bar-item"/>
                        <input type="submit" value="MODULES" id="modules-link" className="menu-bar-item1"/>
                    </>
                :
                    <></>
                }
                
                <h1>lookdaluv.</h1>

                {props.ShowBarLinks ?
                    <>
                        <input type="submit" value="SUPPORT" id="support-link" className="menu-bar-item"/>
                        <input type="submit" value="TOOLS" id="tools-link" className="menu-bar-item2"/>
                    </>
                :
                    <></>
                }
                <button onClick={handleClickLogin} type="submit" className="platform-button">Login</button>
            </div>
        </>
    )
}