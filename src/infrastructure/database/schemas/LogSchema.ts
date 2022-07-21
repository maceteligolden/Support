import mongoose, {Schema} from 'mongoose';
import Log from '../models/Log/log.model';

const logschema: Schema = new Schema<Log>({
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
        required: true
    }
})

export default mongoose.model('Logs', logschema);
