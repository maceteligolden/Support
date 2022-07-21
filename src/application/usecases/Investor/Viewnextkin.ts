import { injectable } from "tsyringe";
import NextkinRepository from "../../infrastructure/repositories/NextkinRepository";

@injectable()
export default class Viewnextkin {
    constructor(
        private nextkinRepository: NextkinRepository
    ){

    }

    async execute(user: string){
        const nextkin = await this.nextkinRepository.getNextkin({user: user})
        return nextkin
    }
}