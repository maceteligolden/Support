import AWS from 'aws-sdk';
import { injectable } from 'tsyringe';
import { basic } from './email';


@injectable()
export default class Emailer {

    accessKeyId?: string;
    secretAccessKey?: string;
    region?: string;

    AWS_SES?: any;

    constructor(
        accessKeyId: string,
        secretAccessKey: string,
        region: string
    ){
        this.AWS_SES = new AWS.SES({accessKeyId, secretAccessKey, region})
    }

    sendEmail(recipientEmail: string, recipientName: string) {
        let params = {
            Source: 'maceteligolden@gmail.com',
            Destination: {
              ToAddresses: [
                recipientEmail
              ],
            },
            ReplyToAddresses: [],
            Message: {
              Body: {
                Html: {
                  Charset: 'UTF-8',
                  Data: basic,
                },
              },
              Subject: {
                Charset: 'UTF-8',
                Data: `Hello, ${recipientName}!`,
              }
            },
          };

          return this.AWS_SES.sendEmail(params).promise();
    }

    sendTemplateEmail(recipientEmail: string, template: any) {
        let params = {
            Source: 'maceteligolden@gmail.com',
            Template: template.name,
            Destination: {
              ToAddresses: [ 
                recipientEmail
              ]
            },
            TemplateData: template.data
          };
          return this.AWS_SES.sendTemplatedEmail(params).promise();
    }

}


