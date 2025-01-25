import React from 'react'
import "./AddCard.css"

function AddCard() {
  return (
    <div className="add-card">
      <div className="add-card-box">
        <h2>Add-card</h2>
        <form action="#">
          <div className="add-input">
            <input type="file" required aria-label="Image"  />
          </div>
          <div className="add-input">
            <input type="text" required aria-label="title" placeholder='Title' />
          </div>
          <div className="add-input">
            <input type="text" required aria-label="description" placeholder='description'/>
          </div>
          <div className="add-input">
            <input type="text" required aria-label="Price"  placeholder='Price'/>
          </div>
          <button type="submit" className="addCardSubmit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default AddCard
