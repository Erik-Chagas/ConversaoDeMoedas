import { Request, Response } from 'express'
import CreateConversion from '../services/CreateConversion'
import GetAllConversions from '../services/GetAllConversions'

class ConversionController{
    async handleCreateConversion(req: Request, res: Response){
        const { moedaOriginal, moedaDaConversão, valorEnviado } = req.body

        if(moedaOriginal === undefined || moedaDaConversão === undefined || valorEnviado === undefined){
            return res.status(400).json({
                error: true,
                message: 'Moedas e valor de envio são necessários'
            })
        }

        const result = await CreateConversion.create({moedaOriginal, moedaDaConversão, valorEnviado})

        if(result instanceof Error){
            return res.status(400).json({
                error: true,
                message: result.message
            })
        }
        
        return res.json(result)
    }

    async handleGetAllConversions(req: Request, res: Response){
        const result = await GetAllConversions.getAll()

        return res.json(result)
    }
}

export default new ConversionController()