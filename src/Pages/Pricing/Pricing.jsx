import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import FooterAccueil from '../../Components/FooterAccueil'
import Input from '../../Components/Input'
import NavBar from '../../Components/NavBar'
import iconArrow from "../../images/icons/arrowWhite.png"
import pricingBg from '../../images/pricing/pricing-bg.png'
import { PricingValidationSchema } from '../../validation/pricing-validation'

export default function Pricing() {

  const navigate = useNavigate()
 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(PricingValidationSchema)
})

const handlePrincingNext = async (data, e) => {
  e.preventDefault()
  console.log("nom : ", data.nom)
  console.log("prenom : ", data.prenom)
  console.log("entreprise : ", data.company)
  console.log("site web : ", data.website)
  console.log("email : ", data.email)

  const item = {
    nom: data.nom,
    prenom: data.prenom,
    company: data.company,
    poste : data.poste,
    email: data.email,
    website: data.website,
};

  navigate("/pricing-final", {state : {item}})
}

  return (
    <div>
      <div className=''>
        <section>
          <NavBar />
        </section>
        <div className='pricing'>
          <section className='bg-white pricing-section' >
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:pt-16'>
              <div className='pricing-bg relative flex flex-col text-left px-5 sm:px-20 pt-20 lg:pb-[48rem] items-start vector-pricing'>
                <Link to="/" className='pricing-contact-btn flex items-center justify-center'>
                  Contactez nous
                </Link>
                <h2 className='pricing-title pt-5'>
                  Parlez à un responsable <br />
                  chez Albiometrics
                </h2>
                <p class="pricing-content pt-7">
                  Vous avez un projet d'envergure ? Nos experts en biométrie sont là pour vous <br />
                  accompagner. Contactez-dès maintenant pour discuter de vos besoins <br />
                  spécifiques et bénéficier de conseils personnalisés.
                </p>

                <div className="block lg:hidden w-full">
                  <form action="" className=""  onSubmit={handleSubmit(handlePrincingNext)}>
 
                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="Nom" className='pricing-label'>Nom <span className='text-red-500'>*</span></label>
                      <Input
                        type="text"
                        name="nom"
                        placeholder='Votre nom'
                        id="nom"
                        register={register}
                        error={errors.nom}
                        className='pricing-input w-full'
                      />
                    </div>
                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="Prenom" className='pricing-label'>Prenom <span className='text-red-500'>*</span></label>
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
                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="company" className='pricing-label'>Nom de votre entreprise <span className='text-red-500'>*</span></label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Votre entreprise..."
                        id="company"
                        register={register}
                        error={errors.company}
                        className='pricing-input w-full'
                      />
                    </div>
                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="poste" className='pricing-label'>Poste<span className='text-red-500'>*</span></label>
                      <Input
                        type="text"
                        name="poste"
                        placeholder=""
                        id="poste"
                        register={register}
                        error={errors.poste}
                        className='pricing-input w-full'
                      />
                    </div>
                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="website" className='pricing-label'>Site WEB</label>
                      <Input
                        type="text"
                        name="website"
                        placeholder=""
                        id="website"
                        register={register}
                        error={errors.website}
                        className='pricing-input w-full'
                      />
                    </div>

                    <div className='flex-col text-left w-full pt-5 gap-y-2'>
                      <label htmlFor="email" className='pricing-label'>Adresse Mail professionnelle<span className='text-red-500'>*</span></label>
                      <Input
                        type="email"
                        name="email"
                        placeholder=""
                        id="email"
                        register={register}
                        error={errors.email}
                        className='pricing-input w-full'
                      />
                    </div>

                    <div class="pt-8 pb-16">
                      <div class="flex  flex-wrap lg:flex-nowrap items-center justify-center gap-5 btn-accounts">
                        <button type='submit' className="btn-account bg-green-deep flex items-center justify-center text-nowrap w-full" href="#">
                          <span className='w-full text-center'>Suivant</span>
                          <img src={iconArrow} alt="" />
                        </button>
                        <Link to="/creation-compte" class="btn-has-account px-5 py-3.5 text-center flex items-center justify-center lg:justify-start gap-5 w-full">
                          <span class="btn-has-account-grey-text ">Pas de compte? <span className='btn-has-account-black-text'>Inscrivez vous par cette occasion</span></span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>

                <div className='absolute bottom-0 hidden lg:block'>
                  <img src={pricingBg} alt="" />
                </div>
              </div>


              <div className='flex items-center justify-center hidden lg:block px-10 pt-10 sm:px-20 md:px-20 lg:px-8'>
                <form action="" className=''>
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
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label'>Job Title Options*</label>
                      <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                    </div>
                  </div>
                  <div className='flex flex-col text-left w-full pt-5'>
                    <label htmlFor="" className='pricing-label'>Adresse Mail</label>
                    <input type="mail" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                  </div>
                  <div className='flex flex-col text-left w-full pt-5'>
                    <label htmlFor="" className='pricing-label'>Numéro de téléphone</label>
                    <div className='flex items-center justify-center'>
                      <select name="" id="" value="">
                        <option value="+ 237">+ 237</option>
                      </select>
                      <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full w-full' />
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-x-7 pt-5'>
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label'>Secteur d'activité</label>
                      <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                    </div>
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label'>Pays</label>
                      <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-x-7 pt-5'>
                    <div className='flex flex-col text-left w-full'>
                      <label htmlFor="name" className='pricing-label'> J'utiliser AIBIOMETRICS pour : </label>
                      <select name="" id="" className='pricing-input w-full'>
                        <option value=""></option>
                      </select>
                    </div>
                    <div className='flex flex-col text-left w-full' >
                      <label htmlFor="name" className='pricing-label'> Volume annuel de transactions </label>
                      <select name="" id="" className='pricing-input w-full'>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col text-left pt-5'>
                    <label htmlFor="" className='pricing-label'>Ajouter un message</label>
                    <textarea name="" id="" rows="8" className='pricing-input w-full'>
                    </textarea>
                  </div>
                  <div class="pt-8 pb-36">
                    <div class="flex items-center justify-center gap-5 ">
                      <Link to="/" className="btn-nav-text flex items-center justify-center bg-green-deep btn-nav" href="#">
                        <span>Envoyer</span>
                        <Arrow background="#FFFF" textcolor="#285246" />
                      </Link>
                      <button class=" bg-gray-100  px-5 py-3.5 rounded-xl flex items-center justify-between gap-5 w-full">
                        <span class="pricing-get-account-link text-[#898989]">Pas encore de compte? <Link href="" className='text-green-deep'>Inscrivez vous par la même occasion</Link></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </section>
          <section>
            <FooterAccueil />
          </section>
        </div>
      </div>
    </div>
  )
}
