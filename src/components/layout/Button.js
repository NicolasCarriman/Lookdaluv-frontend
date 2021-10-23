export default function Button (props){
    return (
        <div className="main__box" id='main-button-box'>
            <button className='main__btnneon' id='btnneona' >{props.value}</button>
            <button className='main__btnneonb' id='btnneonb' >{props.value}</button>
        </div>
    )
}