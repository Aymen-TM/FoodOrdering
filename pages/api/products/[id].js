import dbConnect from "../../../lib/mongo"
import Product from "../../../models/Product"

export default async function handler(req,res) {

    dbConnect()

    const {method,query:{id}} = req 

    if(method === "GET"){
        const pizza = await Product.findById(id)
        res.status(200).json(pizza)
    }

    if(method === "PUT"){

    }

    if(method === "DELETE"){

    }

    if(method === "POST"){
        
    }
}