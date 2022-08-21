import { injectable } from "tsyringe";
import CustomerSchema from "../../../common/database/schemas/CustomerSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../../common/utils";



@injectable()
export default class CustomerRepository {

    constructor(){
    }

    async addData(payload: any){
        const Response = await createData(CustomerSchema, payload);
        return Response;
    }

    async getDatas(payload: any){
        const Response = await readData(CustomerSchema, payload);
        return Response;
    }

    async getData(payload: any){
        const Response = await readsingleData(CustomerSchema, payload);
        return Response;
    }

    async updateData(keyword: any, data: any){
        const Response = await updateData(CustomerSchema, keyword, data);
        return Response;
    }

    async deleteData(id: string){
        const Response = await deleteData(CustomerSchema, {_id: id});
        return Response;
    }

}