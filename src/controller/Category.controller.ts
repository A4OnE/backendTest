import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Category } from '../entity/Category';

const CategoryRepo = AppDataSource.getRepository(Category)
export const getCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        let Category = await CategoryRepo.find({
            order: {
                createdAt: "ASC"
              }
        });
        res.status(200).json({
            status: 'success',
            data: Category
        })

    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const postCategoryHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(req.file)    
    try {
        req.body.image = req.file.filename;
        await CategoryRepo.save(req.body).then((result: object) => {
            res.status(200).json({
                message: "category has been added",
                result
            })
        }).catch(err => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const patchCategoryHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let Category = await CategoryRepo.findOneBy({ id: req.params.id });
        if (!Category) {
            return next(new AppError(404, "cateory with this di doesn't exist"))
        }
        req.body.image = req.file ? req.file.filename : Category.image;
        Object.assign(Category, req.body);
        await CategoryRepo.save(Category).then((result: object) => {
            res.status(200).json({
                message: "category has been updated",
                result
            })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }
}

export const deleteCategoryHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let Category = await CategoryRepo.findOneBy({ id: req.params.id });
        if (!Category) {
            return next(new AppError(404, "cateory with this di doesn't exist"))
        }
        await CategoryRepo.remove(Category).then((result: object) => {
            res.status(200).json({
                message: "category has been updated",
                result
            })
        }).catch((err: any) => {
            next(new AppError(err.statusCode, err.message))
        });
    } catch (error: any) {
        next(new AppError(error.statusCode, error.message))
    }

}