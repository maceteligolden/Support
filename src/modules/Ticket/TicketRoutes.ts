import { Router } from "express";
import { container } from 'tsyringe';
import TicketController from "./controller/TicketController";

const ticketRouter = Router();
const ticketController = container.resolve(TicketController)

ticketRouter.post('/create', (req, res)=>ticketController.createTicket(req, res));
ticketRouter.post('/assign', (req, res)=>ticketController.assignTicket(req, res));
ticketRouter.post('/status', (req, res)=>ticketController.changeTicketStatus(req, res));
ticketRouter.get('/all', (req, res)=>ticketController.getAllTickets(req, res));
ticketRouter.get('/all/:customer', (req, res)=>ticketController.getAllCustomerTickets(req, res));
ticketRouter.get('/all/:agent', (req, res)=>ticketController.getAllAgentTickets(req, res));

export default ticketRouter