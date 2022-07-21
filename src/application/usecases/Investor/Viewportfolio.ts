import { injectable } from "tsyringe";
import InvestmentRepository from "../../infrastructure/repositories/InvestmentRepository";

@injectable()
export default class Viewportfolio {
    constructor(
        private investmentRepository: InvestmentRepository
    ){}

    async execute(id: string){
        const userportfolio = await this.investmentRepository.getInvestments({user: id});
        return userportfolio
    }
}