import React, { useState } from 'react';
import poly1 from "../images/Polygon 1.png"
import poly2 from "../images/Polygon 2.png"
import preuveAddress from '../images/preuveAddress.png';
import verificationBiomet from '../images/verificationBiometric.png';
import verificatiIdentite from '../images/verificationIdentite.png';
import sactions from "../images/sanction.png"
import detectionApp from "../images/detectionAppareil.png"
import SmallCheckCircle from './SmallCheckCircle';
import { Link } from 'react-router-dom';

const Accordion = () => {
    const [open, setOpen] = useState(null);

    const toggleQuestion = (index) => {
        setOpen(open === index ? null : index);
    };


    return (
        <div className="rounded-xl">

            {/* Q 1 */}
            <div className="border border-gray-200 rounded-lg my-5">
                <button
                    onClick={() => toggleQuestion(1)}
                    className={`w-full accordion-title flex items-center py-2 px-4 gap-x-5 rounded-md ${open === 1 ? 'bg-[#DFFCE3] rounded-none' : 'bg-[#F5F5F5]'
                        }`}
                >
                    <img src={`${open === 1 ? poly1 : poly2}`} alt="" />
                    <span>Details des utilisateurs</span>
                </button>
                {open === 1 && (
                    <div className="accordion-content pl-12 bg-[#DFFCE3]">
                        Get immediate insights. Track completion status, manual reviews, <br />
                        and final acceptance rates.
                    </div>
                )}
            </div>

            {/* Q 2 */}
            <div className="border  rounded-md my-5">
                <button
                    onClick={() => toggleQuestion(2)}
                    className={`w-full accordion-title flex gap-x-5 items-center py-2 px-4 rounded-md ${open === 2 ? 'bg-[#DFFCE3] rounded-none' : 'bg-[#F5F5F5]'
                        }`}
                >
                    <img src={`${open === 2 ? poly1 : poly2}`} alt="" />
                    <span>Vérification d'utilisateurs</span>
                </button>
                {open === 2 && (
                    <div className="accordion-content pl-12 bg-[#DFFCE3]">
                        Get immediate insights. Track completion status, manual reviews, <br />
                        and final acceptance rates.
                    </div>
                )}
            </div>

            {/* Q 3 */}
            <div className="border w-full  rounded-md  my-5 w-400px">
                <button
                    onClick={() => toggleQuestion(3)}
                    className={`w-full accordion-title flex gap-x-5 items-center py-2 px-4 rounded-md ${open === 3 ? 'bg-[#DFFCE3] rounded-none' : 'bg-[#F5F5F5]'
                        }`}
                >
                    <img src={`${open === 3 ? poly1 : poly2}`} alt="" />
                    <span>Personnalisation du flow de verification</span>
                </button>
                {open === 3 && (
                    <div className="accordion-content pl-12 bg-[#DFFCE3]">
                        Get immediate insights. Track completion status, manual reviews, <br />
                        and final acceptance rates.
                    </div>
                )}
            </div>

            {/* Q 4 */}
            <div className="border rounded-md  my-5 w-400px">
                <button
                    onClick={() => toggleQuestion(4)}
                    className={`w-full accordion-title flex gap-x-5 items-center py-2 px-4 rounded-md ${open === 4 ? 'bg-[#DFFCE3] rounded-none' : 'bg-[#F5F5F5]'
                        }`}
                >
                    <img src={`${open === 4 ? poly1 : poly2}`} alt="" />
                    <span>OUtils de verification</span>
                </button>
                {open === 4 && (
                    <div className="accordion-content pl-12 bg-[#DFFCE3]">
                        Get immediate insights. Track completion status, manual reviews, <br />
                        and final acceptance rates.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;