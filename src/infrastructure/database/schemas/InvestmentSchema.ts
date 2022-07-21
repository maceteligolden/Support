import mongoose, {Schema} from 'mongoose';
import Investment from '../models/Investment/investment.model';

const investmentschema: Schema= new Schema<Investment>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Projects',
    },
    total_cells: {
        type: Number
    },
    capital: {
        type: Number
    },
    energy_generated: {
        type: Number
    },
    investment_date: {
        type: Date
    },
    solar_asset_status: {
        type: Boolean
    },
    reduced_co2: {
        type: Number
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Investments', investmentschema)