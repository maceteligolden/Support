import { injectable } from "tsyringe";
import NextkinRepository from "../../infrastructure/repositories/NextkinRepository";

@injectable()
export default class Editnextkin {
    constructor(
        private nextkinRepository: NextkinRepository
    ){

    }

    async execute(payload: any){
        const editnextkin = await this.nextkinRepository.updateNextkin({user: payload.user}, payload);
        return editnextkin
    }
}