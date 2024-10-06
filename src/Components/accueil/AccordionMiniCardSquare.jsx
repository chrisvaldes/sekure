import React, { useState } from 'react'; 
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