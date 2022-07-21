import mongoose, { Schema } from 'mongoose';
import Operator from '../models/Operator/operator.model';

const operatorschema: Schema = new Schema<Operator>({
    name: {
        type: String
    },
    address: {
        type: String
    },  
    description: {
        type: String
    },
    status: {
        type: Boolean
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true
    }
})

export default mongoose.model("Operators", operatorschema)