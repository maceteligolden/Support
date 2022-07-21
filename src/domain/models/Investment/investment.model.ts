import { Types } from 'mongoose'

export default interface Investment {
    _id: string,
    user?: Types.ObjectId,
    project?: Types.ObjectId,
    total_cells?: number,
    capital?: number,
    energy_generated?: number,
    investment_date?: Date,
    solar_asset_status?: boolean,
    reduced_co2?: number,
    created_at?: Date,
    updated_at: Date
}