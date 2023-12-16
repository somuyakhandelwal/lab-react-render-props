import React from 'react'
import { useState } from 'react';
const Hoc = (Ocomponent) => {
    function hof(){
        const [likeImageCounter, setLikeImageCounter] = useState(0);

        const handleLikeImageCount = ()=>{
          setLikeImageCounter(likeImageCounter+1);
        }
        return <Ocomponent count ={likeImageCounter} func={handleLikeImageCount}/>
    }
    return hof
}

export default Hoc