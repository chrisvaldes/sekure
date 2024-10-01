import React from 'react'
import imgLogo from "../../images/connexion/circleConnexion.png"

export default function ConnexionCard({title, content}) {
  return (
    <div className='flex items-center justify-center gap-x-5 pl-28'>
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
