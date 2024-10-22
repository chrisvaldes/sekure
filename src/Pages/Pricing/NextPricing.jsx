import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import FooterAccueil from '../../Components/FooterAccueil'
import NavBar from '../../Components/NavBar'
import iconArrow from "../../images/icons/arrowWhite.png"
import vectorPricing from '../../images/pricing/Vector-pricing.png'
import pricingBg from '../../images/pricing/pricing-bg.png'
import cmr from "../../images/about/cmrPicture.png";

export default function NextPricing() {
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
                                    <form action="" className="">

                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'> Numéro de Téléphone <span className='text-red-500'>*</span></label>
                                            <div className='flex items-center justify-center bg-[#F3F3F3]'>

                                                <select name="" id="" value="" className='bg-[#F3F3F3]'>
                                                    <option value="+ 237"><img src={cmr} alt="" /> + 237</option>
                                                </select>
                                                <input type="text" name="" id="" placeholder='Your company' className='pricing-input w-full w-full' />
                                            </div>
                                        </div>

                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'>Prenom <span className='text-red-500'>*</span></label>
                                            <input type="text" name="" id="" placeholder='ex : ismael' className='pricing-input w-full' />
                                        </div>
                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'>Nom de votre entreprise <span className='text-red-500'>*</span></label>
                                            <input type="text" name="" id="" placeholder='ex : Business SARL' className='pricing-input w-full' />
                                        </div>
                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'>Poste <span className='text-red-500'>*</span></label>
                                            <input type="text" name="" id="" placeholder='' className='pricing-input w-full' />
                                        </div>
                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'>Site WEB</label>
                                            <input type="text" name="" id="" placeholder='' className='pricing-input w-full' />
                                        </div>
                                        <div className='flex flex-col text-left w-full pt-5 gap-y-2'>
                                            <label htmlFor="" className='pricing-label'>Adresse Mail professionnelle <span className='text-red-500'>*</span></label>
                                            <input type="email" name="" id="" placeholder='ismael@businesssarl.com' className='pricing-input w-full' />
                                        </div>

                                        <div class="pt-8 pb-16">
                                            <div class="flex  flex-wrap lg:flex-nowrap items-center justify-center gap-5 btn-accounts">
                                                <button type='submit' className="btn-account flex items-center justify-center text-nowrap w-full" href="#">
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
