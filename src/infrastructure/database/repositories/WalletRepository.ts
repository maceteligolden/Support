import { injectable } from "tsyringe";
import WalletSchema from "../../schemas/WalletSchema";
import { createData, deleteData, readData, readsingleData, updateData } from "../../utils";

@injectable()
export default class WalletRepository {

    constructor(){
    }

    async addWallet(payload: any){
        const Wallet = await createData(WalletSchema, payload);
        return Wallet;
    }

    async getWallets(payload: any){
        const Wallets = await readData(WalletSchema, payload);
        return Wallets;
    }

    async getWallet(payload: any, select?: any){
        const Wallet = await readsingleData(WalletSchema, payload, select);
        return Wallet;
    }

    async updateWallet(keyword: any, data: any){
        const Wallet = await updateData(WalletSchema, keyword, data);
        return Wallet;
    }

    async deleteWallet(id: string){
        const Wallet = await deleteData(WalletSchema, {_id: id});
        return Wallet;
    }

}