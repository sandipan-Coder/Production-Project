import React from "react";
import './App.css';
// import React from 'react';
// import AddCard from "./"
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';
import Auth from './Component/Authatication/Auth';
import AddCard from './Component/AddCard/AddCard';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Aboutme from './Component/Aboutme/Aboutme';
import AddCardButton from './Component/AddCardButton/AddcardButton';

export default function Home() {
return (
    <>
    <div className="App">
        <Header />
        <div className="hide"></div>
        <div className='main-card'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
    </div>
    <div className='add-con'>
        <AddCardButton/>
    </div>
    <div className='footer-con'>
        <Footer/>
    </div>
    </div>
    </>
);
}
