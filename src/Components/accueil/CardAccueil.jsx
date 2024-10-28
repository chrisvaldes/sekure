import React from 'react'

export default function CardAccueil({ img, title, content }) {
    return (
        <div className='flex gap-x-10   items-start justify-start'>
            <div className='  bg-no-repeat bg-center'>
                <img src={img} alt="" className='w-[300px]'/>
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
