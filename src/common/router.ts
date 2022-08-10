import { Application } from 'express';
import authRouter from '../modules/Auth/AuthRoutes';
import customerRouter from '../modules/Customer/api';

export default function moduleRouters(app: Application): void {

  //Sample
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/customer', customerRouter);

}
