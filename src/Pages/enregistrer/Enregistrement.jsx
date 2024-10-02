import React from 'react'
import { Link } from 'react-router-dom'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import iconArrow from "../../images/icons/arrowWhite.png"
import man from "../../images/connexion/man.png"

export default function Enregistrement() {
    return (
        <div className='otp-verification flex items-center justify-center min-h-screen bg-white'>
            <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-12'>
                <div className="w-full col-span-1"></div>
                <div className="w-full col-span-4">
                    <div className='flex flex-col items-center justify-center px-10 pt-10 sm:px-20 md:px-20 lg:px-8'>
                        <form action="" className=''>
                            <div className='connexion-connect py-5'>
                                Créer un compte
                            </div>
                            <div className='flex items-center justify-center  gap-[27px]'>
                                <div className='flex flex-col text-left w-full'>
                                    <label htmlFor="name" className='pricing-label'>Nom</label>
                                    <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                                </div>
                                <div className='flex flex-col text-left w-full'>
                                    <label htmlFor="name" className='pricing-label'>Prenom</label>
                                    <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-x-7 pt-5'>
                                <div className='flex flex-col text-left w-full'>
                                    <label htmlFor="name" className='pricing-label'>Company name*</label>
                                    <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                                </div>
                            </div>
                            <div className='flex flex-col text-left w-full pt-5'>
                                <label htmlFor="" className='pricing-label'>Adresse Mail</label>
                                <input type="email" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                            </div>

                            <div className='flex flex-col text-left w-full pt-5'>
                                <label htmlFor="" className='pricing-label'>Adresse Mail</label>
                                <input type="password" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                            </div>
                            <div class="pt-8">
                                <div class="flex items-center justify-between gap-5 ">
                                    <Link to="/" className="btn-account flex items-center justify-center text-nowrap" href="#">
                                        <span>Créer mon compte</span>
                                        <img src={iconArrow} alt="" />
                                    </Link>
                                    <Link to="/" class="btn-has-account bg-gray-100  px-5 py-3.5 flex items-center justify-between gap-5">
                                        <span class="btn-has-account-grey-text">Déjà un compte? <Link href="" className='btn-has-account-black-text'>Connectez-vous</Link></span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <div className="">
                        <div >
                            <div className=' w-full flex items-center justify-start text-[#D9D9D9] pt-20 pb-3'>
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
                <div className="relative w-full col-span-7">
                    <div className='grid grid-cols-1 lg:grid-cols-7'>
                        <div className="w-full col-span-2">
                        </div>
                        <div className="w-full col-span-5 ">
                            <div className="col-span-3 pt-16 pb-10 flex flex-col items-start justify-center gap-y-7 bg-[#EFFFF3]">
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
                        </div>
                    </div>
                    <div className='absolute creation-picture'>
                        <img src={man} alt="" className='w-11/12'/>
                    </div>
                </div>

            </div>
        </div>
    )
}
