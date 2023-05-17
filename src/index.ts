import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response,NextFunction } from "express"
import { AppDataSource } from "./data-source"
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUiExpress from 'swagger-ui-express'
import {port} from './config'
import AppError from "./Utils/AppError"
import * as cors from 'cors'
import * as morgan from 'morgan'
// routes import 
import DealerRoute from './Routes/Dealer.routes';
import CustomerRoute from './Routes/Customer.routes';
import PaymentRoute from './Routes/Payment.routes';

import ProductRoute from './Routes/Product.routes';
import ServicesRoute from './Routes/Service.routes';
import BookingRoute from './Routes/Booking.routes';

import CategoryRoute from './Routes/Category.routes';
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(cors({credentials:true,origin:'*'}))
    app.use('/public',express.static('src/Public'));
    app.use(morgan('dev'));
     // swagger setup
const swaggerOptions={
    definition:{
       openapi: '3.0.0',
       info:{
           title:"Pharmacy management system",
           version:"15",
           description:"Main website",
           contact:{
               name:'kisan mahat'
           },
           servers:[4004]
       }
    },
    apis:["./routes/*.ts",`${__dirname}/routes/*.routes.ts`,]
   }
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/doc',swaggerUiExpress.serve,swaggerUiExpress.setup(swaggerDocs));


    // routes here
    app.get('/',(req:Request,res:Response)=>{
        res.status(200).json({
            message:"working"
        })
    })

    app.use('/Dealer',DealerRoute);
    app.use('/category',CategoryRoute);
    app.use('/customer',CustomerRoute);
    app.use('/payment',PaymentRoute);
    app.use('/product',ProductRoute);
    app.use('/service',ServicesRoute);
    app.use('/booking',BookingRoute);




    // unhandled routes
    app.all('*', (req: Request, res: Response, next: NextFunction) => {
        next(new AppError(404, `Route ${req.originalUrl} not found`));
      });

             // GLOBAL ERROR HANDLER
    app.use(
        (error: AppError, req: Request, res: Response, next: NextFunction) => {
          error.status = error.status || 'error';
          error.statusCode = error.statusCode || 500;
  
          res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
          }); 
        }
      );

    // start express server
    app.listen(port,()=>console.log("Express server has started on port: "+port));
}).catch(error => console.log(error))
