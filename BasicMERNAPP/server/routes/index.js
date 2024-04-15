import express from 'express'
const router = express.Router();
import  productRouter from '../routes/product.routes.js'




const routes =()=>{
    // router.get('/',(req,res)=>{
    //     res.json("Welcome to productoo")
    // });
    router.use('/product',productRouter);
    return router;
}



export default routes;