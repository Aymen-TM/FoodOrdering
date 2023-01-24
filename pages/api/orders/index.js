import dbConnect from "../../../lib/mongo"
import Order from "../../../models/Order"

export default async function handler(req,res) {

    dbConnect()

    const {method} = req 

    if(method === "GET"){
        try {
            const order = await Order.find()

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
        try {
            console.log(req.body);
            const order = await Order.create(req.body)

            res.status(201).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}