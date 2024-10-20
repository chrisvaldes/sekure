import React from 'react'

export default function CardAbout({fichier, textBnt, title, content}) {
    return (
        <div className='card-dotted'>
            <img src={fichier} alt="" className='' />
            <a href="" class=" text-white text-content font-family-content leading-normal-1 py-1">{textBnt}</a>
            <h4 class="card-dotted-title">
                {title}
            </h4>
            <p className='card-dotted-content pt-4'>
                {content}
            </p>
        </div>
    )
}
