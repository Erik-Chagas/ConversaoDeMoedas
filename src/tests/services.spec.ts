import { createConnection, getConnection } from "typeorm"
import CreateConversion, { conversionObject } from "../services/CreateConversion"
import DeleteConversion from "../services/DeleteConversion"
import GetAllConversions from "../services/GetAllConversions"
import GetOneConversion from "../services/GetOneConversion"

//TESTES UNITÁRIOS
describe("Services layer", () => {
    let exampleListObject : conversionObject = {
        moedaOriginal: 'USD',
        moedaDaConversão: 'BRL',
        valorEnviado: Math.floor(Math.random() * 100) + 1
    }

    beforeAll(async () => {
        await createConnection() //conectando ao banco de dados
    })

    afterAll(async () => {
        await getConnection().close() //desconectando do banco de dados
    })

    //CREATE
    it("Should create a new conversion in the database", async () => {
        const result = await CreateConversion.create(exampleListObject)

        exampleListObject = result

        expect(result).toHaveProperty('id')
    })

    //GET ALL
    it("Should return all conversions", async () => {
        const result = await GetAllConversions.getAll()

        expect(result).toBeInstanceOf(Array)
    })

    //GET ONE
    it("Should return the conversion of the specified id", async () => {
        const { id } = exampleListObject
        const result = await GetOneConversion.getOne(id)
        
        expect(result).toMatchObject(exampleListObject)
    })

    it("Should return an error for not finding the conversion of specified id for get", async () => {
        const id = Math.floor(Math.random() * 10000) + 1000
        const result = await GetOneConversion.getOne(id)

        expect(result).toEqual(new Error('Conversão não encontrada'))
    })

    //DELETE
    it("Should delete conversion of the specified id", async () => {
        const { id } = exampleListObject
        const result = await DeleteConversion.delete(id)

        const checkDelete = await GetOneConversion.getOne(id)

        expect(checkDelete).toEqual(new Error('Conversão não encontrada'))
    })

    it("Should return an error for not finding the conversion of specified id for delete", async () => {
        const id = Math.floor(Math.random() * 10000) + 1000
        const result = await DeleteConversion.delete(id)

        expect(result).toEqual(new Error('Conversão não encontrada'))
    })
})