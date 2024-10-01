import React from 'react'
import checkAbout from "../../images/about/checkAbout.png"

export default function WomenCard() {
    return (
        <div className='flex items-center'>
            <div>
                <img src={checkAbout} alt="" />
            </div>
            <div className='pt-10 px-5'>
                <div className="about-women-subtitle">
                    IA au cœur de la solution :
                </div>
                <div className="about-women-subtitle">
                    Automatiser les tâches répétitives et <br />
                    libérez ainsi du temps pour vos équipes.
                </div>
            </div>
        </div>
    )
}
