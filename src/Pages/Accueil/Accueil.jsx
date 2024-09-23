import React from 'react'
import Accordion from '../../Components/Accordion'
import Arrow from '../../Components/Arrow'
import CardArrow from '../../Components/CardArrow'
import Cards from '../../Components/Cards'
import CardSmile from '../../Components/CardSmile'
import Message from '../../Components/Message'
import MiniCard from '../../Components/MiniCard'
import MiniCardSquare from '../../Components/MiniCardSquare'
import NavBar from '../../Components/NavBar'
import SmallCheckCircle from '../../Components/SmallCheckCircle'
import bgChoice from "../../images/bg-choice.png"
import bigMother from '../../images/bigMother.png'
import vectorBigMother from "../../images/bigMotherVector.png"
import cniPassport from "../../images/cniPassport.png"
import girlCni from "../../images/girlCni.png"
import groupDatabases from "../../images/groupDatabases.png"
import phone from "../../images/phone.png"
import phoneBg from "../../images/phoneBg.png"
import unionDown from "../../images/Union (1).png"
import unionUp from "../../images/Union.png"
import vectorDatabases from "../../images/vectorDatabases.png"
import FooterAccueil from '../../Components/FooterAccueil'
import { Link } from 'react-router-dom'
import MiniNavBar from '../../Components/MiniNavBar'

