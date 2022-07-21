import { Types } from 'mongoose';

export default interface Nextkin {
    _id: string,
    users: Types.ObjectId,
    next_of_kin_fullname?: string,
    next_of_kin_phone?: number,
    next_of_kin_email?: string,
    next_of_kin_address?: string,
    created_at?: Date,
    updated_at: Date
}