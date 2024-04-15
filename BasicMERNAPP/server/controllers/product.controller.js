import res from 'express'
import HttpStatus from 'http-status-codes';
import * as ProductService from "../services/product.services.js";



export const AllProductDataController = async (req,res)=>{
    try {
        console.log("we are in AllProductDataCOntroller")

        let AllProductData = await ProductService.AllProducts()
        res.status(HttpStatus.OK).json({
            code:HttpStatus.OK,
            data:AllProductData,
            message:"All Product Fetched Perfectly"
        }) 
        // console.log("All Product Fetched Perfectly")
        // if(AllProductData == null){
        //     throw new Error("Getting null data");
        // }else{
        // return AllProductData;
        // }

        
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({
            code:HttpStatus.NOT_FOUND,
            message : `${error}`
        })

        console.log(error)

    }
} 



export const getProductByIdController = async (req,res) =>{
try {

    console.log("req.params._id:- ",req.params._id)
    
    let getprdById = await  ProductService.getProductById(req.params._id)
    res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: getprdById,
        message: "Successfully Retrived the product By Id"
    })

    

} catch (error) {
    console.log(error);
    res.status(HttpStatus.NOT_FOUND).json({
        code:HttpStatus.NOT_FOUND,
        message:`${error}`
    })
}
}