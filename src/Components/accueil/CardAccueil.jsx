import React from 'react'

export default function CardAccueil({ img, title, content }) {
    return (
        <div className='flex gap-x-10'>
            <div className='btn-icon-cart bg-no-repeat bg-center' style={{backgroundImage : `url(${img})`}}>
            </div>
            <div className="">
                <div className="text-left card-icon-title pb-2">
                    {title}
                </div>
                <div className="text-left card-icon-content">
                    {content}
                </div>
            </div>
        </div>
    )
}
