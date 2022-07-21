import { injectable } from "tsyringe";
import NextkinRepository from "../../infrastructure/repositories/NextkinRepository";

@injectable()
export default class Addnextkin {
    constructor(
        private nextkinRepository: NextkinRepository
    ){

    }

    async execute(payload: any){
        const addnextkin = await this.nextkinRepository.addNextkin(payload);
        return addnextkin
    }
}