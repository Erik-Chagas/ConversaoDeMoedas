import { getRepository } from "typeorm"
import { Conversion } from "../database/entities/conversions"

class DeleteConversion{
    async delete(id : number){
        const repo = getRepository(Conversion)

        const conversionObject = await repo.findOne(id)

        if(!conversionObject){
            return new Error('Conversão não encontrada')
        }

        const result = await repo.delete(id)
        
        return 'Conversão deletada com sucesso'
    }
}

export default new DeleteConversion()