import {ResponseModel} from "../models/index";
import { Response } from 'express';
import { injectable } from "tsyringe";

@injectable()
export default class Http {

    constructor(){
    }

    Response({res, statuscode, message, data}: ResponseModel) {

        const response: Response =    res.json({
                                status: statuscode,
                                message: message,
                                data: data
                            })
        return response;
    }
}