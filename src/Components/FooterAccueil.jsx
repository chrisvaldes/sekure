import React from 'react'
import Arrow from './Arrow'
import ArrowGreen from './ArrowGreen'
import logo from "../images/Group.png"

export default function FooterAccueil() {
    return (
        <div className='bg-green-color px-20'>
            <div className="flex items-center justify-around">
                <div className="">
                    <div className="title text-green-deep">
                        La vérification n’est plus un <br />
                        obstacle pour votre business, <br />
                        <span className='text-white'>
                            Acceptez plus facilement vos <br />
                            utilisateurs
                        </span>
                    </div>
                    <div className="title-content-1 py-4">
                        Prêt à simplifier votre processus d'onboarding et à réduire le taux d'abandon ? Notre <br />
                        solution de vérification d'identité vous permet d'accélérer la croissance de votre entreprise <br />
                        tout en renforçant la sécurité. Essayez notre plateforme gratuitement dès aujourd'hui et <br />
                        découvrez l'impact positif sur votre business.
                    </div>
                    <div className='flex flex-wrap items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-[28px] pt-[28px] pb-16'>
                        <div className='btn flex items-center justify-center  bg-green-deep '>
                            <button className='btn-text text-white text-nowrap'>
                                Commencer gratuitement
                            </button>
                            <Arrow />
                        </div>
                        <div className='btn flex items-center justify-around bg-white'>
                            <button className='btn-text text-green-deep'>
                                Nous Contacter
                            </button>
                            <ArrowGreen />
                        </div>
                    </div>
                </div>
                <div className="background-footer">

                </div>
            </div>
            <div className="flex flex-wrap items-center justify-around w-full">
                <div className="flex w-full  gap-10 flex-wrap items-center justify-between">
                    <div className="flex flex-col">
                        <span className='grid-footer-grid-title'>Explorer</span>
                        <span className='grid-footer-grid-content'>Documentation</span>
                        <span className='grid-footer-grid-content'>Dashboard</span>
                        <span className='grid-footer-grid-content'>Confidentialité</span>
                        <span className='grid-footer-grid-content'>Termes</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='grid-footer-grid-title'>Explorer</span>
                        <span className='grid-footer-grid-content'>Accueil</span>
                        <span className='grid-footer-grid-content'>A propos</span>
                        <span className='grid-footer-grid-content'>Contact</span>
                        <span className='grid-footer-grid-content'>FAQ</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='grid-footer-grid-title'>KYC</span>
                        <span className='grid-footer-grid-content'>Comment ça marche</span>
                        <span className='grid-footer-grid-content'>interface KYC</span>
                        <span className='grid-footer-grid-content'>Options KYC</span>
                        <span className='grid-footer-grid-content'>Avantages</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='grid-footer-grid-title'>AML</span>
                        <span className='grid-footer-grid-content'>Comment ça marche</span>
                        <span className='grid-footer-grid-content'>Process AML</span>
                        <span className='grid-footer-grid-content'>Requis</span>
                        <span className='grid-footer-grid-content'>Avantages</span>
                    </div>
                    <div className="flex flex-col">
                        <span className='grid-footer-grid-title'>Commencer</span>
                        <span className='grid-footer-grid-content'>Pricing</span>
                        <span className='grid-footer-grid-content'>Se Connecter</span>
                        <span className='grid-footer-grid-content'>Voir Demo</span>
                    </div>
                    <div className="flex flex-col gap-2 pb-5">
                        <div className='flex items-center justify-start'>
                            <div className='footer-grid-logo'>AIBIOMETRICS</div>
                            <img src={logo} alt="" className='logo' />
                        </div>
                        <textarea name="" id="" placeholder='Recevoir Newsletter
                        Enter your address mail' className="p-2"></textarea>
                        <div className='btn flex items-center justify-around bg-green-deep'>
                            <button className='btn-text text-white'>
                                Recevoir NewsLetter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
