import { injectable } from "tsyringe";
import AddTicket from '../usecases/AddTicket';
import {Request, Response} from 'express';
import { Http } from "../../../common/utils";
import AssignTicket from "../usecases/AssignTicket";
import ChangeStatusTicket from "../usecases/ChangeStatusTicket";
import GetAllTickets from "../usecases/GetAllTickets";
import GetAllCustomerTicket from "../usecases/GetAllCustomerTickets";
import GetAllAgentTicket from "../usecases/GetAllAgentTickets";


@injectable()
export default class TicketController {
    constructor(
        private addTicket: AddTicket,
        private ticketAssigned: AssignTicket,
        private ticketStatusUpdate: ChangeStatusTicket,
        private allTickets: GetAllTickets,
        private allCustomerTickets: GetAllCustomerTicket,
        private allAgentTickets: GetAllAgentTicket
    ){

    }

    async createTicket(req: Request, res: Response){
        try{

            const response = await this.addTicket.execute(req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Ticket created",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async assignTicket(req: Request, res: Response){
        try{

            const response = await this.ticketAssigned.execute(req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Ticket assigned",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async changeTicketStatus(req: Request, res: Response){
        try{

            const response = await this.ticketStatusUpdate.execute(req.body)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Ticket Status Updated",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async getAllTickets(req: Request, res: Response){
        try{

            const response = await this.allTickets.execute()

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Tickets Retrieved",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async getAllCustomerTickets(req: Request, res: Response){
        try{

            const response = await this.allCustomerTickets.execute(req.params.customer)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Tickets Retrieved",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }

    async getAllAgentTickets(req: Request, res: Response){
        try{

            const response = await this.allAgentTickets.execute(req.params.agent)

            new Http().Response({
                res: res,
                statuscode: 200,
                message: "Tickets Retrieved",
                data: response
            })

        }catch(err: any){
            new Http().Response({
                res: res,
                statuscode: 500,
                message: err.message
            })
        }
    }


}