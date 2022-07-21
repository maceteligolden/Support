import { Types } from 'mongoose';

export default interface Report {
    _id?: string,
    operator: Types.ObjectId,
    maintenance_date: Date,
    operator_rep: string,
    battery_voltage_reading: number,
    battery_voltage_status: boolean,
    cable_connection_status: boolean,
    connection_cable: string,
    charge_controller_reading: number,
    charge_controller_status: boolean,
    solar_planel_cleaning: boolean,
    solar_panel_amps: number,
    solar_panel_voltage: number,
    comment_solar_panel: string,
    inverter_reading: number;
    inverter_status: boolean,
    status_of_accessories: string,
    modification: boolean,
    modification_comment: string,
    created_at?: Date,
    updated_at: Date
}