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
    it('Should be able to create a new user', async () => {
        const { moedaOriginal, moedaDaConversão, valorEnviado } = exampleListObject

        const response = await request(app).post('/create').send({moedaOriginal, moedaDaConversão, valorEnviado})
        exampleListObject = response.body

        expect(response.status).toBe(200)
        expect(Object.keys(response.body).sort()).toEqual(['id', 'moedaOriginal', 'moedaDaConversão', 'valorEnviado', 'valorConvertido'].sort())
    })
})