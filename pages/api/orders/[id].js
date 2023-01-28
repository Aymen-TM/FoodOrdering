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
        try {
            const order = await Order.findByIdAndUpdate(id,req.body,{ new: true })
            res.status(200).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === "DELETE"){
        try {
            const order = await Order.findByIdAndDelete(id)
            
            res.status(200).json(order)
            res.status(200).json({
                success: true,
                message: 'Document deleted successfully',
                order
              });
              
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error deleting document',
                error: error
              });
        }
    }

    if(method === "POST"){
        
    }
}