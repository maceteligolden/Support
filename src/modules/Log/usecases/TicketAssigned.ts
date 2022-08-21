import { injectable } from "tsyringe";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class TicketAssigned{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(Ticket: string, author: string){

        const message = `${Ticket} was assigned to ${author} `;

        const payload = {
            detail: message
        }

       const response = await this.logRepository.addLog(payload)

       return response
    }
}