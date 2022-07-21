import { Types } from 'mongoose';

export default interface Log {
    _id?: string,
    user: Types.ObjectId,
    description?: string,
    created_at?: Date,
    updated_at: Date
}