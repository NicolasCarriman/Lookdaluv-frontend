import React from 'react'
import Bar from '../profile/Bar';
import LineGraphic from '../profile/LineGraphic';
import '../../css/profile.css'


export default function Profile (props) {

    return (
        <>
            <div className="">
                <div>
                    <div className="container">
                        <Bar title="Deconstructor"/>
                        <Bar title="Simulador de entrevistas"/>
                        <Bar title="Flujo de trabajo"/>
                        <Bar title="Portfolio booster"/>
                    </div>

                </div>
                <LineGraphic/>
            </div>

        </>
    )
}