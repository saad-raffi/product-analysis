import { useEffect } from "react";
import { useState } from "react"


const useReviews =()=>{
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('fakeuser.json')
        .then(res=> res.json())
        .then(data=>setReviews(data));
    }, [])
    return[reviews,setReviews]
    
}

export default useReviews;