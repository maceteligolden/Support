import mongoose, { Schema } from 'mongoose';


const Ticket_typeSchema: Schema = new Schema({
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

export default mongoose.model('Ticket_type', Ticket_typeSchema)