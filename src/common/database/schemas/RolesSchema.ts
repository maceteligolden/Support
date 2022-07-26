import mongoose, { Schema } from 'mongoose';


const roleschema: Schema = new Schema({
    name: {
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

export default mongoose.model('Roles', roleschema)