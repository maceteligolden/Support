import { injectable } from "tsyringe";
import TicketStatusChanged from "../../Log/usecases/TicketStatusChanged";
import { IChangeStatus } from "../domain/interfaces/IChangeStatus";
import TicketRepository from "../repositories/TicketRepository";

@injectable()
export default class ChangeStatusTicket{
    constructor(
        private ticketRepository: TicketRepository,
        private ticketStatus: TicketStatusChanged
    ){}

    async execute(payload: IChangeStatus){
        
        //update ticket
        const newPayload = {
            status: payload.status
        }

        const ticketResponse = await this.ticketRepository.updateData({_id: payload.ticket}, newPayload)

        //adding log
        await this.ticketStatus.execute(payload.ticket, payload.agent, payload.status)

        return ticketResponse
    }
}
