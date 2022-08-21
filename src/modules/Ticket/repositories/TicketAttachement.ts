import { injectable } from "tsyringe";
import TicketattachmentSchema from "../../../common/database/schemas/Ticket_Attachment";
import { createData, deleteData, readData, readsingleData, updateData } from "../../../common/utils";

@injectable()
export default class TicketattachmentRepository {

    constructor(){
    }

    async addData(payload: any){
        const Response = await createData(TicketattachmentSchema, payload);
        return Response;
    }

    async getDatas(payload: any){
        const Response = await readData(TicketattachmentSchema, payload);
        return Response;
    }

    async getData(payload: any){
        const Response = await readsingleData(TicketattachmentSchema, payload);
        return Response;
    }

    async updateData(keyword: any, data: any){
        const Response = await updateData(TicketattachmentSchema, keyword, data);
        return Response;
    }

    async deleteData(id: string){
        const Response = await deleteData(TicketattachmentSchema, {_id: id});
        return Response;
    }

}