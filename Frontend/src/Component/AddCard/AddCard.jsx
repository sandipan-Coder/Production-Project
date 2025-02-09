import React, { useState } from 'react'
import "./AddCard.css"
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

function AddCard() {

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pricing, setPricing] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !description || !pricing || !image) {
      enqueueSnackbar('Please fill in all required fields.', { variant: 'warning' });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('pricing', pricing);
    formData.append('image', image); 

    axios
    .post('https://ambhika-jwellers.onrender.com//cards/create', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(() => {
      enqueueSnackbar('Card Created successfully', { variant: 'success' });
      navigate('/');
    })
    .catch((error) => {
      enqueueSnackbar('Error', { variant: 'error'});
      navigate('/');
      console.log(error)
    });
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store the file object in the state
    }
  };

  return (
    <div className="add-card">
      <div className="add-card-box">
        <h2>Add-card</h2>
        <form action="#">
          <div className="add-input">
            <input
            onChange={handleFileChange} 
            type="file" 
            required 
            aria-label="image"  />
          </div>
          <div className="add-input">
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            required 
            aria-label="title" 
            placeholder='Title' />
          </div>
          <div className="add-input">
            <input 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text" 
            required 
            aria-label="description" 
            placeholder='description'/>
          </div>
          <div className="add-input">
            <input 
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            type="number" 
            required 
            aria-label="Price" 
             placeholder='Price'/>
          </div>
          <button 
          onClick={handleSubmit}
          type="submit" 
          className="addCardSubmit"
          >Submit</button>
        </form>
    </div>
    </div>
  )
}

export default AddCard

