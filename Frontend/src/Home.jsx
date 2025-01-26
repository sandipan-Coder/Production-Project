import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Component/Header/Header";
import Card from "./Component/Card/Card";
import Footer from "./Component/Footer/Footer";
import AddCardButton from "./Component/AddCardButton/AddcardButton";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/cards/")
            .then((res) => {
                setBooks(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(books);
    return (
        <>
            <div className="App">
                <Header />
                <div className="hide"></div>
                <div className="card-div-container">
                <div className="main-card">
                    {books.map((items) => (
                        <Card key={items._id} book={items} />
                    ))}
                </div>
                </div>
                <div className="add-con">
                    <Link to={`/cards/create`}>
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

// const [books, setBooks] = useState([]);
// const [loading, setLoading] = useState(false);
// const [showType, setShowType] = useState('table');

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5555/books")
//       .then((res) => {
//         setBooks(res.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);
