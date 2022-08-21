import mongoose, { Schema } from 'mongoose';


const ticketSchema: Schema = new Schema({
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket_type'
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    status: {
        type: String,
        enum: ["Pending", "On-Going", "Completed"]
    },
    Priority: {
        type: String,
        enum: ["Low", "Normal", "High"]
    },
    description: {
        type: String,
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

export default mongoose.model('Ticket', ticketSchema)