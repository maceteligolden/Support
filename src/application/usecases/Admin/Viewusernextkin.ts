import { injectable } from "tsyringe";
import NextkinRepository from "../../infrastructure/repositories/NextkinRepository";

@injectable()
export default class Viewusernextkin{
    constructor(
        private nextkin: NextkinRepository
    ){}

    async execute(id: string){
        const usernextkin = await this.nextkin.getNextkin({user: id})
        return usernextkin
    }
}