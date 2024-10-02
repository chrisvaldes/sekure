import React from 'react'
import logo from "../images/Group.png"
import Message from './Message'
import { Link } from 'react-router-dom'
import arrowWhite from '../images/icons/arrowWhite.png'


export default function Footer() {
    return (
        <div className='bg-green-color py-10  footer-section'>
            <div className='relative footer-page'>
                <div className='flex flex-col items-start justify-center'>
                    <div className='screening-section1-title py-5'>
                        <span className='text-white'>Notre API Robuste</span>supportera <br />
                        votre business et son <br />
                        <span className='text-white'>expansion</span> sans problèmes
                    </div>
                    <div className='screening-section1-content pt-5'>
                        Intégrez notre API en quelques lignes de code et concentrez-vous sur votre cœur de métier. <br />
                        Notre solution, robuste et fiable, s'adapte à toutes vos exigences. Prêt à révolutionner votre <br />
                        processus de vérification ? Commencez votre essai gratuit dès aujourd'hui.
                    </div>
                    <div class=" flex flex-wrap  gap-5 pt-10">
                        <Link to="/" class="bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                            <span class="text-nowrap" >Commencer Gratuitement</span>
                            <img src={arrowWhite} alt="" />
                        </Link>
                        <Link to="/pricing" class=" bg-white  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                            <span class="text-green-deep text-nowrap pr-5">Nous contacter</span>
                            <Message background="#285246" textcolor="#FFFF" />
                        </Link>

                    </div>
                </div>
                <div className='absolute footer-accueil-absolute-bg ' >
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
                        <form action="">
                            <textarea name="" id="" placeholder='Recevoir Newsletter
                                Enter your address mail' className="p-2"></textarea>
                            <div className='btn flex items-center justify-around bg-green-deep'>
                                <button className='btn-send-letter text-white'>
                                    Recevoir NewsLetter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
