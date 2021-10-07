export default function PlayerBox(props) {
    
    return (
        <div class="player-box">
            <nav>
                {props.children}
            </nav>
        </div>
    )
}