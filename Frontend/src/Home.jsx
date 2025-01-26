import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Header from "./Component/Header/Header";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import AddCardButton from "./Component/AddCardButton/AddcardButton";
import { enqueueSnackbar } from "notistack";
import Auth from "./Component/Authatication/Auth";

export default function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/cards/")
            .then((res) => {
                setCards(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        
        axios
        .delete(`http://localhost:8000/cards/${id}`)
        .then(() => {
    
            setCards((prevBooks) => prevBooks.filter((cards) => cards._id !== id));
            enqueueSnackbar("Card deleted successfully!", { variant: "success" });
        })
        .catch((error) => {
            enqueueSnackbar("Error", { variant: "error" });
            console.log("Error deleting card:", error);
        });      
       
    };

    return (
        <>
            <div className="Home">
                <Header />
                <div className="hide"></div>
                <div className="card-div-container">
                <div className="main-card">
                    {cards.map((items) => (
                        <Card key={items._id} cards={items} onDelete={handleDelete}/>
                    ))}
                </div>
                </div>
                <div className="add-con">
                    <Link to={`/cards/auth`}>
                        <AddCardButton />
                    </Link>
                </div>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </>
    );
}
