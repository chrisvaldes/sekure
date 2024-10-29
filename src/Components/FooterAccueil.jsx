import React from 'react'
import logo from "../images/Group.png"
import Message from './Message'
import { Link } from 'react-router-dom'
import arrowWhite from '../images/icons/arrowWhite.png'
import manFooter from "../images/footer/man-footer.png"

export default function FooterAccueil() {

    return (
        <div className='bg-green-color sm:py-10  footer-section'>
            <div className='relative footer-page grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex order-2 lg:order-1 footer-section-text flex-col items-start justify-center z-20 w-full px-5 lg:px-20'>
                    <div className="">
                        <div className="hidden lg:block">
                            <div className='footer-title py-5 md:text-center lg:text-left text-nowrap w-full'>
                                <span className='text-green-deep'>La vérification n'est plus un <br />
                                    obstacle pour votre business,<br /></span>
                                <span className='text-green-deep md:text-white'>Acceptez plus facilement vos <br />
                                    utilisateurs</span>
                            </div>
                            <div className='footer-content pt-5 flex items-center justify-center lg:justify-start  md:text-justify lg:text-left w-full'>
                                Intégrez notre API en quelques lignes de code et concentrez-vous sur votre cœur de métier. <br />
                                Notre solution, robuste et fiable, s'adapte à toutes vos exigences. Prêt à révolutionner votre <br />
                                processus de vérification ? Commencez votre essai gratuit dès aujourd'hui.
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <div className='footer-title py-5 md:text-center lg:text-left w-full'>
                                <span className='text-green-deep'>La vérification n'est plus un
                                    obstacle pour votre business,<br /></span>
                                <span className='text-green-deep md:text-white'>Acceptez plus facilement vos <br />
                                    utilisateurs</span>
                            </div>
                            <div className='footer-content pt-5 flex items-center justify-center lg:justify-start text-justify lg:text-left w-full'>
                                Intégrez notre API en quelques lignes de code et concentrez-vous sur votre cœur de métier.
                                Notre solution, robuste et fiable, s'adapte à toutes vos exigences. Prêt à révolutionner votre
                                processus de vérification ? Commencez votre essai gratuit dès aujourd'hui.
                            </div>
                        </div>
                    </div>
                    <div class="  flex items-center justify-center lg:justify-start md:flex-nowrap  gap-5 pt-10 w-full">
                        <Link to="/" class="flex  accueil-btn w-1/2">
                            <div className="flex text-nowrap items-center justify-around w-full">
                                <div className='flex items-center'>
                                    Commencer
                                    <span className="hidden sm:block pl-1"> gratuitement</span>
                                </div>
                                <img src={arrowWhite} alt="" />
                            </div>
                        </Link>
                        <Link to="/pricing" class=" accueil-btn-clean btn bg-white flex items-center justify-around w-1/2 gap-x-2">
                            <div class="btn-text flex text-green-deep text-nowrap "><span className='hidden sm:block pr-1'>Nous </span> contacter</div>
                            <Message background="#285246" textcolor="#FFFF" />
                        </Link>

                    </div>
                </div>
                <div className="relative  footer-page-order-other lg:hidden block items-center justify-center order-1 lg:order-2  w-full h-[350px]">
                    <div className="flex items-center justify-center absolute bottom-0 lg:left-0 w-full">
                        <img src={manFooter} alt="" className='w-[350px] h-[380px] sm:w-[420.12px] sm:h-[444px]' />
                    </div>
                </div>
                <img src={manFooter} alt="" className='womenFooter hidden lg:block absolute bottom-0 right-28 w-[420.12px] h-[470px] z-10' />
            </div>
            <div className="flex flex-wrap items-center justify-around w-full py-10 sm:px-5 md:px-10 lg:px-20">
                <div className="flex w-full  gap-10 flex-wrap items-center mx-8 md:mx-0 md:justify-between">
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
                    <div className="flex-col gap-2 pb-5 hidden md:block">
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

// return (
//     <div className='bg-green-color py-10  footer-section'>
{/* <div className="flex items-center justify-around">
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
                            <img src={arrowWhite} alt="" />
                        </div>
                        <div className='btn flex items-center justify-around bg-white'>
                            <button className='btn-text text-green-deep'>
                                Nous Contacter
                            </button>
                            <Message background="#285246" textcolor="#FFFF" />
                        </div>
                    </div>
                </div>
                <div className="background-footer">
                </div>


            </div> */}
{/* <div className='relative footer-page'>
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
                <div className='absolute footer-absolute-bg ' >
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
} */}
