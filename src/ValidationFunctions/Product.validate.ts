import { Request,Response,NextFunction } from "express";

export const validate = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        file: req.file,
        query: req.query,
        params: req.params,
      },
        { 
          abortEarly: false
        }
      );
      return next();
    } catch (err) {
      return res.status(400).json({ type: err.name, message: err.errors });
    }
  };