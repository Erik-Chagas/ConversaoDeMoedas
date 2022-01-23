import { getRepository } from "typeorm"
import { Conversion } from "../database/entities/conversions"
import { api } from "../utils/api"

export type conversionObject = {
    id?: number
    moedaOriginal: string
    moedaDaConversão: string
    valorEnviado: number
    valorConvertido?: number
}

class CreateConversion{
    async create({ moedaOriginal, moedaDaConversão, valorEnviado } : conversionObject) : Promise<any> {
        const repo = getRepository(Conversion)

        const conversionCallAPI = (await api.get(`/last/${moedaOriginal}-${moedaDaConversão}`)).data
        const valorConvertido = parseFloat((valorEnviado * (conversionCallAPI[moedaOriginal + moedaDaConversão].bid)).toFixed(2))

        const conversion = repo.create({
            moedaOriginal,
            moedaDaConversão,
            valorEnviado,
            valorConvertido
        })
        
        try{
            const result = await repo.save(conversion)
            return result
        }catch(erro){
            return new Error(`${erro.message}`)
        }
    }
}

export default new CreateConversion()
