import React from 'react'
import "./AddCardButton.css"

function AddCardButton() {
  return (
    <>
      <button type="button" className="button">
        <span className="button__text">Add Item</span>
        <i className="fa-solid fa-plus button__icon"></i>
      </button>
    </>
  )
}

export default AddCardButton
