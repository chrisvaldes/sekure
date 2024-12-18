import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import Input from '../../Components/Input'
import man from "../../images/connexion/man.png"
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import vector from '../../images/connexion/Vector.png'
import logo from "../../images/Group.png"
import { ConnexionValidationSchema } from '../../validation/connexion-validation'
import iconArrow from "../../images/icons/arrowWhite.png"
import NavBar from '../../Components/NavBar'


export default function Connexion() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ConnexionValidationSchema)
  })

  const handleConnexion = async (data, e) => {
    e.preventDefault()
    console.log("email : ", data.email)
    console.log("password : ", data.password)
    navigate("/verification")
  }

  return (
    <div className="">
      <section>
        <NavBar />
      </section>
      <section className='connexion flex items-center justify-center min-h-screen bg-white lg:bg-none pt-20'>
        <div className='w-full relative'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9" >
            <div className="col-span-2 hidden items-center justify-center md:hidden lg:block h-full connexion-col-2 bg-green-color">
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
            <div className="col-span-3 hidden sm:hidden md:hidden lg:block pt-16  flex-col bg-white">
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
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-4 h-full bg-white bg-[-2%_35%] lg:bg-[left_center]" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat" }}>
              <div className='px-5'>
                <div className='flex flex-col items-center justify-center pt-10 sm:px-20 md:px-20 lg:px-8'>
                  <form action="" className='w-full' onSubmit={handleSubmit(handleConnexion)}>
                    <div className='connexion-connect py-5'>
                      Se Connecter
                    </div>
                    <div className='flex items-center justify-center  gap-[27px]'>
                      <div className='flex flex-col text-left w-full'>
                        <label htmlFor="email" className='pricing-label pb-1'>Adresse Email</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder='Your email'
                          id="email"
                          register={register}
                          error={errors.email}
                          className='pricing-input w-full'
                        />
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-x-7 pt-5'>
                      <div className='flex flex-col text-left w-full'>
                        <label htmlFor="password" className='pricing-label pb-1'>Mot de passe</label>
                        <Input
                          type="password"
                          name="password"
                          register={register}
                          error={errors.password}
                          placeholder='Mot de passe'
                          className='pricing-input w-full'
                        />
                      </div>
                    </div>
                    <div class="pt-8 pb-16">
                      <div class="flex  flex-wrap lg:flex-nowrap items-center justify-center gap-5 btn-accounts">
                        <button type='submit' className="btn-account flex items-center justify-center text-nowrap w-full" href="#">
                          <span className='w-full text-center'>Créer mon compte</span>
                          <img src={iconArrow} alt="" />
                        </button>
                        <Link to="/creation-compte" class="btn-has-account px-5 py-3.5 text-center flex items-center justify-center lg:justify-start gap-5 w-full">
                          <span class="btn-has-account-grey-text ">Pas de compte? <span className='btn-has-account-black-text'>Inscrivez vous</span></span>
                        </Link>
                      </div>
                    </div>
                  </form>
                  <div className="w-full pb-10 ">
                    <div >
                      <div className=' w-full flex items-center justify-start gap-x-2 text-[#D9D9D9] lg:pt-20 pb-3'>
                        <span className='connexion-side3-logo'>AIBIOMETRICS</span>
                        <img src={vectorLogo} alt="" />
                      </div>
                      <div className="connexion-side3-content text-justify">
                        Pionniers de la biométrie par Intelligence Artificielle. Des solutions innovantes
                        d'identification biométrique pour une sécurité renforcée. Sécurisez vos établissements
                        financiers avec nos solutions biométriques de pointe. Authentification forte, lutte contre la
                        fraude. Contactez nos experts pour une démonstration. © AIbiometrics. Tous droits réservés.
                      </div>
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
