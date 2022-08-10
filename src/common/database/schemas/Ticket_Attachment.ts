import mongoose, { Schema } from 'mongoose';


const Ticket_attachmentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
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

export default mongoose.model('Ticket_attachment', Ticket_attachmentSchema)