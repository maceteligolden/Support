import { injectable } from "tsyringe";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class GetAllCustomerTicket{
    constructor(
        private ticketRepository: TicketRepository,
    ){}

    async execute(id: string){

        const ticket = await this.ticketRepository.getData({customer: id})

        return ticket
    }
}