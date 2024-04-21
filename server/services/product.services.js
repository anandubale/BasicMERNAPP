import { Console, error } from "console";
import productModel from "../models/product.model.js"



export const AllProducts = async()=>{
    console.log("we are in allProduct Service");
    let AllProductData = await productModel.find({ideal_for : "Women"}).limit(10);

    if(AllProductData == null)
    {   
        throw new error("Null Data is Coming");

    }
    else{
        
        // let data = JSON.stringify(AllProductData)
        // console.log(data)
        return AllProductData;
        
    }

}


export const getProductById = async (uniq_id) =>{
    console.log(`Requrestd Data for Id:- ${uniq_id}`);

    let productById  = await productModel.findOne({uniq_id})
    
    if(productById == null){
        throw new Error("Selected book is not available");
    }
    else{
        return productById;
    }
}