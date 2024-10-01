
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccordionMiniNav from '../AccordionMiniNav';
import Arrow from '../Arrow';
import Message from '../Message';
import SmallCheckCircle from '../SmallCheckCircle';
import vectorMininav from "../../images/about/vectorMininav.png"
import cmr from "../../images/about/cmrPicture.png"

export default function MinivavAbout() {
    const [content, setContent] = useState("Afrique");

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
            <div className="not-accordion bg-white pl-20 w-full">
                <div className="flex flex-col pt-10" style={{backgroundImage : `url(${vectorMininav})`, backgroundRepeat : "no-repeat", backgroundPosition : "100% 100%"}}>
                    <Link to="/" className='bg-green-color flex items-center justify-center mini-nav-btn mini-nav-btn-text '>
                        Nos Outils
                    </Link>
                    <div className='about-mininav-title py-5'>
                        Des services qui ne s’arrentent pas qu’à votre pays, <br />
                        partez à la conquête du monde avec Aibiometrics
                    </div>
                    <div className='about-mininav-content'>
                        Grâce à notre présence internationale, nous sommes en mesure de vous accompagner dans tous vos projets, où <br />
                        que vous soyez dans le monde.
                    </div>
                </div>
                <div className='pr-20'>
                    <ul className="flex mini-nav-items items-center justify-around bg-[#DFFCE3] h-[54px] rounded-xl my-10 gap-x-5 px-5">
                        <li className={`mini-nav-option ${content === "Afrique" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Afrique")}>
                            <a href="#">Afrique</a>
                        </li>
                        <li className={`mini-nav-option ${content === "Europe" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Europe")}>
                            <a href="#">Europe</a>
                        </li>
                        <li className={`mini-nav-option ${content === "Asie" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Asie")}>
                            <a href="#">Asie</a>
                        </li>
                        <li className={`mini-nav-option ${content === "Amerique" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Amerique")}>
                            <a href="#">Amerique</a>
                        </li>
                        <li className={`mini-nav-option ${content === "Oceanie" ? 'mini-nav-item-active ' : ''}`} onClick={(event) => handleNavClick(event, "Oceanie")}>
                            <a href="#">Oceanie</a>
                        </li>
                    </ul>

                    <div className="flex flex-wrap items-center justify-center gap-16 pb-10 lg:pb-16">
                        {content === "Afrique" && (
                            <div className="bg-cyan-200 w-full">
                                <table>
                                    <tr className=''>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='flex items-center justify-between'>
                                                <img src={cmr} alt="" className='pr-5'/>
                                                <span>Cameroun</span>
                                            </div>
                                        </td>
                                        
                                    </tr>
                                </table>
                            </div>
                        )}
                        {content === "Europe" && (
                            <div className="">

                            </div>
                        )}
                        {/* REFERENCE ....... */}
                        {content === "Asie" && (
                            <div className="">

                            </div>
                        )}
                        {/** END REFERENCE ....... */}
                        {content === "Amerique" && (
                            <div className="">

                            </div>
                        )}
                        {content === "Oceanie" && (
                            <div className="">

                            </div>
                        )}

                        {/* Ajoute d'autres conditions pour le reste du contenu ici */}

                    </div>
                </div>
            </div>

            <div className='accordion'>
                <AccordionMiniNav />
            </div>
        </section>
    );
}