import {Schema, model} from 'mongoose';

import Images from "../interfaces/images";

const ImagesSchema = new Schema<Images>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

export default model<Images>('Images', ImagesSchema);