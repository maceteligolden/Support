import { Types } from 'mongoose';

export default interface Addlog {
    user: Types.ObjectId,
    description: string,
    created_at: Date,
    updated_at: Date
}