import mongoose, {Schema} from 'mongoose';
import Notification from '../models/Notification/notification.model';

const notificationschema: Schema = new Schema<Notification>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ["General","Personal"]
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

export default mongoose.model('Notification', notificationschema)