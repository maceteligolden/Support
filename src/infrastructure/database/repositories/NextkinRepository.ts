import { injectable } from "tsyringe";
import NextkinSchema from "../../schemas/NextkinSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class NextkinRepository {

    constructor(){
    }

    async addNextkin(payload: any){
        const Nextkin = await createData(NextkinSchema, payload);
        return Nextkin;
    }

    async getNextkins(payload: any){
        const Nextkins = await readData(NextkinSchema, payload);
        return Nextkins;
    }

    async getNextkin(payload: any){
        const Nextkin = await readsingleData(NextkinSchema, payload);
        return Nextkin;
    }

    async updateNextkin(keyword: any, data: any){
        const Nextkin = await updateData(NextkinSchema, keyword, data);
        return Nextkin;
    }

    async deleteNextkin(id: string){
        const Nextkin = await deleteData(NextkinSchema, {_id: id});
        return Nextkin;
    }

}