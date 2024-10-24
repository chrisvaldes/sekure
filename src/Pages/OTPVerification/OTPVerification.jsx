import React from 'react'
import { Link } from 'react-router-dom'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import man from "../../images/connexion/man.png"
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import vector from "../../images/connexion/Vector.png"
import logo from "../../images/Group.png"
import iconArrow from "../../images/icons/arrowWhite.png"
import NavBar from '../../Components/NavBar'


export default function OTPVerification() {
    return (
        <div className="">
            <section>
                <NavBar />
            </section>
            <section className='otp-verification flex items-center justify-center min-h-screen bg-white'>
                <div className='w-full relative'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9">
                        <div className="col-span-2 hidden lg:block h-full bg-green-color">
                            <div className='absolute connexion-picture'>
                                <img src={man} alt="" />
                            </div>
                            <div className="AI-logo flex items-center justify-center h-full">
                                <span>
                                    AIBIOMETRICS
                                </span>
                                <img src={logo} alt="" className="pl-2" />
                            </div>
                        </div>
                        <div className="col-span-3 hidden md:hidden lg:block pt-16 pb-10 flex-col bg-white">
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            <ConnexionCard
                                title="Verifiez les documents d’identité"
                                content={
                                    <div>
                                        Assurez-vous de la conformité des pièces d’identité <br />
                                        de vos clients
                                    </div>
                                }
                            />
                            {/* Répétez pour les autres ConnexionCard */}
                        </div>
                        <div className="col-span-6 lg:col-span-4 md:px-20 sm:px-10 lg:px-1 h-full bg-[-1%_30%] lg:bg-[center_bottom] lg:bg-none" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat" }}>
                            <div className=' px-5 md:px-20 lg:px-20'>
                                <div className='flex flex-col items-center justify-center pt-10'>
                                    <form action="" className='w-full'>
                                        <div className='connexion-connect py-5'>
                                            Vérification OTP
                                        </div>
                                        <div className='flex items-center justify-center gap-[27px]'>
                                            <div className='flex flex-col text-left w-full'>
                                                <label htmlFor="name" className='pricing-label pb-5'>Entrez le code OTP envoyé à l’adresse aib______@gmail.com</label>
                                                <div className='flex items-center justify-center gap-2'>

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />

                                                    <input type="text" name="" id="" placeholder='0' className='verification-input w-full text-center' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-left pt-4'>
                                            <span className="pricing-get-account-link text-[#898989]">Vous n'avez pas reçu de code? <Link href="" className='text-green-color'>Renvoyez le code</Link></span>
                                        </div>
                                        <div className="pt-8 pb-24 lg:pb-36">
                                            <div class="flex  flex-wrap lg:flex-nowrap items-center justify-center gap-5 btn-accounts">
                                                {/* <button type='submit' className="btn-account flex items-center justify-center text-nowrap w-full" href="#">
                                                <span className='w-full text-center'>Créer mon compte</span>
                                                <img src={iconArrow} alt="" />
                                            </button> */}
                                                <Link to="/accueil" className="btn-account flex items-center justify-center text-nowrap w-full">
                                                    <span className='w-full text-center'>Créer mon compte</span>
                                                    <img src={iconArrow} alt="" />
                                                </Link>
                                                {/* <Link to="/accueil" type='submit' className="btn-connect btn-nav-text flex items-center justify-around bg-green-color btn-nav  w-full" href="#">
                                                <div className="w-full flex items-center justify-center">
                                                    <span>continuer</span>
                                                </div>
                                                <Arrow background="#FFFF" textcolor="#285246" />
                                            </Link> */}
                                                {/* <Link to="/creation-compte" class=" bg-gray-100  px-5 py-3.5 text-center flex items-center justify-center lg:justify-start gap-5 w-full">
                                                <span class="btn-has-account-grey-text ">Pas de compte? <span className='btn-has-account-black-text'>Inscrivez vous</span></span>
                                            </Link> */}
                                            </div>
                                        </div>

                                    </form>
                                    <div className='w-full'>
                                        <div className='w-full flex items-center justify-start text-[#D9D9D9] lg:pt-20 pb-3'>
                                            <span className='connexion-side3-logo pr-2'>AIBIOMETRICS</span>
                                            <img src={vectorLogo} alt="" />
                                        </div>
                                        <div className="connexion-side3-content">
                                            Pionniers de la biométrie par Intelligence Artificielle. Des solutions innovantes <br />
                                            d'identification biométrique pour une sécurité renforcée. Sécurisez vos établissements <br />
                                            financiers avec nos solutions biométriques de pointe. Authentification forte, lutte contre la <br />
                                            fraude. Contactez nos experts pour une démonstration. © AIbiometrics. Tous droits réservés.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
