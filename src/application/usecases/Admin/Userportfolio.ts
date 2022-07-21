import { injectable } from "tsyringe";
import InvestmentRepository from "../../infrastructure/repositories/InvestmentRepository";

@injectable()
export default class Userportfolio {
    constructor(private investmentRepository: InvestmentRepository){

    }

    async execute(id: string){
        const Userportfolio = await this.investmentRepository.getInvestments({user: id})
        return Userportfolio
    }
}