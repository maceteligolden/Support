import { injectable } from "tsyringe";
import InvestmentRepository from "../../infrastructure/repositories/InvestmentRepository";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";

@injectable()
export default class Viewportfolioprojects {

    constructor(
        private investmentRepository: InvestmentRepository,
        private transactionRepository: TransactionRepository
    ){}

    async execute(project: string){
        const projectdetail = await this.investmentRepository.getInvestment({project: project})
        const projecttransaction = await this.transactionRepository.getTransactions({project: project})

        const data = {
            project: projectdetail,
            transactions: projecttransaction
        }

        return data
    }
}