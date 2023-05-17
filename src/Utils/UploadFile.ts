import * as multer  from 'multer';
import {Request, Router} from 'express';

const storage = multer.diskStorage({
    destination: function(req:Request, file:Express.Multer.File, cb) {
        cb(null, `src/Public`);
    },
    filename: function (req:Request, file:Express.Multer.File, cb) {
        console.log(file)
       let str = file.originalname.split(" ").join("") ;
       console.log(str)
        cb(null ,str );
    }
});

export const upload = multer({ storage: storage });