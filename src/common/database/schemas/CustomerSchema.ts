import mongoose, { Schema } from 'mongoose';


const customerSchema: Schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: function(){
            return Date.now()
        }
    },
    updated_at: {
        type: Date,
        required: true,
        default: function(){
            return Date.now()
        }
    }
})

export default mongoose.model('Customer', customerSchema)