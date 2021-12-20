import Card from '../layout/Card';
import PlayerBox from '../layout/PlayerBox';
import MenuBar from '../layout/MenuBar';
import '../../css/home.css'
import '../../css/menubar.css'

function HomeScreen() {


    let cards = [
      {
        id: 2,
        title: "",
        description: "",
        completed: false,
        rarity: "WHITE",
        card_module: "Simpl Deconstructor"
      },
      {
        id: 3,
        title: "",
        description: "",
        completed: false,
        rarity: "BLUE",
        card_module: "Chat Bot"
      },
      {
        id: 4,
        title: "",
        description: "",
        completed: false,
        rarity: "GREEN",
        card_module: "Date Simulation"
      },
      {
        id: 1,
        title: "",
        description: "",
        completed: false,
        rarity: "GREEN",
        card_module: "Personal Growth"
      },
      {
        id: 1,
        title: "",
        description: "",
        completed: false,
        rarity: "GREEN",
        card_module: "Personal Growth"
      },
      {
        id: 4,
        title: "",
        description: "",
        completed: false,
        rarity: "GREEN",
        card_module: "Date Simulation"
      },
      {
        id: 4,
        title: "",
        description: "",
        completed: false,
        rarity: "GREEN",
        card_module: "Date Simulation"
      },
    ]

    return (

      <div className="home-background-box">

        <MenuBar></MenuBar>

        <div className="scroll-bar"></div>

        <PlayerBox>

            {cards.map(card => {
              return <Card title={card.title} description={card.description}></Card>
            })}

        </PlayerBox>
              
      </div>

    );
}

export default HomeScreen;