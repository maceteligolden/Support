import { injectable } from "tsyringe";
import VerificationRepository from "../../infrastructure/repositories/VerificationRepository";

@injectable()
export default class VerifyKYC {
    constructor(
        private verificationRepository: VerificationRepository
    ){}

    async execute(payload: any){
        const verification = await this.verificationRepository.getVerification({user: payload.user})

        if(verification === null){
            return await this.verificationRepository.addVerification(payload)
        }

        return await this.verificationRepository.updateVerification({user: payload.user}, payload)
    }
}