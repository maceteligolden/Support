import IAddCustomer from "../../../Customer/domain/interfaces/IAddCustomer";

export default interface IAddTicketPayload extends IAddCustomer{
    author: string,
    type: string,
    status: string,
    priority: string,
    description: string
}

export interface INewTicket {
    type: string,
    status: string,
    priority: string,
    description: string,
    customer: string,
    agent?: string
}