import dbConnect from "../../../lib/mongo"
import Order from "../../../models/Order"

export default async function handler(req,res) {

    dbConnect()

    const {method,query:{id}} = req 

    if(method === "GET"){
        try {
            const order = await Order.findById(id)

            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "PUT"){

    }

    if(method === "DELETE"){

    }

    if(method === "POST"){
        
    }
}