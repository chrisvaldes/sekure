import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import preuveAddress from '../images/preuveAddress.png';
import SmallCheckCircle from './SmallCheckCircle';

export default function AccordionMiniNav() {
    const [open, setOpen] = useState(null);

    const toggleQuestion = (index) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="w-full">

            {/* Q 1 */}
            <div className="border border-gray-200 dark:border-slate-700 rounded-md my-5">
                <button
                    onClick={() => toggleQuestion(1)}
                    className="w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-[#20293A] dark:text-gray-400 text-gray-700 rounded-md"
                >
                    <span>Vérification d'identité</span>
                    <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${open === 1 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {open === 1 && (
                    <div className=" bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
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
                                <div class="flex pt-10">
                                    <div class=" flex flex-wrap  gap-5">
                                        <Link class="bg-green-color  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                            <span class="text-nowrap" >Commencer </span>
                                            <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                <span class="icon text-cyan-deep">
                                                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                </span>
                                            </div>
                                        </Link>
                                        <Link class=" bg-green-deep  px-5 py-2 rounded-lg text-white flex items-center justify-around gap-5">
                                            <span class="text-white text-nowrap pr-5">Contacter</span>
                                            <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                <span class="icon text-cyan-deep">
                                                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                                </span>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                )}
            </div>

            {/* Q 2 */}
            <div className="border border-gray-200 dark:border-slate-700 rounded-md my-5">
                <button
                    onClick={() => toggleQuestion(2)}
                    className="w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-[#20293A] dark:text-gray-400 text-gray-700 rounded-md"
                >
                    <span>Vérification biométrique</span>
                    <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${open === 2 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {open === 2 && (
                    <div className="overflow-hidden bg-white dark:bg-[#20293A] px-4 py-2 rounded-b-md transition-all duration-300">
                        <p className="text-gray-700 dark:text-gray-400">Answer to question 2.</p>
                    </div>
                )}
            </div>

            {/* Q 3 */}
            <div className="border border-gray-200 dark:border-slate-700 rounded-md  my-5 w-400px">
                <button
                    onClick={() => toggleQuestion(3)}
                    className="w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-[#20293A] dark:text-gray-400 text-gray-700 rounded-md"
                >
                    <span>Preuve d'adresse</span>
                    <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${open === 3 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {open === 3 && (
                    <div className="overflow-hidden bg-white dark:bg-[#20293A] px-4 py-2 rounded-b-md transition-all duration-300">
                        <p className="text-gray-700 dark:text-gray-400">Answer to question 3.</p>
                    </div>
                )}
            </div>
            <div className="border border-gray-200 dark:border-slate-700 rounded-md  my-5 w-400px">
                <button
                    onClick={() => toggleQuestion(3)}
                    className="w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-[#20293A] dark:text-gray-400 text-gray-700 rounded-md"
                >
                    <span>Détection d'appareil</span>
                    <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${open === 3 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {open === 3 && (
                    <div className="overflow-hidden bg-white dark:bg-[#20293A] px-4 py-2 rounded-b-md transition-all duration-300">
                        <p className="text-gray-700 dark:text-gray-400">Answer to question 3.</p>
                    </div>
                )}
            </div>
            <div className="border border-gray-200 dark:border-slate-700 rounded-md  my-5 w-400px">
                <button
                    onClick={() => toggleQuestion(3)}
                    className="w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-[#20293A] dark:text-gray-400 text-gray-700 rounded-md"
                >
                    <span>Sanction</span>
                    <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${open === 3 ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {open === 3 && (
                    <div className="overflow-hidden bg-white dark:bg-[#20293A] px-4 py-2 rounded-b-md transition-all duration-300">
                        <p className="text-gray-700 dark:text-gray-400">Answer to question 3.</p>
                    </div>
                )}
            </div>
        </div>
    );
};