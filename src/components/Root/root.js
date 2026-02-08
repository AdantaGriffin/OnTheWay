import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Root(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
};

export default Root;