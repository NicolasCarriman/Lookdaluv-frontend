import React from 'react'
import Bar from '../profile/Bar';
import LineGraphic from '../profile/LineGraphic';
import '../../css/profile.css'


export default function Profile (props) {

    return (
        <>
            <div className="">
                <div>
                    <div className="container" id="contenedor">
                        <Bar title="Deconstructor"/>
                        <Bar title="Chat Bot"/>
                        <Bar title="Date simulation"/>
                        <Bar title="Social Engineering"/>
                    </div>

                </div>
                <LineGraphic/>
            </div>

        </>
    )
}