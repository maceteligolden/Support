import 'reflect-metadata';
require('dotenv').config();
import express, {Application, NextFunction, Request, Response} from 'express';
import { connect } from './src/utils';
import { projectRouter,
         logRouter, 
         userRouter,
         transactionRouter,
         authRouter,
         reportRouter,
         operatorRouter,
         investorprojectRouter,
         investmentRouter,
         investorauthRouter,
         investorRouter
        } from './src/routes/Index';

const app: Application = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req: Request , res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//Routes
app.use('/api/v2/admin/auth', authRouter);
app.use('/api/v2/admin/projects', projectRouter);
app.use('/api/v2/admin/reports', reportRouter);
app.use('/api/v2/admin/logs', logRouter);
app.use('/api/v2/admin/users', userRouter);
app.use('/api/v2/admin/transactions', transactionRouter);
app.use('/api/v2/admin/operators', operatorRouter);

app.use('/api/v2/investor/auth', investorauthRouter);
app.use('/api/v2/investor/users', investorRouter);
app.use('/api/v2/investor/projects', investorprojectRouter);
app.use('/api/v2/investor/investments', investmentRouter);

//Start server 
const startServer = async() => {

    try{
  
      connect("taskmanager", "maceteli", "yuppies1998")
  
      const port: string = process.env.PORT || "5000"
  
      app.listen(port, () => { console.log(`listening to port ${port}`)})
  
    }catch(error){
  
      console.log(error)
  
    }
  
}

startServer()

