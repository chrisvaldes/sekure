import React from 'react'

export default function CardSmile({logo}) {
  return (
    <div>
      <div className='btn-icon-cart bg-no-repeat bg-center' style={{backgroundImage : `url(${logo})`}}>
      </div>
    </div>
  )
}
