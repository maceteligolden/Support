import mongoose, {Schema} from 'mongoose';

const logschema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true,
        defualt: function(){
            return Date.now()
        }
    }
})

export default mongoose.model('Logs', logschema);
