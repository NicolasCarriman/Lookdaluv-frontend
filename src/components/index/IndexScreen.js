import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startChecking } from '../../actions/auth';
import MenuBar from '../layout/MenuBar';
import LoginScreen from '../login/LoginScreen';
import Profile from '../profile/Profile';
import Card from '../layout/Card';
import LevelView from '../layout/LevelView';
import PlayerBox from '../layout/PlayerBox';
import '../../css/menubar.css'
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

    let cards = [
        {
          id: 2,
          title: "Introducción Artes Secretas",
          description: "No imaginas la de veces que metacharon de pirado. Por aquel entonces me hubiese conformado con que alguien me concediese que en la seducción existían pautas. Me habría contentado con que me dijesen: «Sí, Mario, yo también creo que el amor y la atracción son fenómenos que pueden estudiarse». Pero jamás ocurrió. Eran otros tiempos.",
          completed: false,
          rarity: "WHITE",
          card_module: "Simpl Deconstructor"
        },
        {
          id: 3,
          title: "Activar su punto GG",
          description: "El león se queda hipnotizado contemplando a una gacela. Los pájaros se sienten impulsados a cantar por las mañanas. Las hormigas construyen hormigueros sin deliberarlo. Ya ti, que estás leyendo esto, se te dilatan las pupilas cuando te cruzas con ese pivonazo.",
          completed: false,
          rarity: "BLUE",
          card_module: "Chat Bot"
        },
        {
          id: 4,
          title: "Su hombre GANADOR",
          description: "Así que allá va la primera pregunta: ¿te consideras un Ganador? Puede que ya lo seas y solo necesites enterarte. Quizá aún no hayas llegado ahí, pero con un poco de dedicación y constancia vas a adquirir la capacidad de «hacer como si lo fueras hasta que lo seas» de verdad.",
          completed: false,
          rarity: "GREEN",
          card_module: "Date Simulation"
        },
        {
          id: 1,
          title: "Kaizen",
          description: "Pero ¿en qué consiste la estrategia Kaizen de mejora constante? «¡Hoy mejor que ayer, mañana mejor que hoy!» es el lema de este principio milenario. En otras palabras: las cosas siempre se pueden—y deben— hacer mejor. Por tanto, ni un solo día debería pasar sin llevar a cabo una cierta mejora.",
          completed: false,
          rarity: "GREEN",
          card_module: "Personal Growth"
        },
        {
          id: 1,
          title: "Random Card",
          description: "Pero ¿en qué consiste la estrategia Kaizen de mejora constante? «¡Hoy mejor que ayer, mañana mejor que hoy!» es el lema de este principio milenario. En otras palabras: las cosas siempre se pueden—y deben— hacer mejor. Por tanto, ni un solo día debería pasar sin llevar a cabo una cierta mejora.",
          completed: false,
          rarity: "GREEN",
          card_module: "Personal Growth"
        },
        {
          id: 4,
          title: "Virtuosismo",
          description: "Así que allá va la primera pregunta: ¿te consideras un Ganador? Puede que ya lo seas y solo necesites enterarte. Quizá aún no hayas llegado ahí, pero con un poco de dedicación y constancia vas a adquirir la capacidad de «hacer como si lo fueras hasta que lo seas» de verdad.",
          completed: false,
          rarity: "GREEN",
          card_module: "Date Simulation"
        },
        {
          id: 4,
          title: "Rare",
          description: "Así que allá va la primera pregunta: ¿te consideras un Ganador? Puede que ya lo seas y solo necesites enterarte. Quizá aún no hayas llegado ahí, pero con un poco de dedicación y constancia vas a adquirir la capacidad de «hacer como si lo fueras hasta que lo seas» de verdad.",
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
        </>
    );
}

export default IndexScreen;