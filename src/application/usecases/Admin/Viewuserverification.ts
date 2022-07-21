import { injectable } from "tsyringe";
import VerificationRepository from "../../infrastructure/repositories/VerificationRepository";

@injectable()
export default class Viewuserverification {
    constructor(
        private verificationRepository: VerificationRepository
    ){}

    async execute(id: string){
        const userverification = await this.verificationRepository.getVerification({user: id})
    }
}