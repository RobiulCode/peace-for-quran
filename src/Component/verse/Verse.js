import React from 'react';

const Verse = ({verse}) => {
    const {id,text,translation,transliteration} = verse
    return (
        <div className='border mx-0.5 bg-white shadow-md relative'>
            
            <p className='absolute -right-0.5 -top-0.5'>
            <span className='h-4 w-4 bg-blue-200 rounded-full flex justify-center items-center p-3 text-gray-800 ring-1'>{id}</span>
            </p>
            <p className='text-right border-b py-2 px-2 flex justify-end items-center mr-6'>
                <span className='text-4xl font-arabic'>{text}</span>
            </p>
            <p className='border-b py-2 px-2'>{transliteration}</p>
            <p className=' py-2 px-2 font-bangla'>{translation}</p>  
        </div>
    );
};

export default Verse;