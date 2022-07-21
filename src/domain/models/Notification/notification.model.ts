import { Types } from 'mongoose';
import { EnumType } from 'typescript';

export default interface Notification {
    _id: string,
    user?: Types.ObjectId,
    description?: string,
    type?: EnumType,
    status?: boolean,
    created_at?: Date,
    updated_at: Date
}