import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import man from "../../images/connexion/man.png"
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import logo from "../../images/Group.png"


export default function OTPVerification() {
    return (
        <section className='otp-verification flex items-center justify-center min-h-screen'>
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
                    <div className="col-span-6 lg:col-span-4 md:px-20 sm:px-10 lg:px-1 h-full bg-white">
                        <div className=' px-5 md:px-20 lg:px-20'>
                            <div className='flex items-center justify-center pt-10'>
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
                                    <div className="pt-8 pb-36">
                                        <div className="flex items-center justify-center gap-5 btn-accounts">
                                            <Link to="/accueil" className="btn-nav-text flex items-center justify-center bg-green-deep btn-nav" href="#">
                                                <span>Connexion</span>
                                                <Arrow background="#FFFF" textcolor="#285246" />
                                            </Link>
                                            <Link to="/creation-compte" className="bg-gray-100 px-5 py-3.5 rounded-xl flex items-center justify-between gap-5 w-full">
                                                <span className="btn-has-account-grey-text">Pas encore de compte? <span className='btn-has-account-black-text'>Inscrivez vous</span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div className='w-full flex items-center justify-start text-[#D9D9D9] pt-20 pb-3'>
                                    <span className='connexion-side3-logo'>AIBIOMETRICS</span>
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
        </section>
    )
}
