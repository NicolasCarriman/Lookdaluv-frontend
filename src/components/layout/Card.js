export default function Card (props){

    const handleClick = () => {
        
    };

    return (
        <div onClick={handleClick} className="card-item">
            <a className="card-title">{props.title}</a>
            <div className="card-description">
                {props.description}
            </div>
        </div>
    )
}