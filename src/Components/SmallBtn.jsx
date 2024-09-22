import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallBtn({content}) {
  return (
    <div className='btn-small'>
      <Link>{{content}}</Link>
    </div>
  )
}
