import dbConnect from "../../../lib/mongo"
import Product from "../../../models/Product"

export default async function handler(req,res) {

    dbConnect()

    const {method} = req 

    if(method === "GET"){
        try {
            const products = await Product.find()
            res.status(200).json(products)
            
        } catch (error) {
            res.status(500).json({mesage:error})
        }
    }

    if(method === "POST"){
        try {    
            const product = await Product.create(req.body);

            res.status(201).json(product)

        } catch (error) {
          res.status(403).json({message:error})  
        }
        
    }
}