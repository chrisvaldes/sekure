import React from 'react'

export default function MiniCard({title, content}) {
  return (
    <div >
      <div className='card-choice'>
        <div className='card-choice-title'>
            {title}
        </div>
        <div className='card-choice-content'>
            {content}
        </div>
      </div>
    </div>
  )
}
