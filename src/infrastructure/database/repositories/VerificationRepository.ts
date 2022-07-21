import { injectable } from "tsyringe";
import VerificationSchema from "../../schemas/VerificationSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class VerificationRepository {

    constructor(){
    }

    async addVerification(payload: any){
        const Verification = await createData(VerificationSchema, payload);
        return Verification;
    }

    async getVerifications(payload: any){
        const Verifications = await readData(VerificationSchema, payload);
        return Verifications;
    }

    async getVerification(payload: any){
        const Verification = await readsingleData(VerificationSchema, payload);
        return Verification;
    }

    async updateVerification(keyword: any, data: any){
        const Verification = await updateData(VerificationSchema, keyword, data);
        return Verification;
    }

    async deleteVerification(id: string){
        const Verification = await deleteData(VerificationSchema, {_id: id});
        return Verification;
    }

}