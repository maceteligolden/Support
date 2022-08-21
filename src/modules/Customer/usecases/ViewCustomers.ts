import { injectable } from "tsyringe";
import CustomerRepository from "../repositories/CustomerRepository";


@injectable()
export default class ViewCustomers{
    constructor(
        private customerRepository: CustomerRepository
    ){

    }

    async execute(){
      
        const Customer = await this.customerRepository.getDatas({});

        return Customer
    }
}