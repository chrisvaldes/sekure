import React from 'react'
import React, { useState } from 'react';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AccordionMiniNav() {
    const [open, setOpen] = useState(null);

    const toggleQuestion = (index) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="w-full mx-auto">

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
                    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full mx-auto gap-10 ">
                        <div className="hand-div2 h-[25rem] md:h-[30rem] lg:h-[30rem] w-full">
                            {/* <img src={hand} alt="" className='hand contain' /> */}
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <h2 className="text-cyan-deep text-justify text-title-3 font-weight-title-3 font-satoshi leading-normal mb-5 font-bold">
                                Identifications et Vérifications par scan <br />
                                facial intelligent et rapide
                            </h2>
                            <div className="text-justify text-content font-family-content font-normal leading-loose mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div>
                                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-10">
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                                            <span class="icon text-white p-2">
                                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                                            </span>
                                        </div>
                                        <div class="text-left text-content-title-3 font-semibold">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                                            <span class="icon text-white p-2">
                                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                                            </span>
                                        </div>
                                        <div class="text-left text-content-title-3 font-semibold">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                                            <span class="icon text-white p-2">
                                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                                            </span>
                                        </div>
                                        <div class="text-left text-content-title-3 font-semibold">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                                            <span class="icon text-white p-2">
                                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                                            </span>
                                        </div>
                                        <div class="text-left text-content-title-3 font-semibold">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
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