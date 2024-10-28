import React from 'react'

export default function SmallCheckCircle({ title }) {
    return (

        <div className="flex items-center justify-center gap-x-2">
            <div className='small-check-circle flex items-center justify-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
            <div className="screening-grid-title">
                {title}
            </div>
        </div>
    )
}
