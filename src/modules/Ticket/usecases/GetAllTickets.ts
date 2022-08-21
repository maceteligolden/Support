import { injectable } from "tsyringe";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class GetAllTicket{
    constructor(
        private ticketRepository: TicketRepository,
    ){}

    async execute(){

        const ticket = await this.ticketRepository.getData({})

        return ticket
    }
}