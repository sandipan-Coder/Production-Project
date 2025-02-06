import { Card } from "../models/cards.model.js";
import { v2 as cloudinary } from "cloudinary"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

cloudinary.config({ 
    /*cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET*/
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET

});

// Authenticated user can create a new card and delete a card
const authentication = async(req, res, ) => {

    console.log(req.body);

    const {email, password} = req.body;

    if((!email) || (!password)){
        return res.status(400).json({
            status: "failed",
            message: "Please provide email and password"
        })
    }

    if((email == "chandan@gmail.com") || (password == 12345)){
        return res.status(200).json({
            status: "success",
            message: "User is authenticated"
        })
    }

    return res.status(400).json({
        status: "failed",
        message: "Invalid email or password"
    })
}

// Create a new card
const createCard = async (req, res) => {
    try {
        const { name, description, pricing } = req.body;
       
        
        if ([name, description, pricing].some((field) => field?.trim() === "")) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all the fields"
            })
        }
        const image = req.files?.image[0]?.path;

        if (!image) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide image"
            })
        }


        const uploadedImage = await uploadOnCloudinary(image);
        if (!uploadedImage) {
            return res.status(500).json({
                status: "failed",
                message: "Failed to upload image on cloudinary",
            })
        }
        const newCard = new Card({
            name,
            description,
            pricing,
            image: uploadedImage.url
        })
        const savedCard = await newCard.save();
        return res.status(201).json({
            status: "success",
            message: "Card is created successfully",
            data: savedCard
        })
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Failed to create card"
        })
    }
}

// Delete a card
const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide card id"
            })
        }
        const card1 = await Card.findById(id);
        const cardimg = card1.image;
        const card = await Card.findByIdAndDelete(id);
        if (!card) {
            return res.status(404).json({
                status: "failed",
                message: "Card not found"
            })
        }
        const UrlArray = cardimg.split('/');
        const lastLocation =  UrlArray[UrlArray.length - 1];
        const public_id = lastLocation.split('.')[0];
        console.log(public_id)
        cloudinary.uploader.destroy(public_id, (error, result) => {
            console.log(error, result);
        })

        return res.status(200).json({
            status: "success",
            message: "Card is deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Failed to delete card"
        })
    }
}


// Get all cards
const getAllCards = async (req, res) => {

    try {
        const cards = await Card.find({});

        return res.status(200).json({
            count: cards.length,
            data: cards

        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: 'Cannot fetching the data from the database'})
    }
}

export { 
    authentication,
    createCard,
    getAllCards,
    deleteCard
}