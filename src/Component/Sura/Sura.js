// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainBar from '../SuraDisplay/SuraDisplay';
import suraData from '../Sura/SuraData'


const Sura = () => {
    const {id} = useParams()
    const [sura,setSura] = useState(suraData)

    useEffect(()=>{
        getSura()
        .catch(error => console.log(error))
    },[])

    const getSura = async() => {
        const data = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${id}.json`)
        .then(data=> data.json())
        setSura(data)
    }

    return (
        <div className="bg-slate-300">
                <MainBar sura={sura} id={id}/>
        </div>
    );
};

export default Sura;