import { Schema } from "mongoose";

export default interface Wallet {
    _id: string,
    bank_balance?: number,
    crypto_balance?: number,
    bank_account_name?: string,
    bank_account_bank?: string,
    bank_account_no?: number,
    crypto_address?: string,
    withdrawn_balance?: number,
    user: Schema.Types.ObjectId,
    created_at?: Date,
    updated_at: Date
}