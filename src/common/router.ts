import { Application } from 'express';
import customerRouter from '../modules/Customer/api';

export default function moduleRouters(app: Application): void {

  //Sample
  app.use('/api/v1/customer', customerRouter);

}
