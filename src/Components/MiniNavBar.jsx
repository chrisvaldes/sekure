
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import detectionApp from '../images/accueil/DetectionAppareil.png';
import preuveAddress from '../images/accueil/preveuAdresse.png';
import sanctions from "../images/accueil/sanctions.png";
import arrowLeft from "../images/accueil/VectorLeft.png";
import arrowRight from "../images/accueil/VectorRight.png";
import arrowWhite from '../images/icons/arrowWhite.png';
import message from "../images/icons/messageWhite.png";
import Arrow from './Arrow';
import Message from './Message';
import SmallCheckCircle from './SmallCheckCircle';
import verificatiIdentite from "../images/cni.png"
import verificationBiomet from "../images/handPhone1.png"


export default function MiniNavBar() {
    const [content, setContent] = useState("Vérification d'identité");

    const handleNavClick = (event, newListItem) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setContent(newListItem);
    };

    const [activeLink, setActiveLink] = useState('');

    const options = [
        "Vérification d'identité",
        "Vérification biométrique",
        "Preuve d'adresse",
        "Détection d'appareil",
        "Sanctions"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (currentIndex < options.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleClick = (link) => {
        setActiveLink(link);
    };

    // const verificatiIdentiteRef = useRef()
    // const verificatiIdentiteWrapRef = useRef()

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 if (entry.target === verificatiIdentiteRef.current) {
    //                     verificatiIdentiteRef.current.classList.add("active");
    //                     observer.unobserve(verificatiIdentiteRef.current);
    //                 }
    //                 else if (entry.target === verificatiIdentiteWrapRef.current) {
    //                     verificatiIdentiteWrapRef.current.classList.add("active");
    //                     observer.unobserve(verificatiIdentiteWrapRef.current);
    //                 }
    //             }
    //         });
    //     });

    //     if (verificatiIdentiteRef.current) {
    //         observer.observe(verificatiIdentiteRef.current);
    //     }
    //     if (verificatiIdentiteWrapRef.current) {
    //         observer.observe(verificatiIdentiteWrapRef.current);
    //     }
         

    // }, [])


    return (
        <section>
            <div className=" bg-white extra px-5 sm:px-10">
                <div className=" w-full flex flex-col items-center justify-center lg:items-start text-cyan-deep pt-10">
                    <Link to="/" className='bg-green-color flex items-center justify-center mini-nav-btn mini-nav-btn-text'>
                        Nos Outils
                    </Link>
                    <span className='title-1 text-left lg:text-left pt-5 hidden lg:block'>
                        Tous les outils qu'il vous faut pour protéger <br />
                        votre plateforme de la fraude
                    </span>
                    <span className='title-1 text-left pt-5 block lg:hidden'>
                        Tous les outils qu'il vous faut pour protéger
                        votre plateforme de la fraude
                    </span>
                </div>
                <div className=''>
                    <div className="mini-nav-without-arrow">
                        <ul className="flex mini-nav-items items-center justify-around bg-[#DFFCE3] h-[54px] rounded-xl my-10 gap-x-5 px-5">
                            <li className={`mini-nav-option ${content === "Vérification d'identité" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Vérification d'identité")}>
                                <a href="#">Vérification d'identité</a>
                            </li>
                            <li className={`mini-nav-option ${content === "Vérification biométrique" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Vérification biométrique")}>
                                <a href="#">Vérification biométrique</a>
                            </li>
                            <li className={`mini-nav-option ${content === "Preuve d'adresse" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Preuve d'adresse")}>
                                <a href="#">Preuve d'adresse</a>
                            </li>
                            <li className={`mini-nav-option ${content === "Détection d'appareil" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Détection d'appareil")}>
                                <a href="#">Détection d'appareil</a>
                            </li>
                            <li className={`mini-nav-option ${content === "Sanctions" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Sanctions")}>
                                <a href="#">Sanctions</a>
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center justify-center gap-16 pb-10 lg:pb-16">
                            {content === "Vérification d'identité" && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="flex items-center justify-center  w-full">
                                        <div className="hand-div2 py-10 flex items-center justify-center w-full">
                                            <div className='verification-identiter flex items-center justify-center relative'>
                                                <div className="absolute h-[450px]">
                                                    <img src={verificatiIdentite} alt="" className='verification-img' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex pt-10">
                                                <div class=" flex flex-wrap w-full items-center justify-start gap-5 pb-10">
                                                    <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-nowrap" >Commencer </span>
                                                        <Arrow background="#FFFF" textcolor="#285246" />
                                                    </Link>
                                                    <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-white text-nowrap pr-5">Contacter</span>
                                                        <Message background="#FFFF" textcolor="#285246" />
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            )}
                            {content === "Vérification biométrique" && (
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="flex items-center justify-center  hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                        <div className='verification-biometrique relative flex items-center justify-center'>
                                            <div className="absolute flex items-center justify-center">
                                                <img src={verificationBiomet} alt="" className='verification-img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex pt-10">
                                                <div class=" flex flex-wrap w-full items-center justify-start gap-5 pb-10">
                                                    <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-nowrap" >Commencer </span>
                                                        <Arrow background="#FFFF" textcolor="#285246" />
                                                    </Link>
                                                    <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-white text-nowrap pr-5">Contacter</span>
                                                        <Message background="#FFFF" textcolor="#285246" />
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            )}
                            {/* REFERENCE ....... */}
                            {content === "Preuve d'adresse" && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="flex items-center justify-center  hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                        <div className="preuve-adresse relative flex items-center justify-center">
                                            <div className="absolute flex items-center justify-center">
                                                <img src={preuveAddress} alt="" className='verification-img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex pt-10">
                                                <div class=" flex flex-wrap w-full items-center justify-start gap-5 pb-10">
                                                    <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-nowrap" >Commencer </span>
                                                        <Arrow background="#FFFF" textcolor="#285246" />
                                                    </Link>
                                                    <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-white text-nowrap pr-5">Contacter</span>
                                                        <Message background="#FFFF" textcolor="#285246" />
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )}
                            {/** END REFERENCE ....... */}
                            {content === "Détection d'appareil" && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="hand-div2 flex items-center justify-center relative">
                                        <div className="detection-appareil relative flex items-center justify-center">
                                            <div className="absolute flex items-center justify-center">
                                                <img src={detectionApp} alt="" className='verification-img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 ">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex pt-10">
                                                <div class=" flex flex-wrap w-full items-center justify-start gap-5 pb-10">
                                                    <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-nowrap" >Commencer </span>
                                                        <Arrow background="#FFFF" textcolor="#285246" />
                                                    </Link>
                                                    <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-white text-nowrap pr-5">Contacter</span>
                                                        <Message background="#FFFF" textcolor="#285246" />
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )}
                            {content === "Sanctions" && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className='w-full flex items-center justify-center'>
                                        <div className="sactions relative flex justify-center items-center">
                                            <div className=" absolute flex items-center justify-center">
                                                <img src={sanctions} alt="" className='verification-img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full items-center justify-center">
                                        <div className='flex flex-col items-center justify-center w-full'>
                                            <h2 className="mini-nav-side-title mb-5 w-full">
                                                Identifications et Vérifications par scan <br />
                                                facial intelligent et rapide
                                            </h2>
                                            <div className="mini-nav-side-content mb-10 w-full">
                                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                                avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                                inexistants et des frais de
                                            </div>
                                            <div className='w-full'>
                                                <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start justify-start gap-5">
                                                    <div className="flex gap-3">
                                                        <SmallCheckCircle />
                                                        <div className='flex flex-col'>
                                                            <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                            <p className='mini-nav-grid-content'>
                                                                Passeports, permis de conduire, cartes, <br />
                                                                d'identity nationales, etc
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <SmallCheckCircle />
                                                        <div className='flex flex-col'>
                                                            <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                            <p className='mini-nav-grid-content'>
                                                                Passeports, permis de conduire, cartes, <br />
                                                                d'identity nationales, etc
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 ">
                                                        <SmallCheckCircle />
                                                        <div className='flex flex-col'>
                                                            <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                            <p className='mini-nav-grid-content'>
                                                                Passeports, permis de conduire, cartes, <br />
                                                                d'identity nationales, etc
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 ">
                                                        <SmallCheckCircle />
                                                        <div className='flex flex-col'>
                                                            <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                            <p className='mini-nav-grid-content'>
                                                                Passeports, permis de conduire, cartes, <br />
                                                                d'identity nationales, etc
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex pt-10">
                                                    <div class=" flex flex-wrap w-full items-center justify-start gap-5 pb-10">
                                                        <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                            <span class="text-nowrap" >Commencer </span>
                                                            <Arrow background="#FFFF" textcolor="#285246" />
                                                        </Link>
                                                        <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                            <span class="text-white text-nowrap pr-5">Contacter</span>
                                                            <Message background="#FFFF" textcolor="#285246" />
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )}

                            {/* Ajoute d'autres conditions pour le reste du contenu ici */}

                        </div>
                    </div>

                    <div className="mini-nav-arrows">
                        <ul className="flex items-center justify-between bg-[#DFFCE3] h-[54px] rounded-xl my-10 gap-x-5 px-5">
                            <li className='cursor-pointer'>
                                <img src={arrowLeft} alt="Flèche gauche" onClick={handleLeftClick} />
                            </li>
                            <li className={`mini-nav-option ${currentIndex === 0 ? 'mini-nav-item-active' : ''}`} >
                                <a  >{currentIndex + 1}/5 {options[currentIndex]}</a>
                            </li>

                            <li className='cursor-pointer'>
                                <img src={arrowRight} alt="Flèche droite" onClick={handleRightClick} />
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center justify-center gap-16 pb-5 lg:pb-16">
                            {currentIndex === 0 && (
                                <div className=" flex items-center justify-center w-full mx-auto gap-10 ">
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-justify lg:mb-10 w-full px-5">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien
                                            inexistants et des frais de
                                        </div>

                                        <div className="flex items-center justify-center  w-full">
                                            <div className="hand-div2 py-16 flex items-center justify-center w-full">
                                                <div className='verification-identiter flex items-center justify-center relative'>
                                                    <div className="absolute h-[450px] flex items-center justify-center py-5">
                                                        <img src={verificatiIdentite} alt="" className='mt-12 verification-img' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full pt-10'>
                                            <div class="w-full grid grid-cols-2 items-center justify-center gap-5">
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-center bg-green-color '>
                                                    <span className=' flex items-center text-nowrap text-white'>
                                                        Commencer
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
                                    </div>
                                </div>
                            )}
                            {currentIndex === 1 && (
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-justify mb-16 lg:mb-10 w-full px-5">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien
                                            inexistants et des frais de
                                        </div>
                                        <div className="flex items-center justify-center w-full pb-10">
                                            <div className='verification-biometrique relative flex items-center justify-center'>
                                                <div className=" flex items-center justify-center">
                                                    <img src={verificationBiomet} alt="" className='absolute verification-img' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full pt-5'>
                                            <div class="w-full grid grid-cols-2 items-center justify-center gap-5">
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-center bg-green-color '>
                                                    <span className=' flex items-center text-nowrap text-white'>
                                                        Commencer
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
                                    </div>
                                </div>
                            )}
                            {/* REFERENCE ....... */}
                            {currentIndex === 2 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">

                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-justify lg:mb-10 w-full px-5 pb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien
                                            inexistants et des frais de
                                        </div>
                                        <div className="flex items-center pb-10 justify-center  w-full">
                                            <div className="preuve-adresse relative flex items-center justify-center">
                                                <div className="absolute flex items-center justify-center">
                                                    <img src={preuveAddress} alt="" className='w-[300px] verification-img' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-2 items-center justify-center gap-5">
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-center bg-green-color '>
                                                    <span className=' flex items-center text-nowrap text-white'>
                                                        Commencer
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
                                            {/* <div class="flex pt-10">
                                                <div class=" flex w-full items-center justify-center gap-5 pb-10">
                                                    <Link to="/" class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-nowrap" >Commencer </span>
                                                        <Arrow background="#FFFF" textcolor="#285246" />
                                                    </Link>
                                                    <Link to="/pricing" class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                        <span class="text-white text-nowrap pr-5">Contacter</span>
                                                        <Message background="#FFFF" textcolor="#285246" />
                                                    </Link>

                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/** END REFERENCE ....... */}
                            {currentIndex === 3 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">

                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-justify lg:mb-10 w-full px-5 pb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien
                                            inexistants et des frais de
                                        </div>

                                        <div className="flex items-center justify-center pb-10 w-full">
                                            <div className="detection-appareil relative flex items-center justify-center">
                                                <div className="absolute flex items-center justify-center px-2 sm:px-0">
                                                    <img src={detectionApp} alt="" className='h-full verification-img' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-2 items-center justify-center gap-5">
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-center bg-green-color '>
                                                    <span className=' flex items-center text-nowrap text-white'>
                                                        Commencer
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
                                    </div>
                                </div>
                            )}
                            {currentIndex === 4 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">

                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-justify lg:mb-10 w-full px-5 pb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien
                                            inexistants et des frais de
                                        </div>

                                        <div className='w-full flex items-center justify-center'>
                                            <div className="flex items-center justify-center w-full pb-10">
                                                <div className="sactions relative flex justify-center items-center">
                                                    <div className=" absolute flex items-center justify-center">
                                                        <img src={sanctions} alt="" className='w-[300px] verification-img' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-2 items-center justify-center gap-5">
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title text-nowrap pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-x-2 md:gap-[28px] pt-[28px] pb-16 w-full'>
                                                <Link to="/" className='btn big-btn-about-us voir-tout-pays-phone-color flex items-center justify-center bg-green-color '>
                                                    <span className=' flex items-center text-nowrap text-white'>
                                                        Commencer
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
                                    </div>
                                </div>
                            )}

                            {/* Ajoute d'autres conditions pour le reste du contenu ici */}

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='accordion'>
                <AccordionMiniNav />
            </div> */}
        </section>
    );
}