//TESTES DE INTEGRAÇÃO
import { conversionObject } from "../services/CreateConversion";
import { app } from "../app";
import request from 'supertest'
import { createConnection, getConnection } from 'typeorm';

describe('Testing API calls', () => {
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
    it('Should be able to create a new conversion', async () => {
        const { moedaOriginal, moedaDaConversão, valorEnviado } = exampleListObject

        const response = await request(app).post('/create').send({moedaOriginal, moedaDaConversão, valorEnviado})
        exampleListObject = response.body

        expect(response.status).toBe(200)
        expect(Object.keys(response.body).sort()).toEqual(['id', 'moedaOriginal', 'moedaDaConversão', 'valorEnviado', 'valorConvertido'].sort())
    })

    //GET ALL
    it("Should return all conversions", async () => {
        const response = await request(app).get('/')

        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    //GET ONE
    it("Should return the conversion of the specified id", async () => {
        const { id } = exampleListObject

        const response = await request(app).get('/getone').send({id})

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(exampleListObject)
    })

    it("Should return an error for not finding the conversion of specified id for get", async () => {
        const id = Math.floor(Math.random() * 10000) + 1000

        const response = await request(app).get('/getone').send({id})

        expect(response.status).toBe(400)
        expect(response.body.message).toEqual('Conversão não encontrada')
    })

    //DELETE
    it("Should delete conversion of the specified id", async () => {
        const { id } = exampleListObject

        const response = await request(app).delete('/delete').send({id})
        const checkDelete = await request(app).get('/getone').send({id})

        expect(response.status).toBe(200)

        expect(checkDelete.status).toBe(400)
        expect(checkDelete.body.message).toEqual('Conversão não encontrada')
    })

    it("Should return an error for not finding the conversion of specified id for delete", async () => {
        const id = Math.floor(Math.random() * 10000) + 1000

        const response = await request(app).delete('/delete').send({id})

        expect(response.status).toBe(400)
        expect(response.body.message).toEqual('Conversão não encontrada')
    })
})