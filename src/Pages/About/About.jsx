import React from 'react'
import { Link } from 'react-router-dom'
import CardAbout from '../../Components/about/CardAbout'
import MinivavAbout from '../../Components/about/MinivavAbout'
import WomenCard from '../../Components/about/WomenCard'
import Arrow from '../../Components/Arrow'
import Card from '../../Components/customer/Card'
import FooterAccueil from '../../Components/FooterAccueil'
import Message from '../../Components/Message'
import MiniCard from '../../Components/MiniCard'
import NavBar from '../../Components/NavBar'
import img1 from "../../images/about/aboutImg1.png"
import img3 from "../../images/about/aboutImg3.png"
import bgDotted from "../../images/about/bg-dotted.png"
import boxBg from "../../images/about/boxBg.png"
import boxVector from "../../images/about/boxVector.png"
import fichier from "../../images/about/fichier.png"
import frameSelfie from "../../images/about/Frameselfie.png"
import database from "../../images/about/process.png"
import processVector from "../../images/about/processVector.png"
import rectangle from "../../images/about/Rectangle.png"
import vectorBg from "../../images/about/Vector.png"
import womenSelfie from '../../images/about/woman-selfie.png'
import arrowWhite from '../../images/icons/arrowWhite.png'

export default function About() {
  return (
    <div>
      <section>
        <NavBar />
      </section>

      <div className="about">
        <section className='w-full bg-[#EFFFF3] ' style={{ backgroundImage: `url(${vectorBg})`, backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundSize: "830px 442px" }}>
          <div className='pt-32 pb-20'>
            <Link to="/" class="about-btn-title">A propos de nous</Link>
            <h2 className='about-title py-5'>
              Nous vous aidons à batir des solutions aussi <br />
              <span class="text-cyan-color">crédibles</span> que <span class="text-cyan-color">faciles à utiliser</span>
            </h2>
            <p className='about-content pb-10'>
              Nos solutions, conçues pour s'adapter à vos besoins spécifiques, vous offrent une expérience utilisateur intuitive. Grâce à une interface claire et des processus <br />
              automatisés, vous gagnerez en efficacité et réduirez les risques d'erreur. Nous mettons à votre disposition les outils nécessaires pour bâtir un système de <br />
              vérification fiable et efficace.
            </p>
            {/* <div className='flex items-center justify-center gap-x-5 pt-5'>
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
            </div> */}
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
            <div className='about-subtitle py-10'>
              Nous réinventons la vérification d'identité en alliant la puissance de <br />
              l'intelligence artificielle à une approche centrée sur l'utilisateur. Nous voulons <br />
              vous offrir une solution simple, sécurisée et fiable pour protéger vos données <br />
              sensibles et renforcer la confiance dans les interactions numériques.
            </div>
          </div>
        </section>

        <section>
          <div className='bg-[-10%_92%]' style={{ backgroundImage: `url(${boxBg})`, backgroundRepeat: "no-repeat" }}>
            <div>
              <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center  gap-y-8">
                  <div className='flex items-center justify-center'>
                    <img src={img1} alt="" />
                  </div>
                  <div class="flex flex-col items-center justify-end mx-10 mt-5 md:mt-32 lg:mt-32">
                    <h2 class="about-cart-title mb-5 w-full">
                      Vous aider à connaître vos utilisateurs <br />
                      et lutter contre la fraude
                    </h2>
                    <p class="about-cart-content mb-10 w-full">
                      La connaissance client est essentielle pour prévenir la fraude et le blanchiment <br />
                      d'argent. Nos solutions vous permettent de créer des profils clients détaillés et de <br />
                      détecter les anomalies comportementales. Grâce à notre expertise en matière <br />
                      d'analyse de données, vous pouvez identifier les risques potentiels et prendre des <br />
                      décisions éclairées pour protéger votre entreprise
                    </p>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center  gap-y-8">

                  <div class="flex flex-col items-center justify-end mx-10 mt-5 ">
                    <h2 class="about-cart-title mb-5 w-full">
                      Vous aider à connaître vos utilisateurs <br />
                      et lutter contre la fraude
                    </h2>
                    <p class="about-cart-content mb-10 w-full">
                      La connaissance client est essentielle pour prévenir la fraude et le blanchiment <br />
                      d'argent. Nos solutions vous permettent de créer des profils clients détaillés et de <br />
                      détecter les anomalies comportementales. Grâce à notre expertise en matière <br />
                      d'analyse de données, vous pouvez identifier les risques potentiels et prendre des <br />
                      décisions éclairées pour protéger votre entreprise
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
              <div className=" px-4  sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center  gap-y-8">

                  <div class="flex flex-col items-center justify-end mx-10 mt-5 ">
                    <h2 class="about-cart-title mb-5 w-full">
                      Vous aider à connaître vos utilisateurs <br />
                      et lutter contre la fraude
                    </h2>
                    <p class="about-cart-content mb-10 w-full">
                      La connaissance client est essentielle pour prévenir la fraude et le blanchiment <br />
                      d'argent. Nos solutions vous permettent de créer des profils clients détaillés et de <br />
                      détecter les anomalies comportementales. Grâce à notre expertise en matière <br />
                      d'analyse de données, vous pouvez identifier les risques potentiels et prendre des <br />
                      décisions éclairées pour protéger votre entreprise
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="pt-20"></div>
              <div className="py-20" style={{ backgroundImage: `url(${boxVector})`, backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "contain" }}>
                <div className='about-cart-title pb-5'>
                  Nous supportons votre croissance et <br />
                  votre deployement dans les autres pays
                </div>
                <div className='about-cart-content'>
                  Notre ambition est de vous accompagner dans votre développement à <br />
                  l'international. Grâce à notre présence mondiale et à notre expertise des <br />
                  réglementations AML spécifiques à chaque pays, nous vous aidons à étendre <br />
                  votre activité en toute sérénité. Nous adaptons nos solutions à vos besoins et vous <br />
                  fournissons un support personnalisé à chaque étape de votre croissance.
                </div>
              </div>

            </div>
            <div className="pb-20 pt-10">
              <div className="card-choice-items flex items-center justify-center w-full py-10">
                <MiniCard title="6 s"
                  content={
                    <>
                      Temps de traitement <br /> moyen
                    </>
                  } />
                <MiniCard title="95%"
                  content={
                    <>
                      Taux de verification <br /> à la premiere tentation
                    </>
                  } />
                <MiniCard title="2000+"
                  content={
                    <>
                      Types de documents<br /> acceptés
                    </>
                  } />
                <MiniCard title="180 +"
                  content={
                    <>
                      Pays couverts dans <br /> le monde
                    </>
                  } />
                <MiniCard title="+95%"
                  content={
                    <>
                      Taux de détection des <br /> fraudes
                    </>
                  } />
              </div>
            </div>
          </div>
        </section>



        <section className='bg-[#285246] lg:pl-5 sm:pr-5 pb-20' style={{ backgroundImage: `url(${bgDotted})`, backgroundPosition: "bottom center", backgroundRepeat: "no-repeat" }}>
          <div className='w-full'>
            <div className='text-left grid items-center justify-around sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 w-full'>
              <div className='h-full pt-20 w-full col-span-2 lg:col-span-1 flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                <Link to="/" className='about-btn-title flex items-center justify-center'>à propos de nous</Link>
                <div className='about-dotted-title pt-4 pb-8 w-full flex items-center justify-center text-center lg:text-left'>
                  Un service qui
                  s’adapte selon votre
                  secteur d’activité ...
                </div>
                <div className='about-dotted-content pb-4w-full flex items-center justify-center text-center lg:text-left'>
                  Chaque secteur d'activité a ses spécificités. C'est pourquoi
                  nous proposons des solutions flexibles et personnalisables. Nous
                  travaillons en étroite collaboration avec vous pour comprendre
                  vos enjeux et concevoir une solution sur mesure. Que vous soyez
                  une fintech, une banque ou une entreprise du e-commerce, nous
                  avons la solution adaptée à vos besoins.
                </div>
                <div class=" flex  gap-1 pt-10 w-full items-center justify-center text-center lg:text-left">
                  {/* <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                    <span class="text-nowrap" >Connexion</span>
                    <Arrow background="#FFFF" textcolor="#285246" />
                  </Link>
                  <Link to="/" class=" bg-white  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                    <span class="text-green-deep text-nowrap pr-5">contacter</span>
                    <Message background="#285246" textcolor="#FFFF" />
                  </Link> */} 
                    <Link to="/pricing" class=" accueil-btn-clean btn bg-green-color flex items-center justify-around gap-x-2">
                      <div class="btn-text flex text-green-deep text-nowrap ">Connexion</div>
                      <Arrow background="#FFFF" textcolor="#285246" />
                    </Link>
                    <Link to="/pricing" class=" accueil-btn-clean btn bg-white flex items-center justify-around gap-x-2">
                      <div class="btn-text flex text-green-deep text-nowrap ">contacter</div>
                      <Message background="#285246" textcolor="#FFFF" />
                    </Link>
                </div>
              </div>

              <div className=' lg:col-span-2 hidden lg:block'>
                <div className="gap-5 w-full pricingCard flex flex-wrap items-center justify-center">
                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />

                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />

                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />
                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />
                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />
                  <CardAbout
                    fichier={fichier}
                    textBnt="Disponible par pays"
                    title={
                      <span>
                        Albiometrics pour les fintech <br />
                        et structures financieres
                      </span>
                    }
                    content={
                      <div>
                        Localement ou internationalement, vous achats <br />
                        en ligne ne connaissent plus de limite avec les <br />
                        cartes virtuelles Visa
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='pt-16 card-scroll-horiz-screening pb-20 w-full block lg:hidden'>
            <div className='w-full'>
              <div className='grid grid-cols-3 gap-y-8 overflow-x-auto px-8 w-full gap-x-80'>
                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />

                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />

                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />
                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />
                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />
                <CardAbout
                  fichier={fichier}
                  textBnt="Disponible par pays"
                  title={
                    <span>
                      Albiometrics pour les fintech <br />
                      et structures financieres
                    </span>
                  }
                  content={
                    <div>
                      Localement ou internationalement, vous achats <br />
                      en ligne ne connaissent plus de limite avec les <br />
                      cartes virtuelles Visa
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className='pt-16 card-scroll-horiz-screening  pb-20'>
                <div>
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
              </section> */}

        <section className=' pt-20 bg-[#EFFFF3]'>
          <div style={{ backgroundImage: `url(${processVector})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom left" }}>
            <div className='flex flex-col items-center justify-center'>
              <Link to="/" className='about-btn-title flex items-center justify-center'>à propos de nous</Link>
              <span className='about-process-title py-5'>
                Un parcours utilisateur fluide et intuitif qui ne laisse pas <br />
                vos utilisateurs perdre du temps
              </span>
              <div className='about-process-content pb-5'>
                Offrez à vos utilisateurs une expérience fluide et personnalisée. Notre parcours utilisateur intuitif est conçu pour les satisfaire dès le premier clic.
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img src={database} alt="" />
            </div>
          </div>
        </section>


        <section style={{ backgroundImage: `url(${frameSelfie})`, backgroundPosition: "bottom right", backgroundRepeat: "no-repeat" }} >
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="pt-24">
              <div className=' py-20'>
                <img src={rectangle} alt="" className='pb-10' />
                <img src={rectangle} alt="" />
                <img src={womenSelfie} alt="" className='absolute womenSelfie' />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5">
              <div className='about-womenselfie-title w-full'>
                Ce qui nous distingue ? Notre engagement à <br />
                vous offrir des solutions innovantes, fiables et <br />
                adaptées à vos enjeux. Nous croyons en une <br />
                relation de partenariat basée sur la confiance <br />
                et la transparence.
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-7 pt-5'>
                <WomenCard />
                <WomenCard />
                <WomenCard />
                <WomenCard />
                <WomenCard />
                <WomenCard />
              </div>
            </div>

          </div>
        </section>
        <section className='pt-20 pb-20 bg-[#EAFFF1]'>
          <div>
            <div className='flex flex-col items-center justify-center'>
              <Link to="/" className='about-btn-title flex items-center justify-center'>à propos de nous</Link>
              <div className='about-process-title py-5'>
                Tout ce que vous avez toujours voulu savoir sur Aibiomerics (et <br />
                ce que vous n'osiez pas demander).
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

        <MinivavAbout />

        <section>
          <FooterAccueil />
        </section>
      </div>
    </div>
  )
}
