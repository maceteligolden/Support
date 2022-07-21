import mongoose, {Schema} from 'mongoose';
import Report from '../models/Report/report.model';

const reportschema = new Schema<Report>({
    operator: {
        type: Schema.Types.ObjectId,
        ref: "Operator"
    },
    maintenance_date: {
        type: Date,
        required: true
    },
    operator_rep: {
        type: String,
        required: true
    },
    battery_voltage_reading: {
        type: Number,
        required: true
    },
    battery_voltage_status: {
        type: Boolean,
        required: true
    },
    cable_connection_status: {
        type: Boolean,
        required: true
    },
    connection_cable: {
        type: String,
        required: true
    },
    charge_controller_reading: {
        type: Number,
        required: true
    },
    charge_controller_status: {
        type: Boolean,
        required: true
    },
    solar_planel_cleaning: {
        type: Boolean,
        required: true
    },
    solar_panel_amps: {
        type: Number,
        required: true
    },
    solar_panel_voltage: {
        type: Number,
        required: true
    },
    comment_solar_panel: {
        type: String,
        required: true
    },
    inverter_reading: {
        type: Number,
        required: true
    },
    inverter_status: {
        type: Boolean,
        required: true
    },
    status_of_accessories: {
        type: String,
        required: true
    },
    modification: {
        type: Boolean,
        required: true
    },
    modification_comment: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Report', reportschema)