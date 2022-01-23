import { Request, Response } from 'express'
import CreateConversion from '../services/CreateConversion'
import DeleteConversion from '../services/DeleteConversion'
import GetAllConversions from '../services/GetAllConversions'
import GetOneConversion from '../services/GetOneConversion'

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

    async handleGetOneConversion(req: Request, res: Response){
        const { id } = req.params

        if(id === undefined){
            return res.status(400).json({
                error: true,
                message: 'id é necessário para realizar a busca'
            })
        }

        const result = await GetOneConversion.getOne(parseInt(id))

        if(result instanceof Error){
            return res.status(400).json({
                error: true,
                message: result.message
            })
        }

        return res.json(result)
    }

    async handleDeleteConversion(req: Request, res: Response){
        const { id } = req.params

        if(id === undefined){
            return res.status(400).json({
                error: true,
                message: 'id é necessário para deletar um item'
            })
        }

        const result = await DeleteConversion.delete(parseInt(id))

        if(result instanceof Error){
            return res.status(400).json({
                error: true,
                message: result.message
            })
        }

        return res.json(result)
    }
}

export default new ConversionController()