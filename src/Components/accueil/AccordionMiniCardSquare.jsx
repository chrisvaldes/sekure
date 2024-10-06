import React, { useState } from 'react';
import poly1 from "../../images/Polygon 1.png"
import poly2 from "../../images/Polygon 2.png"
export default function AccordionMiniCardSquare({ title, content }) {

    return (
        <div className='mini-card-square group flex flex-col items-center justify-center h-[100px] w-full rounded-[29px] hover:bg-green-color hover:text-green-deep hover:pt-4'>
          <div className='mini-card-square-title transition-transform duration-300 ease-in-out group-hover:-translate-y-3'>
            {title}
          </div>
          <div className='hidden group-hover:mini-card-square-content title-content-1 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:block group-hover:opacity-100 group-hover:text-green-deep'>
            {content}
          </div>
        </div>
      );
};
    // const [open, setOpen] = useState(null);

    // const toggleQuestion = (index) => {
    //     setOpen(open === index ? null : index);
    // };


    // return (
    //     <div className="">

    //         {/* Q 1 */}
    //         <div className={`rounded-[29px] my-5 ${open === 1 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(1)}
    //         >
    //             <span >Sign Up</span>
    //             {open === 1 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>

    //         {/* Q 2 */}
    //         <div className={`rounded-[29px] my-5 ${open === 2 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(2)}
    //         >
    //             <span >Vérification de l'utilisateur</span>
    //             {open === 2 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>

    //         {/* Q 3 */}
    //         <div className={`rounded-[29px] my-5 ${open === 3 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(3)}
    //         >
    //             <span >Vérification AML</span>
    //             {open === 3 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>

    //         {/* Q 4 */}
    //         <div className={`rounded-[29px] my-5 ${open === 4 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(4)}
    //         >
    //             <span >Connexion</span>
    //             {open === 4 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>

    //         {/* Q 5 */}
    //         <div className={`rounded-[29px] my-5 ${open === 5 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(5)}
    //         >
    //             <span >Détection de fraudes</span>
    //             {open === 5 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>

    //         {/* Q 6 */}
    //         <div className={`rounded-[29px] my-5 ${open === 6 ? 'bg-green-color' : 'bg-[#F5F5F5] h-[56px] rounded-[29px]'}
    //         w-full accordion-title flex flex-col items-center justify-center py-2 px-4 gap-x-5
    //         `}
                
    //             onClick={() => toggleQuestion(6)}
    //         >
    //             <span >Transaction</span>
    //             {open === 6 && (
    //                 <div className="accordion-content flex items-center justify-center text-center bg-green-color">
    //                     Notre plateforme est conçue pour être accessible à <br />
    //                     tous, quel que soit votre niveau de compétence <br />
    //                     technique. Grâce à une interface intuitive et à une
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // );

    
       