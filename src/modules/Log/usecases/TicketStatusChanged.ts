import { injectable } from "tsyringe";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class TicketStatusChanged{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(Ticket: string, author: string, status: string){

        const message = `${Ticket} was status was changed to ${status} by ${author} `;

        const payload = {
            detail: message
        }

       const response = await this.logRepository.addLog(payload)

       return response
    }
}