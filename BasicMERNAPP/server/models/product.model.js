import { Schema ,model} from "mongoose"
// mongoose.connect("mongodb://localhost:27017/MyntraDB_V1.MyntraDB_V1")


const productSchema = new Schema({
    _id:
        {
                type:String,
                //require :true
        },
    uniq_id:{
                type:String,
        },
    product_id:{
                type:String,
               // require :true
        },
    link:{
                type:Date,
                
    },
    size:{
                type:String,
        },
    variant_sku:{
                type:String,
    },
    brand:{
                type:String,
        },
    care_instructions:
    {
                type:String,
        },
    dominant_material:{
                type:String,
        },
    title:{
                type:String,
        },
    actual_color:{
                type:String,
        },
    dominant_color:{
                type:String,
        },
    product_type:{
                type:String,
        },
    images:{
                type:String,
        },
    body:{
                type:String,
        },
    product_details:{
                type:String,
        },
    size_fit:{
                type:String,
        },
    complete_the_look:{
                type:String,
        },
    type:{
                type:String,
        },
    variant_price:{
                type:Number,
        },
    variant_compare_at_price:{
                type:Number,
        },
    ideal_for:{
                type:String,
        },
    is_in_stoc:{
                type:String,
        },
    inventory:{
                type:Number,
        },
    specifications:{
                type:String,
        },
}, {
    timestamps: true
  }
)

export default model('Product',productSchema)