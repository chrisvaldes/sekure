
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import SmallCheckCircle from './SmallCheckCircle';

export default function MiniNavBar() {
    const [content, setContent] = useState("Vérification d'identité");

    const handleNavClick = (event, newListItem) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setContent(newListItem);
    };

    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <section>
            <div className="not-accordion bg-white extra px-20">
                <div className="text-left flex flex-col text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pt-10">
                    <Link to="/" className='bg-green-color flex items-center justify-center mini-nav-btn mini-nav-btn-text '>
                        Nos Outils
                    </Link>
                    <span className='title-1 pt-5'>
                        Tous les outils qu'il vous faut pour protéger <br />
                        votre plateforme de la fraude
                    </span>
                </div>
                <div className=''>
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
                                <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                    {/* <img src={hand} alt="" className='hand contain' /> */}
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
                                                <button class="bg-cyan-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-nowrap" >Commencer </span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>
                                                <button class=" bg-cyan-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-white text-nowrap pr-5">Contacter</span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        )}
                        {content === "Vérification biométrique" && (
                            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                    {/* <img src={hand} alt="" className='hand contain' /> */}
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
                                                <button class="bg-cyan-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-nowrap" >Commencer </span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>
                                                <button class=" bg-cyan-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-white text-nowrap pr-5">Contacter</span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>

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
                                <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                    {/* <img src={hand} alt="" className='hand contain' /> */}
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
                                                <button class="bg-cyan-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-nowrap" >Commencer </span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>
                                                <button class=" bg-cyan-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-white text-nowrap pr-5">Contacter</span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        )}
                        {/** END REFERENCE ....... */}
                        {content === "Détection d'appareil" && (
                           <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                    {/* <img src={hand} alt="" className='hand contain' /> */}
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
                                                <button class="bg-cyan-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-nowrap" >Commencer </span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>
                                                <button class=" bg-cyan-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-white text-nowrap pr-5">Contacter</span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        )}
                        {content === "Sanctions" && (
                            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                                <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                                    {/* <img src={hand} alt="" className='hand contain' /> */}
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
                                                <button class="bg-cyan-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-nowrap" >Commencer </span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>
                                                <button class=" bg-cyan-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                                    <span class="text-white text-nowrap pr-5">Contacter</span>
                                                    <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                        <span class="icon text-cyan-deep">
                                                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                        </span>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        )}

                        {/* Ajoute d'autres conditions pour le reste du contenu ici */}

                    </div>
                </div>
            </div>

            <div className='accordion'>
                <Accordion />
            </div>
        </section>
    );
}