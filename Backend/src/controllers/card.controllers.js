import { Card } from "../models/cards.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


// Authenticated user can create a new card

const authentication = async(req, res, ) => {

    const {Email, Password} = req.body;

    if((!Email) || (!Password)){
        return res.status(400).json({
            status: "failed",
            message: "Please provide email and password"
        })
    }

    if((Email != "chandan@gmail.com") || (Password != 12345)){
        return res.status(400).json({
            status: "failed",
            message: "Invalid email or password"
        })
    }

    return res.status(200).json({
        status: "success",
        message: "User is authenticated"
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
        const card = await Card.findByIdAndDelete(id);
        if (!card) {
            return res.status(404).json({
                status: "failed",
                message: "Card not found"
            })
        }
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