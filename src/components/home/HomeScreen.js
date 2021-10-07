import Card from '../layout/Card';
import PlayerBox from '../layout/PlayerBox';
import '../../css/home.css'

function HomeScreen() {

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
        title: "LA META: ACTIVARSUPUNTO GG",
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
      }
    ]

    return (

      <div className="home-background-box">

        <div className="menu-bar">
            <input type="submit" value="Perfil" className="menu-bar-item"/>
            <input type="submit" value="Modulos" className="menu-bar-item"/>
            <input type="submit" value="Herramientas" className="menu-bar-item"/>
            <input type="submit" value="Logros" className="menu-bar-item"/>
            <input type="submit" value="Soporte" className="menu-bar-item"/>
        </div>

        <div className="scroll-bar">
            
        </div>

        <PlayerBox>

            {cards.map(card => {
              return <Card title={card.title} description={card.description}></Card>
            })}

        </PlayerBox>
              
      </div>

    );
}

export default HomeScreen;