import {Router} from 'express';
import {upload} from '../Utils/UploadFile';
import {validate} from '../ValidationFunctions/Product.validate';
// import {ProductSchema} from '../Schema/Product.schema'
import {deleteProductHandler, getProductHandler, getSingleProductHandler, postProductHandler, updateProductHandler} from '../controller/Product.controlller'
const router =Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     productDto:
 *         type: object
 *         properties: 
 *           product_name:
 *             type: string
 *             description: this is for name of the product
 *           product_category:
 *             type: string
 *             description: this is for product category
 *           product_brand:
 *             type: string
 *             description: this is for product brand
 *           product_quantity:
 *             type: string
 *             description: this is for product quantity
 *           desc:
 *             type: string 
 *             description: this is for description 
 *           price:
 *             type: string
 *             description: this is for price
 *           image:
 *             type: file
 *             description: this is for image
 *           priceandunit:
 *             type: array
 *             desc: this is for price and units
 */

/**
 * @swagger
 * tags:
 *   name: product Record
 *   description: Record of all  CRUD
 * 
 */

/**
 * @swagger
 * /product/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [product Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new product
 *     tags: [product Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema: 
 *             $ref: '#/components/schemas/productDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /product/{id}:
 *  get:
 *     summary: Use to request single  product Record
 *     tags: [product Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  patch:
 *     summary: used to update product
 *     tags: [product Record]
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
 *             $ref: '#/components/schemas/productDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [product Record]
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
.get(getProductHandler)
.post(postProductHandler)
.delete()

router.route('/:id')
.get(getSingleProductHandler)
.patch(updateProductHandler)
.delete(deleteProductHandler)
export default router;
