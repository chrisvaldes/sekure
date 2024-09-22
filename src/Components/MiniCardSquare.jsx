import React from 'react';

export default function MiniCardSquare({ title, content }) {
  return (
    <div className='mini-card-square group flex flex-col items-center justify-center hover:bg-green-color hover:text-white'>
      <div className='mini-card-square-title transition-transform duration-300 ease-in-out group-hover:-translate-y-3'>
        {title}
      </div>
      <div className='hidden group-hover:mini-card-square-content title-content-1 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:block group-hover:opacity-100 group-hover:text-white'>
        {content}
      </div>
    </div>
  );
}