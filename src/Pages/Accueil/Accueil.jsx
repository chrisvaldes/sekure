import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../../Components/Accordion'
import AccordionMiniCardSquare from '../../Components/accueil/AccordionMiniCardSquare'
import CardAccueil from '../../Components/accueil/CardAccueil'
import Footer from '../../Components/Footer'
import MiniCard from '../../Components/MiniCard'
import MiniCardSquare from '../../Components/MiniCardSquare'
import MiniNavBar from '../../Components/MiniNavBar'
import NavBar from '../../Components/NavBar'
import SmallCheckCircle from '../../Components/SmallCheckCircle'
import cardArrow from "../../images/accueil/card-arrow.png"
import cardIcon from "../../images/accueil/card-icon.png"
import cardSmile from "../../images/accueil/card-smile.png"
import phoneMobile from "../../images/accueil/full-img-phone.png"
import vector from "../../images/accueil/vectors.png"
import women from "../../images/accueil/women-selfie.png"
import bgChoice from "../../images/bg-choice.png"
import bigMother from '../../images/bigMother.png'
import vectorBigMother from "../../images/bigMotherVector.png"
import cniPassport from "../../images/cniPassport.png"
import girlCni from "../../images/girlCni.png"
import groupDatabases from "../../images/groupDatabases.png"
import arrowWhite from "../../images/icons/arrowWhite.png"
import message from "../../images/icons/messageWhite.png"
import phone from "../../images/phone.png"
import phoneBg from "../../images/phoneBg.png"
import unionDown from "../../images/Union (1).png"
import unionUp from "../../images/Union.png"
import vectorDatabases from "../../images/vectorDatabases.png"


