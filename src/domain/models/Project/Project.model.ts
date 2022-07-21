import { Types } from 'mongoose';
import { EnumType } from 'typescript';

export default interface Project {
    _id: string,
    thumbnail?: string,
    document?: string,
    title?: string,
    operator?: Types.ObjectId,
    cost_per_cell?: number,
    sold_cell?: number,
    total_cell?: number,
    no_of_investors?: number,
    ROI?: number,
    carbon_reduced?: number,
    energy_yeild?: number,
    end_date?: Date,
    next_payout_date?: Date,
    description?: string,
    availability?: EnumType,
    status?: boolean,
    created_at?: Date,
    updated_at: Date,
}