import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import Input from '../../Components/Input'
import man from "../../images/connexion/man.png"
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import iconArrow from "../../images/icons/arrowWhite.png"
import { CreationCompteValidationSchema } from '../../validation/creation-compte-validate'
import vector from "../../images/connexion/Vector.png"
import NavBar from '../../Components/NavBar'

export default function Enregistrement() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CreationCompteValidationSchema)
    })

    const handleCreationCompte = async (data, e) => {
        e.preventDefault()
        console.log("email : ", data.email)
        console.log("password : ", data.password)
        navigate("/accueil")
    }


    return (
        <div className="">
            <section>
                <NavBar />
            </section>
            <div className="flex items-center justify-center min-h-screen bg-white w-full">
                <div className='otp-verification bg-white w-full'>
                    <div className='w-full grid grid-col-1 md:grid-cols-3 lg:grid-cols-12'>
                        <div className="w-full col-span-1 md:hidden lg:block"></div>
                        <div className="w-full px-5 md:col-span-3 col-span-4 lg:col-span-4 bg-[-2%_10%] lg:bg-[left-center] lg:bg-none" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat" }}>
                            <div className=' flex flex-col items-center justify-center px-5 pt-10 sm:px-20 md:px-20 lg:px-8 w-full'>
                                <form action="" className='w-full' onSubmit={handleSubmit(handleCreationCompte)}>
                                    <div className='connexion-connect pt-20 pb-5'>
                                        Créer un compte
                                    </div>
                                    <div className='flex items-center justify-center  gap-[27px]'>
                                        <div className=' flex-col text-left w-full hidden lg:block'>
                                            <label htmlFor="nom" className='pricing-label'>Nom</label>
                                            <Input
                                                type="text"
                                                name="nom"
                                                placeholder='Votre nom'
                                                id="name"
                                                register={register}
                                                error={errors.nom}
                                                className='pricing-input w-full'
                                            />
                                        </div>
                                        <div className='flex-col text-left w-full hidden lg:block'>
                                            <label htmlFor="prenom" className='pricing-label'>Prenom</label>
                                            <Input
                                                type="text"
                                                name="prenom"
                                                placeholder='Votre prenom'
                                                id="prenom"
                                                register={register}
                                                error={errors.prenom}
                                                className='pricing-input w-full'
                                            />
                                            {/* <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' /> */}
                                        </div>
                                    </div>

                                    {/* nom  */}
                                    <div className='flex-col text-left w-full block lg:hidden'>
                                        <label htmlFor="nom" className='pricing-label'>Nom</label>
                                        <Input
                                            type="text"
                                            name="nom"
                                            placeholder='Votre nom'
                                            id="name"
                                            register={register}
                                            error={errors.nom}
                                            className='pricing-input w-full'
                                        />
                                    </div>

                                    {/* prenom  */}
                                    <div className='flex-col text-left w-full block lg:hidden'>
                                        <label htmlFor="prenom" className='pricing-label'>Prenom</label>
                                        <Input
                                            type="text"
                                            name="prenom"
                                            placeholder='Votre prenom'
                                            id="prenom"
                                            register={register}
                                            error={errors.prenom}
                                            className='pricing-input w-full'
                                        />
                                    </div>

                                    <div className='flex flex-col text-left w-full pt-5'>
                                        <label htmlFor="email" className='pricing-label'>Adresse Mail</label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder='Votre email'
                                            id="email"
                                            register={register}
                                            error={errors.email}
                                            className='pricing-input w-full'
                                        />
                                        {/* <input type="email" name="" id="" placeholder='Your company' className='pricing-input w-full' /> */}
                                    </div>

                                    <div className='flex flex-col text-left w-full pt-5'>
                                        <label htmlFor="password" className='pricing-label'>Mot de passe</label>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder='Votre mot de passe'
                                            id="password"
                                            register={register}
                                            error={errors.password}
                                            className='pricing-input w-full'
                                        />
                                        {/* <input type="password" name="" id="" placeholder='Mot de passe' className='pricing-input w-full' /> */}
                                    </div>
                                    <div class="pt-8">
                                        <div class="flex items-center justify-between gap-5 flex-wrap lg:flex-nowrap">
                                            <button type='submit' className="btn-account flex items-center justify-center text-nowrap w-full" href="#">
                                                <span className='w-full text-center'>Créer mon compte</span>
                                                <img src={iconArrow} alt="" />
                                            </button>
                                            <Link to="/" class="btn-has-account  px-5 py-3.5 flex items-center justify-center lg:justify-start gap-5 text-nowrap w-full">
                                                <span class="btn-has-account-grey-text">Déjà un compte? <span className='btn-has-account-black-text'>Connectez-vous</span></span>
                                            </Link>
                                        </div>
                                    </div>


                                    <div className=' w-full flex items-center justify-start text-[#D9D9D9] pt-20 pb-3'>
                                        <span className='connexion-side3-logo pr-2'>AIBIOMETRICS</span>
                                        <img src={vectorLogo} alt="" />
                                    </div>
                                    <div className="connexion-side3-content text-justify">
                                        Pionniers de la biométrie par Intelligence Artificielle. Des solutions innovantes
                                        d'identification biométrique pour une sécurité renforcée. Sécurisez vos établissements
                                        financiers avec nos solutions biométriques de pointe. Authentification forte, lutte contre la
                                        fraude. Contactez nos experts pour une démonstration. © AIbiometrics. Tous droits réservés.
                                    </div>
                                </form>
                                {/* <div className="w-full">
                                <div className='w-full'>
                                    
                                </div>

                            </div> */}
                            </div>
                        </div>
                        <div className="relative w-full hidden lg:block lg:col-span-7">
                            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7'>
                                <div className="w-full col-span-2 md:hidden lg:block lg:col-span-2">
                                </div>
                                <div className="w-full col-span-5 hidden lg:block lg:col-span-5 ">
                                    <div className="col-span-3 pt-10 pb-10 flex flex-col items-start justify-center bg-[#EFFFF3]">

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
                                <img src={man} alt="" className='w-11/12' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
