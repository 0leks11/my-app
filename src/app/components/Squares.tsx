"use client"
import React from 'react';

export const Squares = () => {
    const number = 10;
    return <div className="flex gap-4 justify-center items-center w-96">
        <div onClick={() => {}} className='size-16 sm:bg-yellow-100 bg-blue-100 '/>
        <div>{number}</div>
        <div  className='size-16 sm:bg-blue-100 bg-yellow-100 '/>
    </div>
}
