import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './Component/ContactUs/ContactUs';
import AboutUs from './Component/AboutUs/AboutUs';
import AudioQuran from './Component/AudioQuran/AudioQuran';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import DataSource from './Component/DataSource/DataSource';
import Sura from './Component/Sura/Sura';
import Error404 from './Component/Error404/Error404';



const App = () => {
    return (
        <div className="">
            <Header></Header>
           <Routes>
               <Route path='' element={<Home/>}></Route>
               <Route path='/home' element={<Home/>}></Route>
               <Route path='/Audioquran' element={<AudioQuran/>}></Route>
               <Route path='/aboutus' element={<AboutUs/>}></Route>
               <Route path='/contactus' element={<ContactUs/>}></Route>
               <Route path='/datasource' element={<DataSource/>}></Route>
               <Route path='/sura/:id' element={<Sura/>}></Route>
               <Route path='*' element={<Error404/>}></Route>
           </Routes>
        </div>
    );
};

export default App;