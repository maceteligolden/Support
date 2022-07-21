import { injectable } from "tsyringe";
import InvestmentRepository from "../../infrastructure/repositories/InvestmentRepository";
import ProjectRepository from "../../infrastructure/repositories/ProjectRepository";
import TransactionRepository from "../../infrastructure/repositories/TransactionRepository";
import WalletRepository from "../../infrastructure/repositories/WalletRepository";
import Editwalletbalance from "./Editwalletbalance";

@injectable()
export default class Addtoportfolio {
    constructor(
        private walletRepository: WalletRepository,
        private transactionRepository: TransactionRepository,
        private investmentRepository: InvestmentRepository,
        private editwalletbalance: Editwalletbalance,
        private projectRepository: ProjectRepository
    ){}

    async execute(project: string, data: any){

        //update wallet balance
        await this.editwalletbalance.execute(data.type, data.user, data.balance)

        //update investment
        const payload = {
            user: data.user,
            project: project,
            total_cells: data.cells,
            capital: data.capital,
            investment_date: data.investment_date,
        }

        await this.investmentRepository.addInvestment(payload)

        //update project details

        const singleproject = await this.projectRepository.getProject({_id: project})

        const newsold_cell = singleproject.sold_cell + data.sold_cell;


        const projectpayload = {
            sold_cell: newsold_cell,
            availability: singleproject.total_cell === newsold_cell ? "Now Installing" : "Now available"
        }

        await this.projectRepository.updateProject({_id: project}, projectpayload)

        //update transaction


        //add to log 


        //add to notification

        
    }
}