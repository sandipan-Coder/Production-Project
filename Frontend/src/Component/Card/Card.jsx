import { useState } from "react";
import "./Card.css";

const Card = ({book, onDelete}) => {
  const [flipped, setFlipped] = useState(false);

  const handleDelete = ({_id}) => {
    onDelete(book._id);
  }

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div key={book._id} className="card-container" onDoubleClick={handleFlip}>
      
      <div className={`card ${flipped ? "flip" : ""}`}>
        {/* Front*/}
        <div className="card-front">
          <div className="img-con">
            <img src={`${book.image}`}className="card-image" />
          </div>
          <div className="card-details">
            <h3 className="card-title">{book.name}</h3>
            <p className="card-description">{book.description}</p>
            <p className="card-price">₹{book.pricing}</p>
          </div>
        </div>
        {/* back */}
        <div className="card-back">
          <button 
          onClick={ handleDelete }
          className="delete-button" 
          role="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
