import axios from 'axios';

export default class Flutterwave {

    constructor(){

    }

    localTransfer(){

        const payload = {
            "account_bank": "044",
            "account_number": "0690000040",
            "amount": 5500,
            "narration": "Akhlm Pstmn Trnsfr xx007",
            "currency": "NGN",
            "reference": "akhlm-pstmnpyt-rfxx007_PMCKDU_1",
            "callback_url": "https://www.flutterwave.com/ng/",
            "debit_currency": "NGN"
        }

        axios({
            method: 'post',
            url: 'https://api.flutterwave.com/v3/transfers',
            data: payload,
         
        }).then((response)=>{
            console.log(response)
        })
    }

    foreignTransfer(){

    }

    localWithdrawal(){

    }

    foreignWithdrawal(){

    }
}