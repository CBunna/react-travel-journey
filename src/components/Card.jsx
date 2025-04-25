import React from 'react';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ item }) => {
  // Handle cases where item might not have all properties
  if (!item || !item.img) {
    return null;
  }
  
  return (
    <article className='card-container py-4'>
        <div className='card-right card-image-container px-4 '>
          <img className='card-image rounded-md' src={item.img.src} alt={item.img.alt} />  
        </div>
        
        <div className='card-left'>
            <div className='card-pin-container'>
               <span className='card-pin text-xs font-semibold bg-red-50'> <FontAwesomeIcon icon={faMapPin} />  {item.country}</span>
               <a className='border-b border-black-600 text-sm text-orange-900' href={item.googleMapsLink}>View in google map</a> 
            </div>
           <div className='card-left-text'>
           <h2 className='text-xl font-bold py-1'>{item.title}</h2>
           <p className='text-black text-sm py-2 font-semibold'>{item.dates}</p>
           <p className='text-sm'>{item.text}</p>
           </div>
        </div>
    </article>
  );
};

export default Card;