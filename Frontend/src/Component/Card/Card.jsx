import { useEffect, useState } from "react";
import Auth from "../Authatication/Auth";
import "./Card.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleDelete = () => {
    useEffect( () => {
      <Auth/>
    },[])
    
    // alert("Card deleted!");
  };

  return (
    <div className="card-container" onDoubleClick={handleFlip}>
      <div className={`card ${flipped ? "flip" : ""}`}>
        {/* Front*/}
        <div className="card-front">
          <div className="img-con">
            <img src="https://th.bing.com/th/id/OIP.DcZp5jrqBag_QVl9zwd--AAAAA?rs=1&pid=ImgDetMain"className="card-image" />
          </div>
          <div className="card-details">
            <h3 className="card-title">Elegant Gold Ring</h3>
            <p className="card-description">A stunning 18k gold ring with intricate floral patterns.</p>
            <p className="card-price">₹12,000</p>
          </div>
        </div>
        {/* back */}
        <div className="card-back">
          <button className="delete-button" role="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
