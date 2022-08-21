import { injectable } from "tsyringe";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class GetAllAgentTicket{
    constructor(
        private ticketRepository: TicketRepository,
    ){}

    async execute(id: string){

        const ticket = await this.ticketRepository.getData({agent: id})

        return ticket
    }
}