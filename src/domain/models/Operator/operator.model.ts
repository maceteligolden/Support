export default interface Operator {
    _id: string,
    name?: string,
    address?: string,
    description?: string,
    status?: boolean,
    created_at?: Date,
    updated_at: Date
}