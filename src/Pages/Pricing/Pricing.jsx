import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import FooterAccueil from '../../Components/FooterAccueil'
import NavBar from '../../Components/NavBar'
import vectorPricing from '../../images/pricing/Vector-pricing.png'
import pricingBg from '../../images/pricing/pricing-bg.png'

export default function Pricing() {
  return (
    <div>
      <div>
        <section>
          <NavBar />
        </section>
        <section className='bg-white pricing-section' >
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  pt-16'>
            <div className='pricing-bg relative flex flex-col text-left px-20 pt-20 pb-[48rem] items-start bg-no-repeat bg-bottom' style={{backgroundImage : `url(${vectorPricing})`}}>
              <Link to ="/" className='pricing-contact-btn flex items-center justify-center'>
                Contactez nous
              </Link>
              <h2 className='pricing-title pt-5'>
                Parlez à un responsable <br />
                chez Albiometrics
              </h2>
              <p class="pricing-content pt-7">
              Vous avez un projet d'envergure ? Nos experts en biométrie sont là pour vous <br />
              accompagner. Contactez-nous dès maintenant pour discuter de vos besoins <br />
              spécifiques et bénéficier de conseils personnalisés.
              </p> 
              <div className='absolute bottom-0'>
                <img src={pricingBg} alt="" />
              </div>
            </div>
            <div className='flex items-center justify-center px-10 pt-10 sm:px-20 md:px-20 lg:px-8'>
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
                  <label htmlFor=""  className='pricing-label'>Adresse Mail</label>
                  <input type="mail" name="" id="" placeholder='Your company' className='pricing-input w-full' />
                </div>
                <div className='flex flex-col text-left w-full pt-5'>
                  <label htmlFor=""  className='pricing-label'>Numéro de téléphone</label>
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
                  <label htmlFor=""  className='pricing-label'>Ajouter un message</label>
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
  )
}
