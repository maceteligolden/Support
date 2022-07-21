import { Schema } from 'mongoose';

export default interface Verification {
    _id: string,
    BVN?: boolean,
    phone?: boolean,
    email?: boolean,
    user: Schema.Types.ObjectId,
    created_at?: Date,
    updated_at: Date
}