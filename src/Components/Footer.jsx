import React from 'react'
import logo from "../images/Group.png"
import Message from './Message'
import { Link } from 'react-router-dom'
import arrowWhite from '../images/icons/arrowWhite.png'
import vectorWhite from "../images/footer/vector-white.png"
import womenFooter from '../images/footer/women-footer.png'


export default function Footer() {
    return (
        <div className='bg-green-color sm:py-10  footer-section'>
            <div className='relative footer-page grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex order-2 lg:order-1 footer-section-text flex-col items-start justify-center z-20 w-full'>
                    <div className='footer-title py-5 md:text-nowrap w-full'>
                        <span className='text-white'>Notre API Robuste</span> supportera <br />
                        votre business et son <br />
                        <span className='text-white'>expansion</span> sans problèmes
                    </div>
                    <div className='footer-content pt-5 md:text-nowrap w-full'>
                        Intégrez notre API en quelques lignes de code et concentrez-vous sur votre cœur de métier. <br />
                        Notre solution, robuste et fiable, s'adapte à toutes vos exigences. Prêt à révolutionner votre <br />
                        processus de vérification ? Commencez votre essai gratuit dès aujourd'hui.
                    </div>
                    <div class="  flex items-center justify-center lg:justify-start md:flex-nowrap  gap-5 pt-10 w-full">
                        <Link to="/" class="btn-footer-deep bg-color-deep flex items-center justify-around">
                            <div className="flex items-center justify-center gap-x-2">
                                <div class="text-nowrap flex items-center justify-center gap-x-2" >
                                    <span className="">Commencer</span>
                                    <span className="hidden sm:block">Gratuitement</span>
                                </div>
                                <img src={arrowWhite} alt="" />
                            </div>
                        </Link>
                        <Link to="/pricing" class=" btn-footer-white flex items-center justify-center sm:justify-around gap-x-2">
                            <div className="flex items-center justify-center">
                                <span class="text-green-deep text-nowrap ">Nous contacter</span>
                                <Message background="#285246" textcolor="#FFFF" />
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="relative lg:hidden footer-page-order flex items-center justify-center order-1 lg:order-2  w-full h-[350px]">
                    <div className="flex items-center justify-center absolute bottom-0 -left-3 lg:left-0 w-full">
                        <img src={womenFooter} alt="" className='w-[380px] h-[380px] sm:w-[482.12px] sm:h-[444px]' />
                    </div>
                </div>
                {/* <div className='absolute footer-accueil-absolute-bg ' >
                </div> */}
                <img src={womenFooter} alt="" className='womenFooter hidden lg:block absolute bottom-0 right-28 w-[482.12px] h-[444px] z-10' />
            </div>
            <div className="flex flex-wrap items-center justify-around w-full px-10">
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
                    <div className="flex-col gap-2 pb-5 hidden sm:block">
                        <div className='flex items-center justify-start'>
                            <div className='footer-grid-logo'>AIBIOMETRICS</div>
                            <img src={logo} alt="" className='logo' />
                        </div>
                        <form action="">
                            <textarea name="" id="" placeholder='Recevoir Newsletter
                                Enter your address mail' className="w-full p-2"></textarea>
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
