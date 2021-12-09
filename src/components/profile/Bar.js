import React from 'react'
import '../../css/bar.css'


export default function Bar (props) {

    return (
        <>
            <div className="bar">
                <div className='Zside' ></div>
                <div className='Xside' ></div>
                <div className='Yside' ></div>
                <h1 id="module-name">{props.title}</h1>
            </div>
        </>
    )
}

