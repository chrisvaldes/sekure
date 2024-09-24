import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import CardArrow from '../../Components/CardArrow'
import Cards from '../../Components/Cards'
import CardSmile from '../../Components/CardSmile'
import NavBar from '../../Components/NavBar'
import SmallCheckCircle from '../../Components/SmallCheckCircle' 
import bigMother from '../../images/bigMother.png'
import vectorBigMother from "../../images/bigMotherVector.png"
import girlCni from "../../images/girlCni.png"
import groupDatabases from "../../images/groupDatabases.png"
import vectorDatabases from "../../images/vectorDatabases.png"

export default function Customer() {
  return (
    <div>
      <NavBar />
      <main>
        <section className=''>
          <div className='min-h-[90vh] py-32 bg-white relative customer-page'>

            <div>
              <div className='flex items-center justify-start gap-x-5'>

                <Link to="/" className='customer-btn-first text-btn text-green-color flex items-center justify-center'>
                  Solution
                </Link>

                <Link to="/" className='customer-btn-second text-btn text-green-color flex items-center justify-center'>
                  Know your Customer
                </Link>
              </div>
              <div className='title-page-2 pt-2'>
                KYC Rapide et flexible pour +180 <br />
                pays d'Afrique et du monde
              </div>
              <div className='title-content-page-2 pt-10'>
                Notre solution KYC s'adapte aux spécificités de chaque marché, tout en offrant une couverture mondiale <br />
                inégalée qui prend en charge une multitude de documents d'identité et de normes réglementaires.
              </div>
              <div className='flex items-center justify-start gap-x-5 pt-5'>
                <Link to="/" className='btn text-btn text-green-deep flex items-center justify-around bg-green-color'>
                  <span>Nous contacter</span>
                  <Arrow />
                </Link>

                <Link to="/" className='btn text-btn text-green-deep flex items-center justify-around  border border-green-deep '>
                  <span className=''>Commencez gratuitement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>

                </Link>

              </div>
            </div>
            <div className='absolute flex items-center justify-center section-tree-col-selfie top-[78%] '>
              <div className='flex items-center justify-center py-10 rounded-[20px] bg-white'>
                <div className=' gap-10  px-10 grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  <div className='flex  gap-x-10'>
                    <Cards />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Verifiez les documents d’identité
                      </div>
                      <div className="text-left card-icon-content">
                        Assurez-vous de la conformité des pièces <br />
                        d’identité de vos clients
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardArrow />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Verifiez les correspondances faciales
                      </div>
                      <div className="text-left card-icon-content">
                        Prévenez les usurpations d'identité grâce à <br />
                        notre vérification faciale en temps réel.
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Vérifiez l’adresse physique et numérique
                      </div>
                      <div className="text-left card-icon-content">
                        Confirmez l'adresse de résidence de vos <br />
                        clients pour une meilleure sécurité.
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Verifiez les visages
                      </div>
                      <div className="text-left card-icon-content">
                        Confirmez l'identité de vos utilisateurs grâce <br />
                        la reconnaissance faciale
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Verifiez les types d’appareils
                      </div>
                      <div className="text-left card-icon-content">
                        Renforcez la sécurité de vos comptes en <br />
                        vérifiant les appareils utilisés
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile />
                    <div className="">
                      <div className="text-left card-icon-title pb-2">
                        Acceptez plus d’utilisateurs
                      </div>
                      <div className="text-left card-icon-content">
                        Evitez de perdre des utilisateurs à cause des <br />
                        vérifications trop longues et fastidieuses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
          <div className='sub-title sub-title-page-2'>
            Couvrez facilement l’afrique et les autres <br />
            pays avec la verification de documents
            </div>
          </div>
        </section>

        {/* start section with big mother */}
        <section>
                    <div className='group-card-horiz grid grid-cols-1 items-center justify-center bg-no-repeat  md:grid-cols-1 lg:grid-cols-2 lg:pt-32 gap-x-8 gap-y-32 mt-10' style={{ backgroundImage: `url(${vectorBigMother})` }}>
                        <div className=" order-img flex items-center justify-center">
                            <div className='relative flex gap-5'>
                                <div className=" card-horiz"></div>
                                <div className="card-horiz"></div>
                                <img src={bigMother} alt="" className=' bigMother' />
                            </div>
                        </div>
                        <div className=" order-text group-card-horiz-content flex flex-col items-center gap-y-5">
                            <div className="">
                                <div className="title-1">
                                    Identifications et Vérifications par scan <br />
                                    facial inteligent et rapide
                                </div>
                                <div className="title-content-1 py-5">
                                    Grâce à notre technologie de scan facial avancée, la vérification des identités <br />
                                    devient un processus rapide et sécurisé. Cela permet une expérience utilisateur <br />
                                    fluide tout en maintenant un haut niveau de sécurité.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Obtenez des résultats instantanés pour une <br />
                                            expérience utilisateur fluide.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Taux de reconnaissance faciale élevé, même <br />
                                            en cas de mauvaise qualité d'image.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Protégez vos utilisateurs contre l'usurpation <br />
                                            d'identité
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Offrez à vos utilisateurs une expérience <br />
                                            intuitive et sans effort.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* start section with big mother */}

                {/* start section girl */}
                <section>
                    <div className='group-card-vert grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 gap-y-10 py-20'>
                        <div className="flex flex-col items-center gap-y-5">
                            <div className="">
                                <div className="title-1">
                                    Protection contre les fraudes et <br />
                                    personnes sous sanctions AML
                                </div>
                                <div className="title-content-1 py-5">
                                    Respectez  les réglementations en vigueur et renforcez la sécurité de votre plateforme <br />
                                    en détectant et en empêchant les fraudes. Notre système de vérification intègre des <br />
                                    contrôles AML (anti-blanchiment d'argent) et des vérifications d'antécédents pour <br />
                                    identifier les personnes à risque.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Consultez des bases de données intl pour <br />
                                            détecter les personnes à risque.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Surveillance continue pour une détection <br />
                                            proactive.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Renforcement de la confiance des <br />
                                            utilisateurs dans votre service.
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Identifiez et empêchez les activités liées au <br />
                                            blanchiment d'argent.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-10">
                            <div className='relative flex flex-col gap-5'>
                                <div className=" card-vert"></div>
                                <div className="card-vert"></div>
                                <img src={girlCni} alt="" className='absolute -top-7 -left-1' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section girl  */}

                {/* start section communication */}
                <section className="group-card-vert bg-no-repeat bg-right" style={{ backgroundImage: `url(${vectorDatabases})` }}>
                    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 pb-20 gap-x-8 gap-y-20'>
                        <div className="order-img flex items-center justify-center h-[120%]">
                            <div className='relative flex items-center gap-5  h-[120%]'>
                                <div className=" card-horiz"></div>
                                <div className="card-horiz"></div>
                                <img src={groupDatabases} alt="" className='groupDatabase' />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-no-repeat">
                            <div className="">
                                <div className="title-1">
                                    Identifications et Vérifications par scan <br />
                                    facial inteligent et rapide
                                </div>
                                <div className="title-content-1 py-5">
                                    Grâce à notre technologie de scan facial avancée, la vérification des identités <br />
                                    devient un processus rapide et sécurisé. Cela permet une expérience utilisateur <br />
                                    fluide tout en maintenant un haut niveau de sécurité.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Obtenez des résultats instantanés pour une <br />
                                            expérience utilisateur fluide.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Taux de reconnaissance faciale élevé, même <br />
                                            en cas de mauvaise qualité d'image.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Protégez vos utilisateurs contre l'usurpation <br />
                                            d'identité
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Offrez à vos utilisateurs une expérience <br />
                                            intuitive et sans effort.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* start section communication */}
      </main>
    </div>
  )
}
