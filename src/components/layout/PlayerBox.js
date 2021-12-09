export default function PlayerBox(props) {
    
    return (
        <div className="player-box">
            <nav>
                {props.children}
            </nav>
        </div>
    )
}