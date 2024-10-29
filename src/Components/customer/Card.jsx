import React from 'react'

export default function Card({btnText, title, content, bgColor}) {
    return (
        <div className='customer-card p-10 rounded-[25px]' style={{backgroundColor : `${bgColor}`}}>
            <div className='flex flex-col customer-card'>
                <div className='btn-customer-card btn-text-customer-card text-white bg-green-color flex items-center justify-center text-nowrap'>
                    {btnText}
                </div>
                <div className='customer-card-title text-nowrap pt-4'>
                    {title}
                </div>
                <div className='customer-card-content pt-7'>
                    {content}
                </div>
            </div>
        </div>
    )
}
