import React from 'react';
import Verse from '../verse/Verse'

const SuraDisplay = ({sura,id}) => {
    
    const {name,total_verses,translation,transliteration} = sura
    return (
        <div className='mx-1'>
            <div className='flex justify-between items-center md:px-10 px-4 py-2 bg-gray-600 text-white shadow-md'>
                <span className='font-english'>{transliteration}</span>
                <span className='font-bangla'>{translation}</span>
                <span className='font-arabic'>{name}</span>
                <span className='font-bangla'>আয়াত : {total_verses}</span>
            </div>
            <div className="bg-slate-200 space-y-1 py-2">
            {
                sura.verses.length>1 &&
                <div className="">
                    <span className='font-arabic py-0.5 text-xl flex justify-center items-center'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                    <span className='font-bangla flex justify-center items-center'>শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</span>
                </div>
            }
            
                    {
                        sura.verses.map((verse)=><Verse key={verse.id} verse={verse}/>)
                    }
            </div>
        </div>
    );
};

export default SuraDisplay;