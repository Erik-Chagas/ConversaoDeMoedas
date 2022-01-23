import { getRepository } from "typeorm"
import { Conversion } from "../database/entities/conversions"

class GetOneConversion{
    async getOne(id : number){
        const repo = getRepository(Conversion)

        const ConversionObject = await repo.findOne(id)

        if(!ConversionObject){
            return new Error('Conversão não encontrada')
        }

        ConversionObject.valorEnviado = parseFloat(ConversionObject.valorEnviado.toString())
        ConversionObject.valorConvertido = parseFloat(ConversionObject.valorConvertido.toString())

        return ConversionObject
    }
}

export default new GetOneConversion()