export default function Accueil() {
    return (
        <div className=''>

            {/* start navbar */}
            <section className='w-full'>
                <NavBar />
            </section>
            {/* end navbar */}

            <main className='accueil'>
                <section className='women-selfie w-full bg-contain '>
                    {/*start  div with women selfie  */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-32">
                        <div className=" accueil-content  top-[145px] ml-20">
                            <div className="text-nowrap gap-[6px] pb-[27px]">
                                <div className=''>
                                    <Link to="/" className='flex items-center justify-center btn-verification btn-verification-text mb-5'>
                                        VERIFICATION D'UTILISATEURS
                                    </Link>
                                </div>
                                <div className='text-wrap title text-green-deep'>
                                    <span>Construisez une base <br />
                                        d'utilisateur fiables grâce à la <br /></span>
                                    <span className='text-green-color'>vérification d'identité facile et <br />rapide</span>
                                </div>
                            </div>

                            <div className="text-wrap items-start gap-[28px]">
                                <p className='text-left title-content'>
                                    Votre plateforme de vérification d'identité alimentée par l'IA pour la prévention des fraudes, <br />
                                    la conformité et la protection de vos clients. Construisez des communautés numériques de<br />
                                    confiance, améliorez l'expérience utilisateur et stimulez la croissance de votre entreprise
                                </p>
                                <div className='flex flex-wrap items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-[28px] pt-[28px]'>
                                    <div className='btn flex items-center  bg-green-deep pr-2'>
                                        <button className='btn-text flex items-center text-nowrap'>
                                            Commencer gratuitement
                                            <Arrow />
                                        </button>

                                    </div>
                                    <div className='btn flex items-center justify-around bg-green-clean'>
                                        <button className='btn-text text-green-deep'>
                                            Contacter
                                        </button>
                                        <Message/>
                                    </div>
                                </div>
                                <div className='sub-title mt-10 pb-10'>
                                    Nous vous aidons à facilement accepter <br />
                                    des utilisateurs fiables et à repousser les <br />
                                    fraudeurs pour votre entreprise

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* end div with women selfie  */}


                </section>

                {/* start section with 3 cols */}
                <section className=' section-tree-col-selfie'>
                    <div className='flex items-center justify-center py-10 rounded-[20px] bg-white '>
                        <div className=' gap-10  px-10 grid  items-center justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='flex  gap-x-10'>
                                <Cards />
                                <div className="">
                                    <div className="text-left card-icon-title pb-2">
                                        Rendez la vérification facile et <br />
                                        rapide pour vas utilisateurs
                                    </div>
                                    <div className="text-left card-icon-content">
                                        Offrez à vos utilisateurs une expérience de <br />
                                        vérification fluide et sans tracas. Grâce à notre <br />
                                        technologie de pointe, la vérification d'identité <br />
                                        devient un processus simple et rapide.
                                    </div>
                                </div>
                            </div>
                            <div className='flex  gap-x-10'>
                                <CardArrow />
                                <div className="">
                                    <div className="text-left card-icon-title pb-2">
                                        Rendez la vérification facile et <br />
                                        rapide pour vas utilisateurs
                                    </div>
                                    <div className="text-left card-icon-content">
                                        Offrez à vos utilisateurs une expérience de <br />
                                        vérification fluide et sans tracas. Grâce à notre <br />
                                        technologie de pointe, la vérification d'identité <br />
                                        devient un processus simple et rapide.
                                    </div>
                                </div>
                            </div>
                            <div className='flex  gap-x-10'>
                                <CardSmile />
                                <div className="">
                                    <div className="text-left card-icon-title pb-2">
                                        Rendez la vérification facile et <br />
                                        rapide pour vas utilisateurs
                                    </div>
                                    <div className="text-left card-icon-content">
                                        Offrez à vos utilisateurs une expérience de <br />
                                        vérification fluide et sans tracas. Grâce à notre <br />
                                        technologie de pointe, la vérification d'identité <br />
                                        devient un processus simple et rapide.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end div with 3 cols */}

                {/* start section cni and passport */}
                <section>
                    <div className='group-card-vert grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 pt-20 gap-8'>
                        <div className="group-card-vert-content flex flex-col items-center gap-y-5">
                            <div className="">
                                <p className="title-1">
                                    Acceptez un maximum de documents <br />
                                    pour vérifier les identité de vos utilisateurs <br />
                                    dans leur region
                                </p>
                                <p className="title-content-1 py-5">
                                    Simplifiez le processus d'onboarding de vos utilisateurs en leur permettant <br />
                                    de choisir parmi une large gamme de documents d'identité. Notre plateforme <br />
                                    supporte les formats les plus courants, qu'ils soient émis localement ou <br />
                                    internationalement.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Prenez en charge une multitude de types <br />
                                            de documents d'identité, des passeports <br />
                                            aux cartes d'identité nationales.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Adaptez les documents acceptés en <br />
                                            fonction des régions des utilisateurs
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-left content-small-circle-check'>
                                            Respectez les réglementations locales en <br />
                                            matière de vérification d'identité.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className='relative flex flex-col gap-5'>
                                <div className=" card-vert"></div>
                                <div className="card-vert"></div>
                                <img src={cniPassport} alt="" className='cni-img' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section cni and passport  */}

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

                {/* section choice us */}
                <section className='section-choise-us bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bgChoice})` }}>
                    <div className='flex flex-col items-center justify-center py-10' >
                        <a href="#" className="btn-choice flex items-center justify-center">Pourquoi nous choisir</a>
                        <div className="title-1 text-center text-green-deep py-10">
                            Avec Aibiometrics, les <span className='text-green-color'>étrangers</span> anonymes deviennent <br />
                            facilement <span className='text-green-color'>votre base clientèle fiable</span>
                        </div>
                        <div className="title-content-1 text-center">
                            Nos clients sont au cœur de nos préoccupations. Grâce à notre solution, 98% de nos utilisateurs ont déclaré être satisfaits de <br />
                            l'expérience de vérification. De plus, nous avons réduit de 50% le taux d'abandon lors du processus d'inscription.
                        </div>
                        <div className="card-choice-items flex flex-wrap items-center justify-center w-full py-10">
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
                </section>
                {/* end section choice us */}
                
                {/* start section mini navbar  */}
                <section>
                    <MiniNavBar/>
                </section>
                {/* end section mini navbar  */}

                {/* start world section  */}
                <section className='world-section bg-no-repeat bg-[100%_10%] bg-contain'>
                    <div className='pt-[180px] world-section-content sm:pl-[2rem] md:pl-[4rem] lg:pl-[8rem]'>
                        <a href="#" className="btn-choice flex items-center justify-center">A propos de nous</a>
                        <div className="title-1 py-5">
                            Des méthodes de vérification d’identité <br />
                            adaptées à l'Afrique et du  monde entier
                        </div>
                        <div className='title-content-1'>
                            Notre plateforme de vérification d'identité est conçue pour s'adapter aux spécificités de <br />
                            chaque marché, tout en offrant une couverture mondiale inégalée. Que vous opériez en <br />
                            Afrique, en Europe, en Asie ou en Amérique, nous vous proposons une solution flexible <br />
                            et évolutive. Grâce à notre base de données constamment mise à jour et à notre <br />
                            expertise locale, nous prenons en charge une multitude de documents d'identité et de <br />
                            normes réglementaires.
                        </div>
                        <div className='flex flex-wrap items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-[28px] pt-[28px]'>
                            <div className='btn flex items-center  bg-green-color pr-2'>
                                <button className='big-btn-about-us flex items-center text-nowrap text-white'>
                                    Voir tous les pays
                                    <Arrow />
                                </button>

                            </div>
                            <div className='btn flex items-center justify-around bg-green-deep'>
                                <button className='btn-text text-white'>
                                    Contacter
                                </button>
                                <Message />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end world section  */}

                {/* start experience utilisateur  */}
                <section className=' px-5 pt-10 pb-20 bg-white mt-10'>
                    <div>
                        <div>
                            <div className='flex items-center justify-center py-5'>
                                <a href="#" className="btn-choice flex items-center justify-center">A propos de nous</a>
                            </div>
                            <div className='title-1 text-center'>
                                Une expérience utilisateur fluide et intuitive
                            </div>
                            <div>
                                <div className='title-content-1 text-center pt-5 pb-20'>
                                    Notre processus de vérification est conçu pour être aussi simple et intuitif que possible. En quelques clics, vos utilisateurs peuvent <br />
                                    confirmer leur identité et accéder à vos services.
                                </div>
                            </div>
                        </div>
                        <div className="mini-card-connexion flex flex-wrap items-center justify-center w-full gap-y-5 sm:gap-y-5 md:gap-y-20 lg:gap-y-20">
                            <div className="relative">
                                <MiniCardSquare title="Sign In"
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks. <br />
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                                <img src={unionUp} alt="" className='absolute -top-10 left-36 img-arrow' />
                            </div>
                            <div className="relative">
                                <MiniCardSquare title={
                                    <div>
                                        Vérification <br />
                                        de l'utilisateur
                                    </div>
                                }
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                                <img src={unionDown} alt="" className='absolute left-32 img-arrow' />
                            </div>
                            <div className="relative">
                                <MiniCardSquare title={
                                    <div>
                                        Vérifications <br />
                                        AML
                                    </div>
                                }
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks <br />
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                                <img src={unionUp} alt="" className='absolute -top-10 left-36 img-arrow' />
                            </div>
                            <div className="relative">
                                <MiniCardSquare title="Connexion"
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks. <br />
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                                <img src={unionDown} alt="" className='absolute left-32 img-arrow' />
                            </div>
                            <div className="relative">
                                <MiniCardSquare title={
                                    <div>
                                        Detection <br />
                                        de fraudes
                                    </div>
                                }
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks <br />
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                                <img src={unionUp} alt="" className='absolute -top-10 left-36 img-arrow' />
                            </div>
                            <div className="groupDown">
                                <MiniCardSquare title="Transactions"
                                    content={
                                        <div>
                                            Orgestration identity <br />
                                            vérification checks. <br />
                                            code-free. Place <br />
                                            checks at any stage of
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end experience utilisateur  */}

                {/* start section phone  */}
                <section className=''>
                    <div className=' flex pt-28'>
                        <div className=" flex flex-col  w-full items-start phone-accordion gap-x-10 ">
                            <div className='top-accordion'>
                                <div className='flex items-start justify-start py-5'>
                                    <a href="#" className="btn-choice flex items-center justify-center">A propos de nous</a>
                                </div>
                                <div className='title-1 '>
                                    Une interface intuitive pour une <br />
                                    prise en main rapide
                                </div>
                                <div className='title-content-1  text-justify py-10'>
                                    Notre plateforme est conçue pour être accessible à tous, quel que soit votre <br />
                                    niveau de compétence technique. Grâce à une interface intuitive et à une <br />
                                    navigation simple, vous pouvez rapidement prendre en main nos outils et <br />
                                    configurer vos processus de vérification. Notre équipe d'experts est <br />
                                    également à votre disposition pour vous accompagner dans la mise en <br />
                                    œuvre de notre solution.
                                </div>
                            </div>
                            <div className='w-full'>
                                <Accordion />
                            </div>
                            <div className='flex flex-wrap items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start gap-[28px] pt-[28px] pb-16'>
                                <div className='btn flex items-center justify-around  bg-green-color '>
                                    <button className='big-btn-about-us flex items-center text-nowrap text-white'>
                                        Voir tous les pays
                                    </button>
                                    <Arrow />
                                </div>
                                <div className='btn flex items-center justify-around bg-green-deep'>
                                    <button className='btn-text text-white'>
                                        Contacter
                                    </button>
                                    <Message />
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full bg-no-repeat bg-cover bg-left bg-phone ov' style={{ backgroundImage: `url(${phoneBg})` }}>
                            <div className='absolute w-[9rem] h-[18rem] -bottom-[3%] -left-8 z-20'>
                                <img src={phone} alt="" className='' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section phone  */}

                {/* start footer section  */}
                <section className='z-50'>
                    <FooterAccueil/>
                </section>
                {/* end footer section  */}
            </main>
        </div>
    )
}
