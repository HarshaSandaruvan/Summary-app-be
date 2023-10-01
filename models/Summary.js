import mongoose from 'mongoose';
import { uuid } from 'uuidv4';
import { Schema } from "mongoose"

const summarySchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
        unique: true,
        default: uuid().slice(0, 8),
    },
}, { timestamps: true });

const Summary =mongoose.model("Summary", summarySchema);
export default Summary;