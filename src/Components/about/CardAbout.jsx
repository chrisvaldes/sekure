import React from 'react'

export default function CardAbout({fichier, textBnt, title, content}) {
    return (
        <div className='rounded-2xl p-10 bg-white mt-10'>
            <img src={fichier} alt="" className='' />
            <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-color rounded-full px-3 py-1">{textBnt}</a>
            <h4 class="text-cyan-deep text-lg font-weight-title-3 font-family-title-2 leading-normal mb-5 font-bold w-full">
                {title}
            </h4>
            <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1'>
                {content}
            </p>
        </div>
    )
}
