import { Types } from 'mongoose';

export default interface User {
    _id: string,
    firstname?: string,
    lastname?: string,
    phone?: number,
    email?: string,
    password?: string,
    country?: string,
    city?: string,
    address?: string,
    role?: Types.ObjectId,
    status?: boolean,
    wallet?: Types.ObjectId,
    nextkin?: Types.ObjectId,
    verified?: Types.ObjectId,
    created_at?: Date,
    updated_at: Date
}