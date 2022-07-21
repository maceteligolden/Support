import mongoose, { Schema } from 'mongoose';
import Nextkin from '../models/Nextkin/Nextkin.model';

const nextkinschema = new Schema<Nextkin>({
    users: {
        type: Schema.Types.ObjectId,
        required: true
    },
    next_of_kin_fullname: {
        type: String,
    },
    next_of_kin_phone: {
        type: Number
    },  
    next_of_kin_email: {
        type: String
    },
    next_of_kin_address: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Nextkin', nextkinschema)