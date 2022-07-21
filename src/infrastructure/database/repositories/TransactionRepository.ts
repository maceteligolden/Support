import { injectable } from "tsyringe";
import TransactionSchema from "../../schemas/TransactionSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class TransactionRepository {

    constructor(){
    }

    async addTransaction(payload: any){
        const transaction = await createData(TransactionSchema, payload);
        return transaction;
    }

    async getTransactions(payload: any){
        const transactions = await readData(TransactionSchema, payload);
        return transactions;
    }

    async getTransaction(payload: any){
        const transaction = await readsingleData(TransactionSchema, payload);
        return transaction;
    }

    async updateTransaction(keyword: any, data: any){
        const transaction = await updateData(TransactionSchema, keyword, data);
        return transaction;
    }

    async deleteTransaction(id: string){
        const transaction = await deleteData(TransactionSchema, {_id: id});
        return transaction;
    }

}