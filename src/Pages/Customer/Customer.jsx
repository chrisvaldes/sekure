import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../Components/Arrow'
import CardArrow from '../../Components/CardArrow'
import Cards from '../../Components/Cards'
import CardSmile from '../../Components/CardSmile'
import Card from '../../Components/customer/Card'
import RespectReglementation from '../../Components/customer/RespectReglementation'
import FooterAccueil from '../../Components/FooterAccueil'
import Message from '../../Components/Message'
import NavBar from '../../Components/NavBar'
import SmallCheckCircle from '../../Components/SmallCheckCircle'
import vectorBigMother from "../../images/bigMotherVector.png"
import girlCni from "../../images/girlCni.png"
import groupDatabases from "../../images/groupDatabases.png"
import cote from "../../images/page-2/cote.png"
import img1 from "../../images/page-2/img-1.png"
import img2 from "../../images/page-2/img-2.png"
import img3 from "../../images/page-2/img-3.png"
import img4 from "../../images/page-2/img-4.png"
import passportCni from "../../images/page-2/PassPortCni.png"
import takeselfie from "../../images/page-2/takePhoto.png"
import vector from '../../images/page-2/Vector.png'
import vector1 from "../../images/page-2/Vector3.png"
import vectorDatabases from "../../images/vectorDatabases.png"


export default function Customer() {
  return (
    <div>
      <NavBar />
      <main className='accueil'>
        <section className=''>
          <div className='min-h-[90vh] py-32 bg-white relative customer-page'>
            <div className='ml-5 sm:ml-10 md:ml-16 lg:ml-20'>
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
                  <Arrow background="#FFFF" textcolor="#2CE5B1" />
                </Link>

                <Link to="/" className='btn text-btn text-green-deep flex items-center justify-around  border border-green-deep '>
                  <span className=''>Commencez gratuitement</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='absolute flex items-center justify-center section-tree-col-selfie top-[78%] left-4'>
              <div className='flex items-center justify-center py-10 rounded-[20px] bg-white'>
                <div className=' gap-10  px-10 grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
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
                <img src={passportCni} alt="" className=' passport-page2' />
              </div>
            </div>
            <div className=" order-text group-card-horiz-content flex flex-col items-center gap-y-5">
              <div className="">
                <div className="title-1">
                  Prendre des photos de vos pièces <br />
                  d’identité
                </div>
                <div className="title-content-1 py-5">
                  Notre solution vous permet de vérifier de manière exhaustive l'identité de vos <br />
                  utilisateurs en analysant une large gamme de documents officiels. Grâce à notre <br />
                  technologie de reconnaissance optique de caractères (OCR) et à nos bases de <br />
                  données internationales, nous garantissons l'authenticité et la validité de chaque <br />
                  document.
                </div>
                <div className="grid w-full items-center justify-center grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div className="flex items-center justify-start gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Cartes Nationales d’identité
                    </div>

                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Permis de conduire
                    </div>

                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Cartes de sejour
                    </div>

                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Passeports
                    </div>

                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Cartes temporaires d’identité
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
                  Prendre des selfies pour verifier <br />
                  l’authenticité
                </div>
                <div className="title-content-1 py-5">
                  Assurez-vous de l'identité de vos utilisateurs en temps réel grâce à notre <br />
                  technologie de reconnaissance faciale. En comparant un selfie en direct avec une <br />
                  photo d'identité officielle, nous confirmons l'identité de l'utilisateur avec une <br />
                  précision exceptionnelle.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Analyse des caractéristiques faciales: <br />
                      Comparaison de points clés du visage pour <br />
                      une identification précise.
                    </div>

                  </div>
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Vérification de la vivacité: <br />
                      Détection des présentations de photos ou de vidéos.
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
                  Verification en quelques secondes <br />
                  et connexion
                </div>
                <div className="title-content-1 py-5">
                  Offrez à vos utilisateurs une expérience d'inscription simple et rapide. Notre <br />
                  solution permet de vérifier l'identité en quelques secondes seulement, grâce à des <br />
                  processus automatisés et optimisés.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Vérification en temps réel: Résultats <br />
                      instantanés pour une expérience utilisateur fluide.
                    </div>

                  </div>
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Vérification en temps réel: Résultats <br />
                      instantanés pour une expérience utilisateur fluide.
                    </div>

                  </div>
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Verification des appareils et systemes <br />
                      d’exploitation utilisés
                    </div>

                  </div>
                  <div className="flex gap-3">
                    <SmallCheckCircle />
                    <div className='text-left content-small-circle-check'>
                      Verifications et confirmations des adresses <br />
                      physiques et Adresses IP (numeriques)
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* start section communication */}

        <section className='section-choise-us'>
          <div className=''>
          <div className='flex flex-col items-center justify-center pb-20 pt-10 px-20 bg-white  bg-no-repeat bg-[110%_60%] '  style={{ backgroundImage: `url(${vector1})` }}>
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
                  image={img1}
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
                  image={img2}
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
                  image={img4}
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
                  image={img3}
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
              <div className="bg-[#D4FFDE] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-[33px] bg-no-repeat bg-[5%_50%]" style={{ backgroundImage: `url(${vector})`}}>
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
