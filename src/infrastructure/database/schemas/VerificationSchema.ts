import mongoose, { Schema } from 'mongoose';
import Verification from '../models/Verification/Verification.model';

const verificationschema = new Schema<Verification>({
    BVN: {
        type: Boolean
    },
    phone: {
        type: Boolean
    },
    email: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true
    }
})

export default mongoose.model("Verification", verificationschema);