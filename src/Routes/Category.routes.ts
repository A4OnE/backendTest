import {Router} from 'express'
import {getCategory,postCategoryHandler,deleteCategoryHandler,patchCategoryHandler} from '../controller/Category.controller';
import {upload} from '../Utils/UploadFile';
// import{CategorySchema} from '../Schema/Category.schema'
// import{validate} from '../ValidationFunctions/Product.validate'
const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CategoryDto:
 *         type: object
 *         required:
 *           - Category_name
 *           - image
 *         properties: 
 *           Category_name:
 *             type: string
 *             description: this is for category name
 *           image:
 *             type: file
 *             description: this is for image
 */

/**
 * @swagger
 * tags:
 *   name: Category Record
 *   description: Record of all category CRUD
 * 
 */

/**
 * @swagger
 * /category/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Category Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new Category
 *     tags: [Category Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /category/{id}:
 *  patch:
 *     summary: used to update Categorys
 *     tags: [Category Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Category Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true 
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */

router
.route('/')
.get(getCategory)
.post(upload.single('image')
// validate(CategorySchema)
,postCategoryHandler);


router.route('/:id')
.patch(upload.single('image'),patchCategoryHandler)
.delete(deleteCategoryHandler);



export default router;
