import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import ConnexionCard from '../../Components/connexion/ConnexionCard'
import man from "../../images/connexion/man.png"
import vectorLogo from '../../images/connexion/Vector-connexion-logo.png'
import logo from "../../images/Group.png"


export default function Connexion() {
  return (
    <section className='connexion h-screen'>
      <div className='w-full relative'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
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
          <div className="col-span-4 md:col-span-3 lg:col-span-4 h-full bg-white">
            <div className='px-16'>
              <div className='flex flex-col items-center justify-center pt-10 sm:px-20 md:px-20 lg:px-8'>
                <form action="" className='w-full'>
                  <div className='connexion-connect py-5'>
                    Se Connecter
                  </div>
                  <div className='flex items-center justify-center  gap-[27px]'>
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label pb-1'>Adresse Email</label>
                      <input type="email" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-x-7 pt-5'>
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label pb-1'>Mot de passe</label>
                      <input type="password" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                    </div>
                  </div>
                  <div class="pt-8 pb-16">
                    <div class="flex items-center justify-center gap-5 btn-accounts">
                      <Link to="/verification" className="btn-connect btn-nav-text flex items-center justify-around bg-green-deep btn-nav " href="#">
                        <span>Envoyer</span>
                        <Arrow background="#FFFF" textcolor="#285246" />
                      </Link>
                      <Link to="/creation-compte" class=" bg-gray-100  px-5 py-3.5 rounded-xl flex items-center justify-between gap-5 w-full">
                        <span class="btn-has-account-grey-text">Pas encore de compte? <span className='btn-has-account-black-text'>Inscrivez vous</span></span>
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="w-full">
                  <div >
                    <div className=' w-full flex items-center justify-start gap-x-2 text-[#D9D9D9] pt-20 pb-3'>
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
        </div>
      </div>
    </section>
  )
}
