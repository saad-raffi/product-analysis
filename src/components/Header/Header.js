import React from 'react';
import  CustomLink  from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-5'>Welcome to Fancy Gadgets!!</h1>
          <nav className=' text-white text-xl bg-indigo-200  flex justify-evenly '>
              <CustomLink className='hover:font-bold' to="/">Home</CustomLink>
              <CustomLink className='hover:font-bold' to="/reviews">Reviews</CustomLink>
              <CustomLink className='hover:font-bold' to="/dashboard">Dashboard</CustomLink>
              <CustomLink className='hover:font-bold' to="/blogs">Blogs</CustomLink>
              <CustomLink className='hover:font-bold' to="/About">About</CustomLink>
          </nav>
           
            

        </div>
    );
};

export default Header;
