import React from 'react'
import imgLogo from "../../images/connexion/circleConnexion.png"

export default function ConnexionCard({title, content}) {
  return (
    <div className='flex items-center justify-center py-5 px-2 gap-x-4 lg:pl-28'>
      <div className="">
        <img src={imgLogo} alt="" />
      </div>
      <div className="">
        <div className="connexion-side2-title">{title}</div>
        <div className="connexion-side2-content">{content}</div>
      </div>
    </div>
  )
}
