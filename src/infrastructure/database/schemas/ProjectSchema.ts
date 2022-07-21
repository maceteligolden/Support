import mongoose, { Schema } from 'mongoose';
import Project from '../models/Project/Project.model';

const projectschema: Schema = new Schema<Project>({
    thumbnail: {
        type: String
    },
    document: {
        type: String
    },
    title: {
        type: String
    },
    operator: {
        type: Schema.Types.ObjectId,
        ref: 'Operators'
    },
    cost_per_cell: {
        type: Number
    },
    sold_cell: {
        type: Number
    },
    total_cell: {
        type: Number
    },
    no_of_investors: {
        type: Number
    },
    ROI: {
        type: Number
    },
    carbon_reduced: {
        type: Number
    },
    energy_yeild: {
        type: Number
    },
    end_date: {
        type: Date
    },
    next_payout_date: {
        type: Date
    },
    description: {
        type: String
    },
    availability: {
        type: String,
        enum: ["Now Available","Now Installing", "Now Generating"]
    },
    status: {
        type: Boolean
    },
    created_at: {
        type: Date,
        default: function() {
            return Date.now()
        }
    },
    updated_at: {
        type: Date,
        default: function() {
            return Date.now()
        }
    }
})

export default mongoose.model('Projects', projectschema)