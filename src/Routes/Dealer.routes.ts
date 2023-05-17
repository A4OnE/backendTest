
import {Router} from 'express';
import { getBrandHandler,postBrandHandler,deleteBrand,updateBrandHandler } from '../controller/Dealer.controller';
import {upload} from '../Utils/UploadFile'
const router = Router();
// router.use(deserializeUser, requireUser);


/**
 * @swagger
 * components:
 *   schemas:
 *     BrandDto:
 *         type: object
 *         required:
 *           - Brand_name
 *           - image
 *         properties: 
 *           Brand_name:
 *             type: string
 *             description: this is for name of the category
 *           image:
 *             type: file
 *             description: this is for image
 */

/**
 * @swagger
 * tags:
 *   name: Brand Record
 *   description: Record of all user CRUD
 * 
 */

/**
 * @swagger
 * /brand/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Brand Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new brand
 *     tags: [Brand Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema: 
 *             $ref: '#/components/schemas/BrandDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /brand/{id}:
 *  patch:
 *     summary: used to update brands
 *     tags: [Brand Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/BrandDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Brand Record]
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
  .post(upload.single('image'), postBrandHandler)
  
  .get(getBrandHandler)
//   .delete(getPostHandler);

router
  .route('/:id')
  .patch(upload.single('image'),updateBrandHandler)
  .delete(deleteBrand)
  export default router;