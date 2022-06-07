import React from 'react';
import useReviews from '../../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews]=useReviews()
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 mt-5 p-2'>
           {
               reviews.map(review=><Review key={review.id}
               review={review}
               ></Review>)
           } 
        </div>
    );
};

export default Reviews;