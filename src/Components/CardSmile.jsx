import React from 'react'

export default function CardSmile({ logo, title, content }) {
  return (
    <div className='flex items-start justify-between w-full gap-5 '>
      <div className='' >
        <img src={logo} alt="" className='w-[100px]' />
      </div>
      <div className="">
        <div className="screening-section1-card-title pb-2">
          {title}
        </div>
        <div className="screening-section1-card-content">
          {content}
        </div>
      </div>
    </div>
  )
}
