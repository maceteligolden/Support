import mongoose, {Schema} from 'mongoose';
import Transaction from '../models/Transaction/transaction.model';

const transactionschema: Schema = new Schema<Transaction>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    type: {
        type: String,
        enum: ["Fund", "Payout", "Withdrawal"]
    },
    ref_no: {
        type: String
    },
    payment_method: {
        type: String,
        enum: ["Bank", "Crypto"]
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    amount: {
        type: Number,
    },
    status: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Transactions', transactionschema)