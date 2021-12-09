import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startChecking } from '../../actions/auth';
import MenuBar from '../layout/MenuBar';
import LoginScreen from '../login/LoginScreen';
import Profile from '../profile/Profile';
import Card from '../layout/Card';
import LevelView from '../layout/LevelView';
import PlayerBox from '../layout/PlayerBox';

import '../../css/home.css';
import '../../css/level-view.css';

import importScript from '../../actions/script-load.js';

function IndexScreen() {
    importScript("../js/scroll-bar.js");

    const [showLogin, setShowLogin] = React.useState(false);
    const [showBarLinks, setShowBarLinks] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(true);
    const [showLevelView, setShowLevelView] = React.useState(false);
    const [showPlayerBox, setShowPlayerBox] = React.useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking()).then((response)=>{

            if (response === 200 || response === 201){
                setShowBarLinks(true);
            }
        });
    });

    let cards = [
        {
          id: 1,
          title: "Antes de tu primera entrevista",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "WHITE",
          card_module: "Simpl Deconstructor"
        },
        {
          id: 2,
          title: "En la entrevista",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "BLUE",
          card_module: "Chat Bot"
        },
        {
          id: 3,
          title: "Tu tambien tienes un valor",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "GREEN",
          card_module: "Date Simulation"
        },
        {
          id: 4,
          title: "Errores comunes",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "GREEN",
          card_module: "Personal Growth"
        },
        {
          id: 5,
          title: "Entrevistas tecnicas",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "GREEN",
          card_module: "Personal Growth"
        },
        {
          id: 6,
          title: "Aptitudes a entrenar",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "GREEN",
          card_module: "Date Simulation"
        },
        {
          id: 7,
          title: "Relajate",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus lorem. Aliquam ut tortor nisl. In pulvinar vitae libero nec condimentum. Proin sem mauris, iaculis nec orci vel, tincidunt faucibus nunc. Suspendisse in commodo est. Donec est augue, varius sed diam ut, convallis tempus metus. Vestibulum elementum condimentum mauris non tempor.",
          completed: false,
          rarity: "GREEN",
          card_module: "Date Simulation"
        },
      ]

    return (
        <>
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

                {showPlayerBox ?
                    <PlayerBox>
                        <>
                            <>
                                {cards.map(card => {
                                return <Card title={card.title} description={card.description} ShowLevelView={(showLevelView) => setShowLevelView(showLevelView)}/>
                                })}
                            </>
                            {showLevelView ?
                                    <LevelView/>
                                :
                                    <></>
                            }
                        </>
                    </PlayerBox>
                :
                    <></>
                }

                {showLogin ?
                    <LoginScreen
                        ShowLogin={(showLogin) => setShowLogin(showLogin)}
                        ShowBarLinks={(showBarLinks) => setShowBarLinks(showBarLinks)}
                        ShowBar={(showMenuBar) => setShowMenuBar(showMenuBar)}
                        ShowPlayerBox={(showPlayerBox) => setShowPlayerBox(showPlayerBox)}
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
        </>
    );
}

export default IndexScreen;