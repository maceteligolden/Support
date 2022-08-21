import { injectable } from "tsyringe";
import IAddCustomer from "../domain/interfaces/IAddCustomer";
import CustomerRepository from "../repositories/CustomerRepository";


@injectable()
export default class AddCustomer{
    constructor(
        private customerRepository: CustomerRepository
    ){

    }

    async execute(args: IAddCustomer){
        //check if customer exist
        const exist = await this.customerRepository.getData({email: args.email})

        if(exist){
            return exist
        }
        //create customer if they dont exist
        const createCustomer = await this.customerRepository.addData(args);

        return createCustomer
    }
}