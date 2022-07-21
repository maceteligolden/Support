import mongoose, { Schema } from 'mongoose';
import Wallet from '../models/Wallet/Wallet.model';

const walletschema = new Schema<Wallet>({
    bank_balance: {
        type: Number,
    },
    crypto_balance: {
        type: Number
    },
    bank_account_name: {
        type: String
    },
    bank_account_bank: {
        type: String
    },
    bank_account_no: {
        type: Number
    },
    crypto_address: {
        type: String
    },
    withdrawn_balance: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
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

export default mongoose.model('Wallet', walletschema)