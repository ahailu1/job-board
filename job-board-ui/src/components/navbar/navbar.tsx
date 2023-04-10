import React, {useState} from 'react';


const DisplayNavBar = () => {


    return (
        <div className = "w-100 bg-light py-5">
            <div className='grid grid-cols-2'>
            <div className = "flex">
            <div><a className='p-5' href = ""> Home </a></div>
            <div><a className='p-5' href = ""> About </a></div>
            <div><a className='p-5' href = ""> Portfolio </a></div>
            </div>
            <div>
            </div>
            </div>
        </div>
    )

};

export default DisplayNavBar;