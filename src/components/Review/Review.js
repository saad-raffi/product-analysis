import React from 'react';

const Review = ({review}) => {
   const {img,name,comment,Ratings}=review;
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 m-2 p-2'>
            <div className=' grid'>
            <img className='h-30 w-30 rounded' src={img} alt=""/>
            
            </div>
          <div className='flex flex-col items-start' >
          <h4 className='text-lg font-bold'>Ratings: {Ratings}</h4>
            <h2 className='text-lg font-bold '>Name: {name}</h2>   
            
            <h5 className='text-center'>Comment:{comment}</h5>
          </div>
        </div>
    );
};

export default Review;