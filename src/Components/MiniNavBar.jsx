
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from "../images/accueil/VectorLeft.png";
import arrowRight from "../images/accueil/VectorRight.png";
import detectionApp from "../images/detectionAppareil.png";
import preuveAddress from '../images/preuveAddress.png';
import sactions from "../images/sanction.png";
import verificationBiomet from '../images/verificationBiometric.png';
import verificatiIdentite from '../images/verificationIdentite.png';
import Arrow from './Arrow';
import Message from './Message';
import SmallCheckCircle from './SmallCheckCircle';

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

    return (
        <section>
            <div className=" bg-white extra px-10">
                <div className="text-center flex flex-col items-center justify-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pt-10">
                    <Link to="/" className='bg-green-color flex items-center justify-center mini-nav-btn mini-nav-btn-text '>
                        Nos Outils
                    </Link>
                    <span className='title-1 text-center pt-5'>
                        Tous les outils qu'il vous faut pour protéger <br />
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
                                    <div className="hand-div2 flex items-center justify-center h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                        <img src={verificatiIdentite} alt="" className='hand contain' />
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap  gap-5 pb-10">
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
                                        <img src={verificationBiomet} alt="" className='hand contain' />
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap  gap-5 pb-10">
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
                                        <img src={preuveAddress} alt="" className='hand contain' />
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap  gap-5 pb-10">
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
                                    <div className="hand-div2 flex items-center justify-center">
                                        <img src={detectionApp} alt="" className='hand object-contain w-4/6' />
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap  gap-5 pb-10">
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
                                        <div className="hand-div2 h-[25rem] md:w-1/2 lg:w-[25rem] w-full">
                                            <img src={sactions} alt="" className='hand contain' />
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
                                                <div class="flex pt-20">
                                                    <div class=" flex flex-wrap  gap-5 pb-10">
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
                            <li className={`mini-nav-option ${currentIndex === 0 ? 'mini-nav-item-active' : ''}`} onClick={() => setCurrentIndex(0)}>
                                <a href="#">{currentIndex + 1}/5 {options[currentIndex]}</a>
                            </li>

                            <li className='cursor-pointer'>
                                <img src={arrowRight} alt="Flèche droite" onClick={handleRightClick} />
                            </li>
                        </ul>

                        <div className="flex flex-wrap items-center justify-center gap-16 pb-10 lg:pb-16">
                            {currentIndex === 0 && (
                                <div className=" flex items-center justify-center w-full mx-auto gap-10 ">
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-center mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>

                                        <div className="hand-div2 flex items-center justify-center h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                            <img src={verificatiIdentite} alt="" className='hand contain' />
                                        </div>

                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-centergap-5">
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
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
                                            <div class="flex pt-20">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentIndex === 1 && (
                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="flex items-center justify-center  hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                        <img src={verificationBiomet} alt="" className='hand contain' />
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-center mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-centergap-5">
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap w-full items-center justify-center gap-5 pb-10">
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
                            )}
                            {/* REFERENCE ....... */}
                            {currentIndex === 2 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="flex items-center justify-center  hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                        <img src={preuveAddress} alt="" className='hand contain' />
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-center mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-centergap-5">
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap w-full items-center justify-center gap-5 pb-10">
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
                            )}
                            {/** END REFERENCE ....... */}
                            {currentIndex === 3 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className="hand-div2 flex items-center justify-center">
                                        <img src={detectionApp} alt="" className='hand object-contain w-4/6' />
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-center mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-centergap-5">
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap w-full items-center justify-center gap-5 pb-10">
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
                            )}
                            {currentIndex === 4 && (
                                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                    <div className='w-full flex items-center justify-center'>
                                        <div className="hand-div2 h-[25rem] md:w-1/2 lg:w-[25rem] w-full">
                                            <img src={sactions} alt="" className='hand contain' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center w-full'>
                                        <h2 className="mini-nav-side-title text-center mb-5 w-full">
                                            Identifications et Vérifications par scan <br />
                                            facial intelligent et rapide
                                        </h2>
                                        <div className="mini-nav-side-content text-center mb-10 w-full">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                        <div className='w-full'>
                                            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-centergap-5">
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col justify-center'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
                                                    <SmallCheckCircle />
                                                    <div className='flex flex-col'>
                                                        <p className='mini-nav-grid-title pb-2'>Document acceptés :</p>
                                                        <p className='mini-nav-grid-content'>
                                                            Passeports, permis de conduire, cartes, <br />
                                                            d'identity nationales, etc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 justify-center">
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
                                            <div class="flex pt-20">
                                                <div class=" flex flex-wrap items-center justify-center gap-5 pb-10">
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