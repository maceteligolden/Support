import { Types } from 'mongoose';
import { EnumType } from 'typescript';

export default interface Transaction {
    _id: string,
    user?: Types.ObjectId,
    type?: EnumType,
    ref_no?: string,
    payment_method?: EnumType,
    amount?: number,
    project?: Types.ObjectId,
    status?: boolean,
    created_at?: Date,
    updated_at: Date
}