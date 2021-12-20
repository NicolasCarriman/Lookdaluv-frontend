import importScript from '../../actions/script-load.js';
export default function Card (props){
    importScript("../js/card.js");
    
    return (

        <div class="card-item">
            <a class="card-title">{props.title}</a>
            <div class="card-description">
                {props.description}
            </div>
        </div>
    )
}