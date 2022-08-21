import { injectable } from "tsyringe";
import LogRespository from "../repositories/LogRepository";

@injectable()
export default class TicketCreated{
    constructor(
        private logRepository: LogRespository
    ){

    }

    async execute(Ticket: string, customer: string){

        const message = `${Ticket} was created for ${customer} `;

        const payload = {
            detail: message
        }

       const response = await this.logRepository.addLog(payload)

       return response
    }
}