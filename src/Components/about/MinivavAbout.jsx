
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cmr from "../../images/about/cmrPicture.png";
import vectorMininav from "../../images/about/vectorMininav.png";
import arrowLeft from "../../images/accueil/VectorLeft.png";
import arrowRight from "../../images/accueil/VectorRight.png";
import bgCountry from "../../images/about/bg-country.png"

export default function MinivavAbout() {
    const [content, setContent] = useState("Afrique");

    const handleNavClick = (event, newListItem) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setContent(newListItem);
    };

    const [activeLink, setActiveLink] = useState('');

    const options = [
        "Afrique",
        "Europe",
        "Asie",
        "Amerique",
        "Océanie"
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
            <div className="bg-white sm:pl-20 w-full">
                <div className="flex px-5 sm:px-0 flex-col py-10" style={{ backgroundImage: `url(${vectorMininav})`, backgroundRepeat: "no-repeat", backgroundPosition: "100% 100%" }}>
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
                <div className='pr-20  hidden lg:block'>
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

                            <table className=' w-full'>
                                <tr className=''>
                                    <td className='py-5 pl-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td className='py-5 pl-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>

                                </tr>
                                <tr className=''>
                                    <td className='py-5 pl-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>

                                </tr>
                                <tr className=''>
                                    <td className='py-5 pl-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>
                                    <td className='py-5'>
                                        <div className='flex items-center justify-center'>
                                            <img src={cmr} alt="" className='pr-2' />
                                            <span className='pr-4'>Cameroun</span>
                                        </div>
                                    </td>

                                </tr>
                            </table>
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

            <div className='block lg:hidden'>
                <div className="mini-nav-arrows px-5">
                    <ul className="flex items-center justify-between bg-[#DFFCE3] h-[54px] rounded-xl gap-x-5 px-5">
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
                            <div className='flex items-center justify-center bg-no-repeat w-full bg-cover bg-[50%_50%] pb-96' style={{backgroundImage : `url(${bgCountry})`}}>
                                <table className=' w-full'>
                                    <tr className=''>
                                        <td className='py-5 pl-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='py-5 pl-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='py-5 pl-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className=''>
                                        <td className='py-5 pl-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex items-center justify-center'>
                                                <img src={cmr} alt="" className='pr-2' />
                                                <span className='pr-4'>Cameroun</span>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        )}
                        {currentIndex === 1 && (
                            <div></div>
                        )}
                        {/* REFERENCE ....... */}
                        {currentIndex === 2 && (
                            <div></div>
                        )}
                        {/** END REFERENCE ....... */}
                        {currentIndex === 3 && (
                            <div></div>
                        )}
                        {currentIndex === 4 && (
                            <div></div>
                        )}

                        {/* Ajoute d'autres conditions pour le reste du contenu ici */}

                    </div>
                </div>
            </div>
        </section>
    );
}