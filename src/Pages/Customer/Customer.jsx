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
import { default as img1, default as img5 } from '../../images/customer/custImg1.png'
import img2 from '../../images/customer/custImg2.png'
import img3 from '../../images/customer/custImg3.png'
import img4 from '../../images/customer/custImg4.png'
import imgC1 from '../../images/customer/img-1.png'
import imgC2 from '../../images/customer/img-2.png'
import imgC3 from '../../images/customer/img-3.png'
import imgC4 from '../../images/customer/img-4.png'
import cote from "../../images/page-2/cote.png"
import takeselfie from "../../images/page-2/takePhoto.png"
import vector from '../../images/page-2/Vector.png'
import vector1 from "../../images/page-2/Vector3.png"
import vectorDatabases from "../../images/vectorDatabases.png"

import screenImg1 from "../../images/customer/custCard1.png"
import screenImg2 from "../../images/customer/custCard2.png"
import screenImg3 from "../../images/customer/custCard3.png"


export default function Customer() {
  return (
    <div>
      <NavBar />
      <main className='accueil'>
        <section>
          <div className=' py-32 bg-white relative screening-page'>
            <div className='flex flex-col items-start justify-center  px-20'>
              <div className='flex items-center justify-start gap-x-5'>

                <Link to="/" className='customer-btn-first text-btn text-green-color flex items-center justify-center'>
                  Solution
                </Link>

                <Link to="/" className='customer-btn-second text-btn text-green-color flex items-center justify-center'>
                  Contrôle AML
                </Link>
              </div>
              <div className='screening-section1-title py-5'>
                Minimisez les risques de fraude et <br />
                de blanchiment gràce à l'IA
              </div>
              <div className='screening-section1-content pt-5'>
                Grâce à des algorithme avancés, notre solution AML alimentée par l'IA vous permet de détecter les<br />
                activités suspectes en temps réel pour identifier les transactions et les entités à haut risque.
              </div>
              <div className='flex items-center justify-start gap-x-5 pt-5'>
                <Link to="/" className='screening-big-btn flex items-center justify-around bg-green-color'>
                  <span>Nous contacter</span>
                  <Arrow background="#FFFF" textcolor="#2CE5B1" />
                </Link>

                <Link to="/" className='screening-big-btn-transparent text-green-deep flex items-center justify-around  border border-green-deep '>
                  <span className='text-nowrap'>Commencez gratuitement</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className='absolute customer-page ' >
            </div>
            <div className='absolute  screening-card-absolute w-full px-20'>
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
          <div className='group-card-horiz grid grid-cols-1 items-center justify-center bg-no-repeat  md:grid-cols-1 lg:grid-cols-2 lg:pt-32 gap-x-8 gap-y-32 mt-10' style={{ backgroundImage: `url(${vectorBigMother})` }}>
            <div className=" flex items-center justify-center">
              <div className=''>
                <img src={screenImg1} alt="" />
              </div>
            </div>
            <div className=" order-text group-card-horiz-content flex flex-col items-center gap-y-5">
              <div className="">
                <div className="screening-horiz-vert-title">
                  Protégez votre entreprise contre les <br />
                  risques liés aux PEP et aux sanctions
                </div>
                <div className="screening-horiz-vert-content py-5">
                  Notre solution de screening des PEP et des sanction vour permet de vérifier si <br />
                  vos clients figure sur la liste de personnes politiquement exposées ou sous <br />
                  sanction. En identifiant rapidement les risques liés à ces individus, vous vous <br />
                  protégez contre les amendes et les dommages réputationnels.
                </div>
                <div className='w-full'>
                  <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Bases de données complètes:</p>
                        <p className='screening-grid-content'>
                          Accèdez à des bases de données mises à<br />
                          jour en continu pour une couverture <br />
                          mondiale.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Personnalisation des règles:</p>
                        <p className='screening-grid-content'>
                          Adaptez les critère de recherche à vos<br />
                          besoins spécifiques.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Vérifications en temps réel:</p>
                        <p className='screening-grid-content'>
                          Optenez des résultats instantanés pour une <br />
                          prise de décision rapide.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <SmallCheckCircle />
                      <div className='flex flex-col'>
                        <p className='screening-grid-title pb-2'>Intégration facile:</p>
                        <p className='screening-grid-content'>
                          Intégrez notre solution à votre flux de travail<br />
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
            <div className="order-1 lg:order-2 flex items-center justify-center pt-10">
              <div className=''>
                <img src={screenImg2} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* end section girl  */}

        {/* start section communication */}
        <section className="group-card-vert bg-no-repeat bg-right" style={{ backgroundImage: `url(${vectorDatabases})` }}>
          <div className='grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 pb-20 gap-x-8 gap-y-20'>
            <div className=" flex items-center justify-center h-[120%]">
              <div className=''>
                <img src={screenImg3} alt="" />
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

        {/* start choice us */}
        <section className='section-choise-us'>
          <div className=''>
            <div className='flex flex-col items-center justify-center pb-20 pt-10 px-20 bg-white  bg-no-repeat bg-[110%_60%] ' style={{ backgroundImage: `url(${vector1})` }}>
              <a href="#" className="btn-choice flex items-center justify-center">Pourquoi nous choisir</a>
              <div className="title-1 text-center text-green-deep py-10">
                Respectez la réglementation KYC et accélérez <br />
                l'acquisition de clients
              </div>
              <div className="title-content-1 text-center">
                En automatisant vos processus KYC, vous réduisez considérablement les frictions et les délais d'onboarding. Notre solution vous permet de respecter <br />
                les normes les plus strictes tout en offrant une expérience client fluide.
              </div>
              <div className="card-choice-items items-center justify-center w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 pb-24">
                <RespectReglementation
                  image={imgC1}
                  title={
                    <div>Respectez et évoluez <br />
                      avec la réglementation</div>
                  }
                  content={
                    <div>
                      Soyez en conformité avec les <br />
                      normes KYC/AML en vigueur dans <br />
                      le monde entier.
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC2}
                  title={
                    <div>Convertissez plus <br />
                      d’utilisateurs</div>
                  }
                  content={
                    <div>
                      Offrez un processus d'onboarding <br />
                      fluide et sécurisé pour fidéliser vos <br />
                      clients.
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC4}
                  title={
                    <div>Verifications flexibles avec <br />
                      des documents locaux</div>
                  }
                  content={
                    <div>
                      Acceptez différents types de <br />
                      documents adaptés selon les regions <br />
                      des utilisateurs
                    </div>
                  }
                />
                <RespectReglementation
                  image={imgC3}
                  title={
                    <div>Optimisez les couts <br />
                      des verifications </div>
                  }
                  content={
                    <div>
                      Réduisez les coûts liés à la <br />
                      vérification manuelle des documents <br />
                      d’identité de vos utilisateurs
                    </div>
                  }
                />
              </div>
              <div className="bg-[#D4FFDE] w-full grid grid-cols-1 md:grid-cols-1 md:px-8 lg:grid-cols-2 rounded-[33px] bg-no-repeat bg-[5%_50%]" style={{ backgroundImage: `url(${vector})` }}>
                <div className="relative customer-selfie-box">
                  <img src={takeselfie} alt="" className='absolute customer-selfie' />
                </div>
                <div className=" accueil-content flex flex-col top-[145px]  px-4 pb-5">
                  <div className="text-nowrap gap-[6px] pb-[27px]">
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
                    <p className='text-left text-wrap title-content py-5'>
                      Distinguez-vous de vos concurrents en adoptant une approche proactive de la lutte contre <br />
                      la criminalité financière. AIbiometrics vous permet non seulement de respecter les <br />
                      réglementations en vigueur, mais aussi de renforcer la confiance de vos clients en leur <br />
                      assurant une expérience d'onboarding sécurisée et transparente.
                    </p>
                    <p className='text-left text-wrap title-content'>
                      Démontrez aux régulateurs que vous êtes un acteur responsable et engagé en choisissant <br />
                      AIbiometrics pour vos verifications d’utilisateurs
                    </p>
                  </div>

                  <div className="text-wrap items-start gap-x-[28px]">
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
                </div>
              </div>
            </div>

            <div className=' bg-white pb-24'>
              <div className='pb-10'>
                <div className='w-full take-selfie-title text-center flex items-center justify-center py-10 bg-no-repeat bg-center' style={{ backgroundImage: `url(${cote})` }}>
                  Nous réinventons la vérification d'identité en alliant la puissance de l'intelligence artificielle <br />
                  à une approche centrée sur l'utilisateur. Nous voulons vous offrir une solution <br />
                  simple, sécurisée et fiable pour protéger vos données sensibles et renforcer la confiance <br />
                  dans les interactions numériques.
                </div>
              </div>
              <div className='flex items-start justify-start gap-8 overflow-x-auto px-20 scrollbar-hidden'>
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
                />

              </div>
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
