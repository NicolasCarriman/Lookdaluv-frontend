export default function Card (props){
    
    return (
        <div class="card-item">
            <a class="card-title">{props.title}</a>
            <div class="card-description">
                {props.description}
            </div>
        </div>
    )
}