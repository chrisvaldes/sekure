import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import CardSmile from '../../Components/CardSmile'
import Card from '../../Components/customer/Card'
import RespectReglementation from '../../Components/customer/RespectReglementation'
import FooterAccueil from '../../Components/FooterAccueil'
import Message from '../../Components/Message'
import NavBar from '../../Components/NavBar'
import SmallCheckCircle from '../../Components/SmallCheckCircle'
import vectorBigMother from "../../images/bigMotherVector.png"
import cote from "../../images/page-2/cote.png"
import takeselfie from "../../images/page-2/takePhoto.png"
import vector from '../../images/page-2/Vector.png'
import vector1 from "../../images/page-2/Vector3.png"
import imgC1 from "../../images/screening/img-1.png"
import imgC2 from "../../images/screening/img-2.png"
import imgC3 from "../../images/screening/img-3.png"
import imgC4 from "../../images/screening/img-4.png"
import img1 from '../../images/screening/img1-card.png'
import img2 from '../../images/screening/img2-card.png'
import img3 from '../../images/screening/img3-card.png'
import img4 from '../../images/screening/img4-card.png'
import img5 from '../../images/screening/img5-card.png'
import screenImg1 from "../../images/screening/screenImg1.png"
import screenImg2 from "../../images/screening/screenImg2.png"
import screenImg3 from "../../images/screening/screenImg3.png"
import screenImg4 from "../../images/screening/screenImg4.png"
import bgScreening from "../../images/screening/screening-bg.png"
import vectorDatabases from "../../images/vectorDatabases.png"

