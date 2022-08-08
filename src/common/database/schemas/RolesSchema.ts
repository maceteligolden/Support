import mongoose, { Schema } from 'mongoose';
import Role from '../models/Roles/Role.model';

const roleschema: Schema = new Schema<Role>({
    name: {
        type: String,
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

export default mongoose.model('Roles', roleschema)