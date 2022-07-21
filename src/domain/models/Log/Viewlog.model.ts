export default interface Viewlog {
    _id: string,
    user: string,
    description?: string,
    created_at?: Date,
    updated_at: Date
}