export default function Accueil() {

    const cniRef = useRef()
    const bigMotherRef = useRef()
    const bigMotherWrapRef = useRef()
    const girlCniRef = useRef()
    const groupDatabasesRef = useRef()
    const groupDatabaseRef = useRef()
    const groupDatabaseWrapRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === cniRef.current) {
                        cniRef.current.classList.add("active");
                        observer.unobserve(cniRef.current);
                    } else if (entry.target === bigMotherRef.current) {
                        bigMotherRef.current.classList.add("active");
                        observer.unobserve(bigMotherRef.current);
                    } else if (entry.target === bigMotherWrapRef.current) {
                        bigMotherWrapRef.current.classList.add("active");
                        observer.unobserve(bigMotherWrapRef.current);
                    } else if (entry.target === girlCniRef.current) {
                        girlCniRef.current.classList.add("active");
                        observer.unobserve(girlCniRef.current);
                    } else if (entry.target === groupDatabaseRef.current) {
                        groupDatabaseRef.current.classList.add("active");
                        observer.unobserve(groupDatabaseRef.current);
                    } else if (entry.target === groupDatabaseWrapRef.current) {
                        groupDatabaseWrapRef.current.classList.add("active");
                        observer.unobserve(groupDatabaseWrapRef.current);
                    }
                }
            });
        });

        if (cniRef.current) {
            observer.observe(cniRef.current);
        }
        if (bigMotherRef.current) {
            observer.observe(bigMotherRef.current);
        }
        if (bigMotherWrapRef.current) {
            observer.observe(bigMotherWrapRef.current);
        }
        if (girlCniRef.current) {
            observer.observe(girlCniRef.current);
        }
        if (groupDatabaseRef.current) {
            observer.observe(groupDatabaseRef.current);
        }
        if (groupDatabaseWrapRef.current) {
            observer.observe(groupDatabaseWrapRef.current);
        }

    }, [])


    return (
        <div className=''>

            {/* start navbar */}
            <section className='w-full'>
                <NavBar />
            </section>
            {/* end navbar */}

            <main className='accueil'>
                {/* women-selfie  */}
                <section className='w-full mt-20'>
                    {/*start  div with women selfie  */}
                    <div className="relative grid items-center justify-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="accueil-content  top-[145px]  md:ml-10 lg:ml-20">
                            <div className=" gap-[6px] pb-[27px] mx-5 sm:mx-0">
                                <div className='verification-btn'>
                                    <Link to="/" className='text-nowrap flex items-center justify-center btn-verification btn-verification-text mb-5'>
                                        VERIFICATION D'UTILISATEURS
                                    </Link>
                                </div>
                                <div className=' title text-green-deep'>
                                    <span>Construisez une base <br />
                                        d'utilisateur fiables grâce à la <br /></span>
                                    <span className='text-green-color'>vérification d'identité facile et rapide</span>
                                </div>
                            </div>

                            <div className="">
                                <p className='title-content mx-5 sm:mx-0'>
                                    Votre plateforme de vérification d'identité alimentée par l'IA pour la prévention des fraudes, <br />
                                    la conformité et la protection de vos clients. Construisez des communautés numériques de<br />
                                    confiance, améliorez l'expérience utilisateur et stimulez la croissance de votre entreprise
                                </p>
                                <div className="flex items-center justify-center w-full">
                                    <div className='flex lg:flex-wrap items-center justify-center md:justify-center md:items-center lg:items-start lg:justify-start gap-x-4 sm:gap-[28px] pt-[28px] w-full'>
                                        <Link to="/" className='flex  accueil-btn'>
                                            <div className='flex text-nowrap items-center justify-around w-full px-2'>
                                                <div className='flex items-center'>
                                                    Commencer
                                                    <span className="hidden sm:block pl-1"> gratuitement</span>
                                                </div>
                                                <img src={arrowWhite} alt="" />
                                            </div>
                                        </Link>
                                        <Link to="/" className=' accueil-btn-clean btn flex items-center justify-around bg-green-clean'>
                                            <span className='btn-text text-green-deep'>
                                                Contacter
                                            </span>
                                            <img src={message} alt="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="women-accueil-bg block lg:hidden relative items-center justify-center h-[611px]" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom left", width: "100%" }}>
                                    <div className="absolute bottom-0 object-contain  h-[611px]" style={{ backgroundImage: `url(${women})`, backgroundRepeat: "no-repeat", backgroundSize: "500px", backgroundPosition: "bottom center", width: "100%" }}>

                                    </div>
                                </div>

                                <div className='sub-title mt-10 pb-10 mx-5 sm:mx-5 md:mx-0'>
                                    Nous vous aidons à facilement accepter <br />
                                    des utilisateurs fiables et à repousser les <br />
                                    fraudeurs pour votre entreprise
                                </div>
                            </div>
                        </div>
                        <div className="women-accueil-bg hidden lg:block items-center justify-center sm:h-[650px] lg:h-[680px]" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: "no-repeat", backgroundSize: "720.54px", backgroundPosition: "center", width: "100%" }}>
                            <div className="absolute bottom-0">
                                <img src={women} alt="" className='' />
                            </div>
                        </div>
                    </div>
                    {/* end div with women selfie  */}


                </section >

                {/* start section with 3 cols */}
                <section section className=' section-tree-col-selfie' >
                    <div className='flex items-center justify-center py-10 rounded-[20px] bg-white '>
                        <div className=' gap-10  px-10 grid  items-center justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='flex'>
                                <CardAccueil
                                    img={cardIcon}
                                    title={
                                        <span>
                                            Rendez la vérification facile et
                                            rapide pour vas utilisateurs
                                        </span>
                                    }
                                    content={
                                        <span>
                                            Offrez à vos utilisateurs une expérience de
                                            vérification fluide et sans tracas. Grâce à notre
                                            technologie de pointe, la vérification d'identité
                                            devient un processus simple et rapide.
                                        </span>
                                    }
                                />
                            </div>
                            <div className='flex'>
                                <CardAccueil
                                    img={cardArrow}
                                    title={
                                        <span>
                                            Rendez la vérification facile et
                                            rapide pour vas utilisateurs
                                        </span>
                                    }
                                    content={
                                        <span>
                                            Offrez à vos utilisateurs une expérience de
                                            vérification fluide et sans tracas. Grâce à notre
                                            technologie de pointe, la vérification d'identité
                                            devient un processus simple et rapide.
                                        </span>
                                    }
                                />
                            </div>
                            <div className='flex'>
                                <CardAccueil
                                    img={cardSmile}
                                    title={
                                        <span>
                                            Rendez la vérification facile et
                                            rapide pour vas utilisateurs
                                        </span>
                                    }
                                    content={
                                        <span>
                                            Offrez à vos utilisateurs une expérience de
                                            vérification fluide et sans tracas. Grâce à notre
                                            technologie de pointe, la vérification d'identité
                                            devient un processus simple et rapide.
                                        </span>
                                    }
                                />
                            </div>

                        </div>
                    </div>
                </section >
                {/* end div with 3 cols */}

                {/* start section cni and passport */}
                <section className='md:px-10'>
                    <div className='group-card-vert grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 pt-20 gap-8'>
                        <div className="group-card-vert-content flex flex-col items-center gap-y-5">
                            <div className="">
                                <p className="title-1">
                                    Acceptez un maximum de documents
                                    pour vérifier les identité de vos utilisateurs
                                    dans leur region
                                </p>
                                <p className="title-content-1 py-5 text-justify">
                                    Simplifiez le processus d'onboarding de vos utilisateurs en leur permettant
                                    de choisir parmi une large gamme de documents d'identité. Notre plateforme
                                    supporte les formats les plus courants, qu'ils soient émis localement ou
                                    internationalement.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='content-small-circle-check text-justify'>
                                            Prenez en charge une multitude de types
                                            de documents d'identité, des passeports
                                            aux cartes d'identité nationales.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Adaptez les documents acceptés en
                                            fonction des régions des utilisateurs
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Respectez les réglementations locales en
                                            matière de vérification d'identité.
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className='relative flex flex-col items-center justify-center gap-5'>
                                <div className=" card-vert"></div>
                                <div className="card-vert"></div>
                                <div className="absolute flex items-center justify-center w-[325px] h-[251px] lg:w-full lg:h-full ">
                                    <img ref={cniRef} src={cniPassport} alt="" className='cni-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section cni and passport  */}

                {/* start section with big mother */}
                <section className='md:px-10'>
                    <div className='group-card-horiz grid grid-cols-1 items-center justify-center bg-no-repeat  md:grid-cols-1 lg:grid-cols-2 lg:pt-32 gap-x-8 gap-y-20 mt-10' style={{ backgroundImage: `url(${vectorBigMother})` }}>
                        <div className='order-img'>
                            <div className="hidden lg:block items-center justify-center">
                                <div className='relative flex gap-5'>
                                    <div className=" card-horiz"></div>
                                    <div className="card-horiz"></div>
                                    <img ref={bigMotherRef} src={bigMother} alt="" className=' bigMother' />
                                </div>
                            </div>
                            <div className="lg:hidden flex items-center justify-center">
                                <div className='relative flex flex-col gap-y-5'>
                                    <div className=" card-vert"></div>
                                    <div className="card-vert"></div>
                                    <div className="absolute w-[326px] h-[295px] flex items-center justify-center bottom-0 left-1 sm:left-5 md:left-10">
                                        <img ref={bigMotherWrapRef} src={bigMother} alt="" className='bigMother-wrap' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" order-text flex flex-col items-center gap-y-5">
                            <div className="">
                                <div className="title-1">
                                    Identifications et Vérifications par scan
                                    facial inteligent et rapide
                                </div>
                                <div className="title-content-1 py-5 text-justify">
                                    Grâce à notre technologie de scan facial avancée, la vérification des identités
                                    devient un processus rapide et sécurisé. Cela permet une expérience utilisateur
                                    fluide tout en maintenant un haut niveau de sécurité.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Obtenez des résultats instantanés pour une
                                            expérience utilisateur fluide.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Taux de reconnaissance faciale élevé, même
                                            en cas de mauvaise qualité d'image.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Protégez vos utilisateurs contre l'usurpation
                                            d'identité
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className=' content-small-circle-check text-justify'>
                                            Offrez à vos utilisateurs une expérience
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
                <section className='md:px-15'>
                    <div className='group-card-vert grid grid-cols-1 items-center justify-center md:grid-cols-1 pt-10 lg:grid-cols-2 lg:py-20'>
                        <div className="flex flex-col items-center gap-y-5">
                            <div className="">
                                <div className="title-1">
                                    Protection contre les fraudes et
                                    personnes sous sanctions AML
                                </div>
                                <div className="title-content-1 py-5 text-justify">
                                    Respectez  les réglementations en vigueur et renforcez la sécurité de votre plateforme
                                    en détectant et en empêchant les fraudes. Notre système de vérification intègre des
                                    contrôles AML (anti-blanchiment d'argent) et des vérifications d'antécédents pour
                                    identifier les personnes à risque.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='content-small-circle-check text-justify'>
                                            Consultez des bases de données intl pour
                                            détecter les personnes à risque.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Surveillance continue pour une détection
                                            proactive.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Renforcement de la confiance des
                                            utilisateurs dans votre service.
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Identifiez et empêchez les activités liées au
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
                                <div className="absolute w-full h-full flex items-center justify-center lg:bottom-3  lg:left-0">
                                    <img ref={girlCniRef} src={girlCni} alt="" className='girl-cni w-[300px] h-[190px] lg:w-[420px] lg:h-[260px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section girl  */}

                {/* start section communication */}
                <section className="group-card-vert bg-no-repeat bg-right md:px-20" style={{ backgroundImage: `url(${vectorDatabases})` }}>
                    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-1 lg:grid-cols-2 py-10 gap-x-8 gap-y-10 lg:gap-y-20'>

                        <div className='order-img'>
                            <div className="hidden lg:block items-center justify-center">
                                <div className='relative flex items-center justify-center gap-5'>
                                    <div className=" card-horiz"></div>
                                    <div className="card-horiz"></div>
                                    <div className="absolute flex items-center justify-center">
                                        <img ref={groupDatabaseRef} src={groupDatabases} alt="" className='group-database' />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden w-full h-full flex items-center justify-center">
                                <div className='relative flex items-center justify-center flex-col gap-y-5'>
                                    <div className=" card-vert"></div>
                                    <div className="card-vert"></div>
                                    <div className="absolute w-[300px] h-[200px] md:w-[329px] md:h-[214px] flex items-center justify-center">
                                        <img ref={groupDatabaseWrapRef} src={groupDatabases} alt="" className='group-database' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-no-repeat">
                            <div className="">
                                <div className="title-1">
                                    Identifications et Vérifications par scan
                                    facial inteligent et rapide
                                </div>
                                <div className="title-content-1 py-5 text-justify">
                                    Grâce à notre technologie de scan facial avancée, la vérification des identités
                                    devient un processus rapide et sécurisé. Cela permet une expérience utilisateur
                                    fluide tout en maintenant un haut niveau de sécurité.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Obtenez des résultats instantanés pour une
                                            expérience utilisateur fluide.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Taux de reconnaissance faciale élevé, même
                                            en cas de mauvaise qualité d'image.
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Protégez vos utilisateurs contre l'usurpation
                                            d'identité
                                        </div>

                                    </div>
                                    <div className="flex gap-3">
                                        <SmallCheckCircle />
                                        <div className='text-justify content-small-circle-check'>
                                            Offrez à vos utilisateurs une expérience
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
                    <div className='flex flex-col items-center justify-center py-20' >
                        <a href="#" className="btn-choice flex items-center justify-center">Pourquoi nous choisir</a>
                        <div className="title-1 text-center text-green-deep py-10 hidden lg:block">
                            Avec Aibiometrics, les <span className='text-green-color'>étrangers</span> anonymes deviennent <br />
                            facilement <span className='text-green-color'>votre base clientèle fiable</span>
                        </div>
                        <div className="title-1 text-center text-green-deep py-10 block lg:hidden px-5">
                            Avec Aibiometrics, les <span className='text-green-color'>étrangers</span> anonymes deviennent
                            facilement <span className='text-green-color'>votre base clientèle fiable</span>
                        </div>
                        <div className="title-content-1 text-center hidden lg:block">
                            Nos clients sont au cœur de nos préoccupations. Grâce à notre solution, 98% de nos utilisateurs ont déclaré être satisfaits de <br />
                            l'expérience de vérification. De plus, nous avons réduit de 50% le taux d'abandon lors du processus d'inscription.
                        </div>
                        <div className="title-content-1 text-justify block lg:hidden px-5">
                            Nos clients sont au cœur de nos préoccupations. Grâce à notre solution, 98% de nos utilisateurs ont déclaré être satisfaits de <br />
                            l'expérience de vérification. De plus, nous avons réduit de 50% le taux d'abandon lors du processus d'inscription.
                        </div>
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
                </section>
                {/* end section choice us */}

                {/* start section mini navbar  */}
                <section>
                    <MiniNavBar />
                </section>
                {/* end section mini navbar  */}

                {/* start world section  */}
                <section className='world-section bg-no-repeat pb-40 sm:pb-2 lg:pt-1 sm:bg-[100%_10%] bg-contain'>
                    <div className=' world-section-content lg:pl-[8rem]'>
                        <div className="btn-about flex md:items-center md:justify-center lg:items-start lg:justify-start w-full">
                            <Link to="/about" className="btn-choice flex items-center justify-center">A propos de nous</Link>
                        </div>
                        <div className="title-1 flex md:items-center md:justify-center lg:items-start lg:justify-start py-5">
                            Des méthodes de vérification d’identité <br />
                            adaptées à l'Afrique et du  monde entier
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className='title-content-1 flex md:items-center md:justify-center lg:items-start lg:justify-start text-justify sm:px-10 lg:px-0'>
                                Notre plateforme de vérification d'identité est conçue pour s'adapter aux spécificités de
                                chaque marché, tout en offrant une couverture mondiale inégalée. Que vous opériez en
                                Afrique, en Europe, en Asie ou en Amérique, nous vous proposons une solution flexible
                                et évolutive. Grâce à notre base de données constamment mise à jour et à notre
                                expertise locale, nous prenons en charge une multitude de documents d'identité et de
                                normes réglementaires.
                            </div>
                            <div className="">

                            </div>
                        </div>
                        <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                            <Link to="/" className='big-btn-about-us voir-tout-pays-phone-color flex items-center justify-between bg-green-color '>
                                <span className=' flex items-center text-nowrap text-white'>
                                    Voir les pays
                                </span>
                                <img src={arrowWhite} alt="" />
                            </Link>
                            <Link to="/" className='btn-contacter-phone voir-tout-pays-phone-deep flex items-center justify-center bg-green-deep'>
                                <span className='btn-text text-white'>
                                    Contacter
                                </span>
                                <img src={message} alt="" />
                            </Link>
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

                        <div className="mini-card-connexion  flex-wrap items-center justify-center w-full gap-y-5 sm:gap-y-5 md:gap-y-20 lg:gap-y-20">
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

                        <div className='mini-card-connexion-mobile w-full flex-col items-center justify-center gap-5'>
                            <div className=" mb-5">
                                <AccordionMiniCardSquare title="Sign Up"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
                                        </div>
                                    }
                                />
                            </div>
                            <div className=" mb-5">
                                <AccordionMiniCardSquare title="Vérification de l'utilisateur"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
                                        </div>
                                    }
                                />
                            </div>
                            <div className=" mb-5">
                                <AccordionMiniCardSquare title="Vérification AML"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
                                        </div>
                                    }
                                />
                            </div>
                            <div className=" mb-5">
                                <AccordionMiniCardSquare title="Connexion"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
                                        </div>
                                    }
                                />
                            </div>
                            <div className=" mb-5">
                                <AccordionMiniCardSquare title="Détection de fraudes"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
                                        </div>
                                    }
                                />
                            </div>
                            <div className="">
                                <AccordionMiniCardSquare title="Transaction"
                                    content={
                                        <div>
                                            Notre plateforme est conçue pour être accessible à <br />
                                            tous, quel que soit votre niveau de compétence <br />
                                            technique. Grâce à une interface intuitive et à une
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
                    <div className=' flex pt-10 lg:pt-28'>
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

                            <div className="  lg:hidden flex items-center justify-center w-full object-contain">
                                <img src={phoneMobile} alt="" />
                            </div>

                            <div className='w-full'>
                                <Accordion />
                            </div>
                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-between bg-green-color '>
                                    <span className=' flex items-center text-nowrap text-white'>
                                        Voir les pays
                                    </span>
                                    <img src={arrowWhite} alt="" />
                                </Link>
                                <Link to="/" className='btn-contacter-phone voir-tout-pays-phone-deep flex items-center justify-center bg-green-deep'>
                                    <span className='btn-text text-white'>
                                        Contacter
                                    </span>
                                    <img src={message} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className='relative w-full bg-no-repeat bg-cover bg-left bg-phone ov' style={{ backgroundImage: `url(${phoneBg})` }}>
                            <div className='absolute w-[9rem] h-[18rem] -bottom-2 -left-8'>
                                <img src={phone} alt="" className='' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end section phone  */}

                {/* start footer section  */}
                <section className='z-50'>
                    <Footer />
                </section>
                {/* end footer section  */}
            </main >
        </div >
    )
}
