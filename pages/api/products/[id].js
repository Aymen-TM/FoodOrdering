import dbConnect from "../../../lib/mongo"
import Product from "../../../models/Product"

export default async function handler(req,res) {

    dbConnect()

    const {method,query:{id}} = req 

    if(method === "GET"){
        const pizza = await Product.findById(id)
        res.status(200).json(pizza)
    }

    if(method === "PATCH"){
     try{
        const pizza = await Product.findByIdAndUpdate(id,req.body)
            
        res.status(200).json(pizza)
        res.status(200).json({
            success: true,
            message: 'Document deleted successfully',
            pizza
          });
          
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting document',
            error: error
          });
    }

    }

    if(method === "DELETE"){
        try {
            const pizza = await Product.findByIdAndDelete(id)
            
            res.status(200).json(pizza)
            res.status(200).json({
                success: true,
                message: 'Document deleted successfully',
                pizza
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