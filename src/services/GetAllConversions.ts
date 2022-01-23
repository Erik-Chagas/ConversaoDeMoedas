import { getRepository } from "typeorm"
import { Conversion } from "../database/entities/conversions"

class GetAllConversions{
    async getAll(){
        const repo = getRepository(Conversion)

        const Conversions = await repo.find()

        return Conversions
    }
}

export default new GetAllConversions()