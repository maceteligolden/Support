import { injectable } from "tsyringe";
import IAddCustomer from "../../Customer/domain/interfaces/IAddCustomer";
import AddCustomer from "../../Customer/usecases/AddCustomer";
import TicketCreated from "../../Log/usecases/TicketCreated";
import IAddTicketPayload, { INewTicket } from "../domain/interfaces/IAddTicket";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class AddTicket{
    constructor(
        private createCustomer: AddCustomer,
        private ticketCreated: TicketCreated,
        private ticketRepository: TicketRepository
    ){}

    async execute(payload: IAddTicketPayload){
        //create customer account
        const addCustomerPayload: IAddCustomer = {
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
            phone: payload.phone
        }

        const customer = await this.createCustomer.execute(addCustomerPayload)

        //create ticket
        const newticketPayload: INewTicket = {
            type: payload.type,
            status: payload.status,
            priority: payload.priority,
            description: payload.description,
            customer: customer._id,
            agent: payload.author ? payload.author : ''
        }

        const ticket = await this.ticketRepository.addData(newticketPayload)

        //addding file attachment 

        //adding log
        await this.ticketCreated.execute(ticket._id, payload.author)

        return ticket
    }
}