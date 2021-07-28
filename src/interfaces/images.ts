import {Document} from 'mongoose';

export default interface Images extends Document {
    title: string;
    description: string;
    img: string;
}