import { createConnection, getConnection } from "typeorm"
import CreateConversion, { conversionObject } from "../services/CreateConversion"

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
    it("Should create a new list object in the database", async () => {
        const result = await CreateConversion.create(exampleListObject)

        exampleListObject = result

        expect(result).toHaveProperty('id')
    })
})