export default function Screening() {
  return (
    <div className=''>
      <section>
        <NavBar />
      </section>
      <main className='screening'>
        <section>
          <div className='pt-20 lg:py-32 bg-white customer-page-vector relative'>
            <div className='flex flex-col items-start justify-center  lg:px-20'>
              <div className="z-20 w-full">
                <div className="px-5 sm:px-10 w-full flex flex-col items-center justify-center lg:items-start">
                  <div className='flex items-center justify-start gap-x-5'>
                    <Link to="/" className='customer-btn-first text-btn text-green-color flex items-center justify-center'>
                      Solution
                    </Link>

                    <Link to="/" className='customer-btn-second text-btn text-green-color flex items-center justify-center'>
                      Know your Customer
                    </Link>
                  </div>
                  <div className='screening-section1-title py-5'>
                    KYC Rapide et flexible pour +180 <br />
                    pays d'Afrique et du monde
                  </div>
                  <div className='screening-section1-content pt-5'>
                    Grâce à des algorithme avancés, notre solution AML alimentée par l'IA vous permet de détecter les<br />
                    activités suspectes en temps réel pour identifier les transactions et les entités à haut risque.
                  </div>
                  <div className='flex w-full items-center justify-center lg:justify-start gap-x-2 py-8'>
                    <Link to="/" className='screening-big-btn flex items-center justify-around bg-green-color'>
                      <span>Nous contacter</span>
                      <Arrow background="#FFFF" textcolor="#2CE5B1" />
                    </Link>

                    <Link to="/" className='screening-big-btn-transparent text-green-deep flex items-center justify-around'>
                      <div className='text-nowrap flex items-center justify-center'>Commencer <span className='pl-1 hidden md:block'>gratuitement</span></div>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className='w-full items-center customer-page-wrap justify-center relative  block lg:hidden'>
                  <div className='absolute flex items-center justify-center w-full bottom-0' >
                    <img src={bgScreening} alt="" className='w-[310px] h-[320px] sm:w-[470px] sm:h-[400px]' />
                  </div>
                </div>
              </div>

              <div className='absolute screening-page-bg hidden lg:block' >
              </div>
            </div>
            <div className='hidden lg:block lg:absolute  screening-card-absolute w-full px-20'>
              <div className=' flex items-center justify-center'>
                <div className='flex items-center justify-center py-10 rounded-[20px] bg-white w-full'>
                  <div className=' gap-10  px-10 grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img1} />
                      <div className="">
                        <div className="screening-section1-card-title  pb-2">
                          Diligence raisonnable du client :
                        </div>
                        <div className="screening-section1-card-content">
                          Mettez en place un processus KYC robuste
                          pour respecter les réglementations.
                        </div>
                      </div>
                    </div>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img2} />
                      <div className="">
                        <div className="screening-section1-card-title pb-2">
                          Contrôle des sanctions :
                        </div>
                        <div className="screening-section1-card-content ">
                          Vérifiez si vos clients figurent sur des listes
                          de sactions internationales.
                        </div>
                      </div>
                    </div>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img3} />
                      <div className="">
                        <div className="screening-section1-card-title pb-2">
                          Contrôle des médias négatifs :
                        </div>
                        <div className="screening-section1-card-content ">
                          Recherchez des informations négatives sur
                          vos clients dans les médias.
                        </div>
                      </div>
                    </div>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img4} />
                      <div className="">
                        <div className="screening-section1-card-title pb-2">
                          Diligences raisonnable renforcée :
                        </div>
                        <div className="screening-section1-card-content ">
                          Renforcez la vérification pour les clients à
                          risque élevé
                        </div>
                      </div>
                    </div>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img5} />
                      <div className="">
                        <div className="screening-section1-card-title pb-2">
                          Contrôle des PEP :
                        </div>
                        <div className="screening-section1-card-content ">
                          Identifiez et gérez les risques liés aux
                          personnes politiquement exposées (PEP).
                        </div>
                      </div>
                    </div>
                    <div className='flex  gap-x-10'>
                      <CardSmile logo={img1} />
                      <div className="">
                        <div className="screening-section1-card-title pb-2">
                          Surveillance continue :
                        </div>
                        <div className="screening-section1-card-content ">
                          Surveillez en continu vos clients pour
                          détecter les changements de situation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='block lg:hidden md:px-10 w-full'>
            <div className=' flex items-center justify-center'>
              <div className='flex items-center justify-center py-10 rounded-[20px] bg-white w-full'>
                <div className=' gap-10  px-10 grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img1} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Diligence raisonnable du client :
                      </div>
                      <div className="screening-section1-card-content">
                        Mettez en place un processus KYC robuste<br />
                        pour respecter les réglementations.
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img2} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Contrôle des sanctions :
                      </div>
                      <div className="screening-section1-card-content">
                        Vérifiez si vos clients figurent sur des listes <br />
                        de sactions internationales.
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img3} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Contrôle des médias négatifs :
                      </div>
                      <div className="screening-section1-card-content">
                        Recherchez des informations négatives sur<br />
                        vos clients dans les médias.
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img4} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Diligences raisonnable renforcée :
                      </div>
                      <div className="screening-section1-card-content">
                        Renforcez la vérification pour les clients à<br />
                        risque élevé
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img5} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Contrôle des PEP :
                      </div>
                      <div className="screening-section1-card-content">
                        Identifiez et gérez les risques liés aux<br />
                        personnes politiquement exposées (PEP).
                      </div>
                    </div>
                  </div>
                  <div className='flex  gap-x-10'>
                    <CardSmile logo={img1} />
                    <div className="">
                      <div className="screening-section1-card-title pb-2">
                        Surveillance continue :
                      </div>
                      <div className="screening-section1-card-content">
                        Surveillez en continu vos clients pour <br />
                        détecter les changements de situation.
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
            <div className='screening-section2-title'>
              Au-delà de la conformité, une protection <br />
              proactive : nous anticipons et neutralisons <br />
              les risques AML
            </div>
          </div>
        </section>

        {/* start section with big mother */}
        <section>
          <div className='group-card-horiz grid grid-cols-1 items-center justify-center bg-no-repeat  md:grid-cols-1 lg:grid-cols-2 lg:pt-32 gap-x-8 gap-y-10 lg:gap-y-32 mt-10' style={{ backgroundImage: `url(${vectorBigMother})` }}>
            <div className=" flex items-center justify-center">
              {/* <div className=''>
                <img src={screenImg1} alt="" />
              </div> */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <div className=''>
                  <div className="hidden lg:block items-center justify-center">
                    <div className='relative flex items-center justify-center gap-5'>
                      <div className=" card-horiz"></div>
                      <div className="card-horiz"></div>
                      <div className="absolute w-[407.11px] h-[314.54px] flex items-center justify-center">
                        <img src={screenImg1} alt="" className='w-[407.11px] h-[314.54px]' />
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden flex items-center justify-center">
                    <div className='relative flex flex-col items-center justify-center gap-y-5'>
                      <div className=" card-vert"></div>
                      <div className="card-vert"></div>
                      <div className="absolute w-[326px] h-[295px] flex items-center justify-center">
                        <img src={screenImg1} alt="" className='w-[335px] h-[292px] ' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" order-text group-card-horiz-content flex flex-col items-center gap-y-5">
              <div className="">
                <div className="screening-horiz-vert-title">
                  Protégez votre entreprise contre les
                  risques liés aux PEP et aux sanctions
                </div>
                <div className="screening-horiz-vert-cont py-5">
                  Notre solution de screening des PEP et des sanction vour permet de vérifier si
                  vos clients figure sur la liste de personnes politiquement exposées ou sous
                  sanction. En identifiant rapidement les risques liés à ces individus, vous vous
                  protégez contre les amendes et les dommages réputationnels.
                </div>
                <div className='w-full'>
                  <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Bases de données complètes:</p>
                        <p className='screening-grid-content '>
                          Accèdez à des bases de données mises à
                          jour en continu pour une couverture
                          mondiale.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Personnalisation des règles:</p>
                        <p className='screening-grid-content  '>
                          Adaptez les critère de recherche à vos
                          besoins spécifiques.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Vérifications en temps réel:</p>
                        <p className='screening-grid-content  '>
                          Optenez des résultats instantanés pour une
                          prise de décision rapide.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Intégration facile:</p>
                        <p className='screening-grid-content '>
                          Intégrez notre solution à votre flux de travail
                          existant.
                        </p>
                      </div>
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
            <div className="order-2 lg:order-1 flex flex-col items-center gap-y-5">
              <div className="">
                <div className="screening-horiz-vert-title">
                  Accédez à une information exhaustive <br />
                  sur vos clients
                </div>
                <div className="screening-horiz-vert-content py-5">
                  Notre solution vous permet d'accéder à une multitude de sources d'information<br />
                  Pour mieux connaitre vos clients. En analysant les médias, les registres publics et<br />
                  d'autre sources pertinentes, nous vous aidons à prendre des décisions éclairées<br />
                  et à réduire les risques.
                </div>
                <div className='w-full'>
                  <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Analyse des médias sociaux:</p>
                        <p className='screening-grid-content'>
                          Identifiez les signaux faibles qui<br />
                          pourraient indiquer un risque.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Recherche dans les registres public:</p>
                        <p className='screening-grid-content'>
                          Vérifiez les antécédents judiciaire et les<br />
                          affiliations politiques.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Surveillance continue:</p>
                        <p className='screening-grid-content'>
                          Soyez alerté en cas de nouveaux évènements<br />
                          susceptibles d'affecter votre risque.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Rapports personnalisés:</p>
                        <p className='screening-grid-content'>
                          Obtenez des Rapports détaillés pour une<br />
                          meilleure compréhension de vos clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex items-center justify-center">
              {/* <div className=''>
                <img src={screenImg2} alt="" />
              </div> */}
              <div className="flex items-center justify-center pb-10">
                <div className='relative flex flex-col items-center justify-center gap-5'>
                  <div className=" card-vert"></div>
                  <div className="card-vert"></div>
                  <div className="absolute flex items-center justify-center w-[325px] h-[251px] top-2 lg:w-full lg:h-full ">
                    <img src={screenImg2} alt="" className='w-[276px] h-[315px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section girl  */}

        {/* start section communication */}
        <section className="group-card-vert bg-no-repeat bg-right" style={{ backgroundImage: `url(${vectorDatabases})` }}>
          <div className='grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 pb-20 gap-x-8 gap-y-20'>
            <div className=" flex items-center justify-center h-[120%]">
              {/* <div className=''>
                <img src={screenImg3} alt="" />
              </div> */}
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <div className=''>
                  <div className="hidden lg:block items-center justify-center">
                    <div className='relative flex items-center justify-center gap-5'>
                      <div className=" card-horiz"></div>
                      <div className="card-horiz"></div>
                      <div className="absolute w-[407.11px] h-[314.54px] flex items-center justify-center left-1">
                        <img src={screenImg3} alt="" className='w-[407.11px] h-[314.54px]' />
                      </div>
                    </div>
                  </div>
                  <div className="lg:hidden flex items-center justify-center">
                    <div className='relative flex flex-col items-center justify-center gap-y-5'>
                      <div className=" card-vert"></div>
                      <div className="card-vert"></div>
                      <div className="absolute w-[326px] h-[295px] flex items-center justify-center md:w-full -left-2 sm:left-0">
                        <img src={screenImg3} alt="" className=' w-[326px] h-[233px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group-card-horiz-content flex flex-col items-center gap-y-5">
              <div className="">
                <div className="screening-horiz-vert-title">
                  Surveillez en continu vos clients<br />
                  pour une protection optimale
                </div>
                <div className="screening-horiz-vert-content py-5">
                  Notre solution de Surveillance contine Analyse les transaction, les<br />
                  comportement et les informations publiques de vos clients en temps réel, pour<br />
                  vous aider à identifier les activités suspectes et à prendre des mesures correctives
                </div>
                <div className='w-full'>
                  <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Alertes en temps réel:</p>
                        <p className='screening-grid-content'>
                          Soyez informé immédiatement des évènements<br />
                          importants.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Adaptation aux changements réglémentaires:</p>
                        <p className='screening-grid-content'>
                          Restez conforme aux dernières exigences en<br />
                          matière de Surveillance continue.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Analyse comportementale:</p>
                        <p className='screening-grid-content'>
                          Identifiez les anomalies dans les habitudes <br />
                          des transactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Intégration avec d'autres systèmes:</p>
                        <p className='screening-grid-content'>
                          Combinez notre solution avec vos outils<br />
                          existants pour une vision globale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* start section communication */}

        {/* start section girl */}
        <section>
          <div className='group-card-vert grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 gap-y-10 pb-20'>
            <div className="order-2 lg:order-1 flex flex-col items-center gap-y-5">
              <div className="">
                <div className="screening-horiz-vert-title">
                  Restez conforme aux réglementations<br />
                  en constantes évolution
                </div>
                <div className="screening-horiz-vert-content py-5">
                  Notre solution s'adapte en permanence aux évolutions réglementaires pour vous<br />
                  garantir une conformité optimale. Grâce à nos mises à jour régulières et à notre<br />
                  expertise juridique, vous pouvez être sûr de respecter les dernières exigences en<br />
                  matière de lutte contre les blanchiment d'argent.
                </div>
                <div className='w-full'>
                  <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Couverture mondiale:</p>
                        <p className='screening-grid-content'>
                          Prenez en charge une multitude de <br />
                          réglémentations internationales.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Mises à jour régulières:</p>
                        <p className='screening-grid-content'>
                          Soyez toujours à jour des dernières<br />
                          évolutions législatives.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Expertise juridique:</p>
                        <p className='screening-grid-content'>
                          Bénéficiez de l'expertise de nos juristes<br />
                          spécialisés en AML.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Flexibilité:</p>
                        <p className='screening-grid-content'>
                          Adaptez notre solution à vos besoins<br />
                          spécifiques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex items-center justify-center ">
              {/* <div className=''>
                <img src={screenImg4} alt="" />
              </div> */}
              <div className="flex items-center justify-center">
                <div className='relative flex flex-col items-center justify-center gap-5'>
                  <div className=" card-vert"></div>
                  <div className="card-vert"></div>
                  <div className="absolute flex items-center justify-center w-[340px] h-[251px] sm:w-full lg:h-full bottom-0 -left-4 ">
                    <img src={screenImg4} alt="" className='w-[340px] h-[251px] lg:w-full lg:h-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section girl  */}

        <section className='section-choise-us bg-white relative'>
          <div className=''>
            <div className='flex flex-col items-center justify-center lg:pb-44 pt-10 px-5 sm:px-20 bg-no-repeat bg-[110%_55%] ' style={{ backgroundImage: `url(${vector1})` }}>
              <a href="#" className="btn-choice flex items-center justify-center">Pourquoi nous choisir</a>
              <div className="screening-horiz-vert-title text-center text-green-deep py-10">
                Confiance, transparence, sécurité : Simplifez votre conformité <br />
                AML et optimisez votre parcours client.
              </div>
              <div className="screening-horiz-vert-content text-center">
                Automatisez votre contrôle AML et optimisez votre parcours client pour rapporter plus de clients authentiques. Gagnez du temps et sécurisez votre croissance.
              </div>
              <div className="card-choice-items items-center justify-center w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 pb-24 px-2">
                <RespectReglementation
                  image={imgC1}
                  title={
                    <div className="">Respectez et évoluez
                      avec la réglementation</div>
                  }
                  content={
                    <div>
                      Soyez en conformité avec les
                      normes KYC/AML en vigueur dans
                      le monde entier.
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC2}
                  title={
                    <div className="">Convertissez plus
                      d’utilisateurs</div>
                  }
                  content={
                    <div>
                      Offrez un processus d'onboarding
                      fluide et sécurisé pour fidéliser vos
                      clients.
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC4}
                  title={
                    <div className="">Verifications flexibles avec
                      des documents locaux</div>
                  }
                  content={
                    <div>
                      Acceptez différents types de
                      documents adaptés selon les regions
                      des utilisateurs
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC3}
                  title={
                    <div className="">Optimisez les couts
                      des verifications </div>
                  }
                  content={
                    <div>
                      Réduisez les coûts liés à la
                      vérification manuelle des documents
                      d’identité de vos utilisateurs
                    </div>
                  }
                />
              </div>
              <div className="absolute sreening-demo-absolute w-full px-20 hidden lg:block">
                <div className="bg-[#D4FFDE] customer-selfie-section w-full grid grid-cols-1 md:grid-cols-1 md:px-8 lg:grid-cols-2 rounded-[33px] ">
                  <div className="relative customer-selfie-box">
                    <img src={takeselfie} alt="" className='absolute customer-selfie' />
                  </div>
                  <div className="w-full">
                    <div className=" accueil-content flex flex-col top-[145px] pb-5 w-full">
                      <div className="text-nowrap gap-[6px] pb-[27px] px-8 w-full">
                        <div className='pt-10'>
                          <Link to="/" className='flex items-center justify-center btn-verification btn-verification-text mb-5'>
                            Know your Customer
                          </Link>
                        </div>
                        <div className='text-wrap take-selfie-title text-left sarabun-bold text-green-deep'>
                          Démontrez aux régulateurs votre <br />
                          engagement indéfectible dans la lutte <br />
                          contre la criminalité financière.
                        </div>
                        <div className="">
                          <div className=' text-wrap title-content-selfie-screening  text-left py-5 w-full'>
                            Distinguez-vous de vos concurrents en adoptant une approche proactive de la lutte contre <br />
                            la criminalité financière. AIbiometrics vous permet non seulement de respecter les <br />
                            réglementations en vigueur, mais aussi de renforcer la confiance de vos clients en leur <br />
                            assurant une expérience d'onboarding sécurisée et transparente.
                          </div>
                          <div className='text-left text-wrap title-content-selfie-screening '>
                            Démontrez aux régulateurs que vous êtes un acteur responsable et engagé en choisissant <br />
                            <span className='title-content-selfie-creening-span'>AIbiometrics pour vos verifications d’utilisateurs</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-5">
                        <div className="text-wrap items-start gap-x-[28px] hidden lg:block">
                          <div className='flex flex-wrap md:flex-nowrap items-center justify-center  lg:items-start lg:justify-start gap-[28px] md:gap-[10px] md:pr-2'>
                            <div className='btn flex items-center justify-center  bg-green-color pr-2'>
                              <button className='btn-text flex items-center text-nowrap'>
                                Commencer gratuitement
                                <Arrow background="#FFFF" textcolor="#2CE5B1" />
                              </button>

                            </div>
                            <div className='btn flex items-center justify-around bg-white'>
                              <button className='btn-text text-green-color'>
                                Contacter
                              </button>
                              <Message background="#2CE5B1" textcolor="#FFFF" />
                            </div>
                          </div>
                        </div>

                        <div className='block items-center justify-start gap-x-5 py-5 lg:hidden w-full '>
                          <div className='flex w-full items-center justify-start lg:justify-center gap-x-2'>
                            <Link to="/" className='screening-big-btn flex items-center justify-around bg-green-color'>
                              <span>Nous contacter</span>
                              <Arrow background="#FFFF" textcolor="#2CE5B1" />
                            </Link>

                            <Link to="/" className='screening-big-btn-transparent text-green-deep flex items-center justify-around'>
                              <div className='text-nowrap flex items-center justify-center w-full'>Commencer <span className='pl-1 hidden md:block'>gratuitement</span></div>
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 pr-1">
                                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative customer-selfie-img sm:h-[560px] block lg:hidden items-center justify-center w-full">
                      <div className="absolute bottom-0 customer-selfie-box w-full bg-[100%_80%]" style={{ backgroundImage: `url(${vector})` }}>
                        <img src={takeselfie} alt="" className=' ' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='block lg:hidden'>
          <div className="bg-[#D4FFDE] customer-selfie-section w-full grid grid-cols-1 md:grid-cols-1 md:px-8 lg:grid-cols-2">
            <div className="relative customer-selfie-box">
              <img src={takeselfie} alt="" className='absolute customer-selfie' />
            </div>
            <div className="w-full">
              <div className=" accueil-content flex flex-col top-[145px] w-full">
                <div className="text-nowrap gap-[6px] pb-[27px] px-8 w-full flex flex-col items-center justify-center">
                  <div className='pt-10'>
                    <Link to="/" className='flex items-center justify-center btn-verification btn-verification-text mb-5'>
                      Know your Customer
                    </Link>
                  </div>
                  <div className='text-wrap take-selfie-tit sarabun-bold text-green-deep'>
                    Démontrez aux régulateurs votre
                    engagement indéfectible dans la lutte
                    contre la criminalité financière.
                  </div>
                  <div className="">
                    <div className=' text-wrap title-content-selfie-screening py-5 w-full'>
                      Distinguez-vous de vos concurrents en adoptant une approche proactive de la lutte contre
                      la criminalité financière. AIbiometrics vous permet non seulement de respecter les
                      réglementations en vigueur, mais aussi de renforcer la confiance de vos clients en leur
                      assurant une expérience d'onboarding sécurisée et transparente.
                    </div>
                    <div className='text-left text-wrap title-content-selfie-screening '>
                      Démontrez aux régulateurs que vous êtes un acteur responsable et engagé en choisissant <br />
                      <span className='title-content-selfie-creening-span'>AIbiometrics pour vos verifications d’utilisateurs</span>
                    </div>
                  </div>
                </div>

                <div className="w-full px-5">
                  {/* <div className="text-wrap items-center justify-center w-full gap-x-[28px] hidden lg:block">
                    <div className='flex flex-wrap md:flex-nowrap items-center justify-center bg-cyan-300 lg:items-start lg:justify-start gap-[28px] md:gap-[10px] md:pr-2 w-full'>
                      <div className='btn flex items-center justify-center  bg-green-color pr-2'>
                        <button className='btn-text flex items-center text-nowrap'>
                          Commencer gratuitement
                          <Arrow background="#FFFF" textcolor="#2CE5B1" />
                        </button>

                      </div>
                      <div className='btn flex items-center justify-around bg-white'>
                        <button className='btn-text text-green-color'>
                          Contacter
                        </button>
                        <Message background="#2CE5B1" textcolor="#FFFF" />
                      </div>
                    </div>
                  </div> */}

                  <div className='block items-center justify-center gap-x-5 lg:hidden w-full '>
                    <div className='flex w-full items-center justify-center lg:justify-center gap-x-2'>
                      <Link to="/" className='screening-big-btn flex items-center justify-around bg-green-color'>
                        <span>Nous contacter</span>
                        <Arrow background="#FFFF" textcolor="#2CE5B1" />
                      </Link>

                      <Link to="/" className='screening-big-btn-transparent text-green-deep flex items-center justify-around'>
                        <div className='text-nowrap flex items-center justify-center w-full'>Commencer <span className='pl-1 hidden md:block'>gratuitement</span></div>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 pr-1">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative customer-selfie-img h-[400px] sm:h-[560px] block lg:hidden items-center justify-center w-full">
                <div className="absolute bottom-0 customer-selfie-box w-full bg-[100%_80%]" style={{ backgroundImage: `url(${vector})` }}>
                  <img src={takeselfie} alt="" className=' ' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-16 card-scroll-horiz-screening  pb-20'>
          <div>
            <div className='pb-10 block lg:hidden'>
              <div className='w-full take-selfie-title-scree flex items-center justify-center py-10 bg-no-repeat bg-center px-5' style={{ backgroundImage: `url(${cote})` }}>
                Nous réinventons la vérification d'identité en alliant la puissance de l'intelligence artificielle
                à une approche centrée sur l'utilisateur. Nous voulons vous offrir une solution
                simple, sécurisée et fiable pour protéger vos données sensibles et renforcer la confiance
                dans les interactions numériques.
              </div>
            </div>
            <div className='flex items-start justify-start gap-8 overflow-x-auto px-8 scrollbar-hidden'>
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />
              <Card
                btnText="Disponibilité par pays"
                title={
                  <span>
                    Est-ce-que je peux payer <br />
                    depuis mon pays en Afrique ?
                  </span>
                }
                content={
                  <span>
                    Localement ou internationalement, vos achats en <br />
                    ligne ne connaissent plus de limite avec les <br />
                    cartes virtuelles Visa et Mastercard de chez <br />
                    SEKURE. En 2 minutes, créez et vérifiez votre <br />
                    compte Sekure pour obtenir votre carte virtuelle. <br />
                    Entre des frais d'entretien inexistants et des frais <br />
                    de transaction amoindris, Sekure vous offre les <br />
                    meilleurs avantages du marché bancaire africain <br />
                    sur jusqu’à 06 cartes que vous pouvez suivre <br />
                    individuellement dans via l'application.
                  </span>
                }
                bgColor="white"
              />

            </div>
          </div>
        </section>
        {/* end section choice us */}

        {/* start footer section  */}
        <section className='z-50'>
          <FooterAccueil />
        </section>
        {/* end footer section  */}
      </main>
    </div>
  )
}
