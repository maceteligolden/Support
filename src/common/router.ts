import { Application } from 'express';
import authRouter from '../modules/Auth/AuthRoutes';
import customerRouter from '../modules/Customer/api';
import ticketRouter from '../modules/Ticket/TicketRoutes';
import roleRouter from '../modules/User/RoleRoutes';
import userRouter from '../modules/User/UserRoutes';

export default function moduleRouters(app: Application): void {

  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/customers', customerRouter);
  app.use('/api/v1/tickets', ticketRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/roles', roleRouter);

}
