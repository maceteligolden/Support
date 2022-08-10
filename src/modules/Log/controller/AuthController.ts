import { injectable } from "tsyringe";
import { Http } from "../../../common/utils";
import UserLogin from "../usecases/UserLogin";

@injectable()
export default class AuthController {
    constructor(
        private userLogin: UserLogin
    ){

    }

}