import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hook/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const [reviews,setReviews]=useReviews()
    const sliceReview=reviews.slice(0,3)
    const navigate= useNavigate()
    return (
        <div >
            <div className='grid md:grid-cols-2 sm:grid-cols-1 bg-gray-200 mt-8'>
                <div className='mt-10'>
                <h1 className='text-5xl text-lime-500 font-bold text-left mx-2'>Best Choice of you </h1>
                <h1 className=' text-5xl text-blue-400 font-bold  text-left mx-2 mb-3'>Take a Tour of Our <span className=' text-6xl text-red-400 font-bold text-left '>Product</span></h1>
                <p>
                    For Just 50$ more than the original model with the wireless charging case ,this is definitely the pair of buds to get. The Air Pods Pro sounds better then the originals and has a way better fit and active noise cancelling to boot. If you have an iOS device just get this. 
                </p>
                </div>
                <div>
                    <img src="https://www.apple.com/v/airpods-pro/e/images/meta/og__ch3csr9zmviq_overview.png" alt="" />
                </div>

            </div>
            <h3 className='text-3xl font-bold mt-10 mb-10'>Top Customer's Reviews ({reviews.length}) </h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 '>
                
                {
                    sliceReview.map(review=><Review key={review.id}
                    review={review}
                    ></Review>)
                }
                
            </div> 
            <button className=' m-4 bg-lime-400 rounded-md text-base font-bold p-2 ' onClick={()=> navigate('/reviews')}> Show more review</button>
        </div>
        
        
    );
};

export default Home;