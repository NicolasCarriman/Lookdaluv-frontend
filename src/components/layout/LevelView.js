export default function LevelView (props){

    return (
        <div className="level-view-container">
            <a className="">{props.title}</a>
            <div className="">
                {props.description}
            </div>
        </div>
    )
}