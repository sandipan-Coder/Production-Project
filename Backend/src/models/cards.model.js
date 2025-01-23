import mongoose, { Schema } from 'mongoose';

const cardSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        pricing: {
            type: Number,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Card = mongoose.model('Card', cardSchema); 
//  The  Card  model has four fields:  name ,  description ,  pricing , and  image . The  name  and  description  fields are of type  String  and are required. The  pricing  field is of type  Number  and is required. The  image  field is of type  String and is required. 
//  The  timestamps  property is set to  true  to automatically add  createdAt  and  updatedAt  fields to the document. 
//  Create the Controller 
//  The controller will handle the logic for the card routes.