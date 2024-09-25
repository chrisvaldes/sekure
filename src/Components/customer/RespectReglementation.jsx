import React from 'react'

export default function RespectReglementation({image, title, content}) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <img src={image} alt="" />
      </div>
      <div className='respect-grid-title py-5'>
        {title}
      </div>
      <div className='respect-grid-content'>
        {content}
      </div>
    </div>
  )
}
