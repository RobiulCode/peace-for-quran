import React,{ useState,useEffect} from 'react';
// import axios from 'axios';
import Chapter from '../Chapter/Chapter';
import Jumborton from '../Jumborton/Jumborton';

const Home = () => {
    const [suras,setSuras] = useState([])


    //load data with hook
    useEffect(()=>{
        getSura()
        .catch(error => console.log(error))
    },[])

    //fetch data load function
    const getSura=async()=>{
        const data = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json')
        .then(data=> data.json())
        setSuras(data)
    }

    //--------------------------------------
    const getSearchSura=async(event)=>{
        const data = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json')
        .then(data=>data.json())
        const searchSura =data.filter((sura)=>sura.id === Number(event.target.value))
        setSuras(searchSura)
        if (searchSura.length>0){
            setSuras(searchSura)
        }else{
            setSuras(data.data)
        }
    }


    console.log(suras)
    return (
        <div className="bg-blue-300">
            <Jumborton  handleSearch={getSearchSura}/>
            <div className='sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 mx-2 md:w-11/12 md:mx-auto  pt-2 pb-2'>
                {
                    suras.map((sura)=><Chapter sura={sura} key={sura.id}/>)
                }
            </div>
        </div>
    );
};

export default Home;