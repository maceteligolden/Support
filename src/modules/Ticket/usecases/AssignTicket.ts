import { injectable } from "tsyringe";
import TicketAssigned from "../../Log/usecases/TicketAssigned";
import { IAssignTicket } from "../domain/interfaces/IAssignTicket";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class AssignTicket{
    constructor(
        private ticketRepository: TicketRepository,
        private assignedTicket: TicketAssigned
    ){}

    async execute(payload: IAssignTicket){
        
        //create ticket
        const ticketPayload = {
            agent: payload.agent
        }

        const ticket = await this.ticketRepository.updateData({_id: payload.ticket}, ticketPayload)

        //addding file attachment 

        //adding log
        await this.assignedTicket.execute(payload.ticket, payload.agent)

        return ticket
    }
}