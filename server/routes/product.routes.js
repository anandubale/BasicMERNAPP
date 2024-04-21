import express from 'express';
import * as productController from '../controllers/product.controller.js'
const productRouter = express.Router();

    productRouter.get('',(req,res)=>{
        res.json('Welcome');
    });

    productRouter.get('/all',productController.AllProductDataController)

    productRouter.get('/:_id',productController.getProductByIdController)


export default productRouter;