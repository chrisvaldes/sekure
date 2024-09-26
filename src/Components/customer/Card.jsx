import React from 'react'

export default function Card({btnText, title, content}) {
    return (
        <div className='customer-card p-10'>
            <div className='flex flex-col '>
                <div className='btn-customer-card btn-text-customer-card text-white bg-green-color'>
                    {btnText}
                </div>
                <div className='customer-card-title text-nowrap pt-4'>
                    {title}
                </div>
                <div className='customer-card-content text-nowrap pt-7'>
                    {content}
                </div>
            </div>
        </div>
    )
}
