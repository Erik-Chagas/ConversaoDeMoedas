
# Conversão de moedas

Desafio Back-End 2 do processo seletivo da Cowala Software. Trata-se de uma API de conversão de moedas e o salvamento dos dados de conversão em um banco de dados PostgreSQL, com CRUD completo, testes unitários e de integração. 

O deploy da API foi feito no Heroku e o deploy do banco de dados foi feito no ElephantSQL.

* Link de Deploy: https://conversaodemoedas.herokuapp.com/

# Principais tecnologias utilizadas
- Node.js
- Typescript
- Express
- PostgreSQL
- Typeorm
- Jest
- Supertest
- Heroku
- ElephantSQL

# Como funciona
As conversões do banco de dados têm a seguinte estrutura: 

```
{
    "id": integer
    "moedaOriginal": string,
    "moedaDaConversão": string,
    "valorEnviado": decimal
    "valorConvertido": decimal
}
```

O id é a chave primária que é auto incrementada em cada salvamento no banco de dados.
Através das rotas pode-se criar, ler, alterar e deletar itens da lista. As funcionalidades foram isoladas em serviços específicos localizados em 'src/services/'

Foram implementados testes unitários e de integração (localizados em 'src/tests/') utilizando-se as bibliotecas Jest e Supertest.

# Rotas

| Métodos   | Rotas  | Descrição     
| :---------| :------|:---------------------------------- |
| GET       | /      | Retorna todos as conversões salvas no banco de dados                           |
| GET       | /conversions/:id | Retorna a conversão correspondente ao parâmetro "id" da url|
| POST       | /conversions | Retorna a conversão da moeda requisitada e o valor convertido e cria um novo item no banco de dados com os dados passados no "body"|
| DELETE       | /conversions/:id | Deleta um registro de conversão do banco de dados correspondente ao parâmetro "id" da url|

- POST
Body:
```
{
    "moedaOriginal": "USD",
    "moedaDaConversão": "BRL",
    "valorEnviado": 67.89
}
```

# Rodando o projeto

Para rodar o projeto deve-se definir as configurações de conexão com o banco de dados como descrito nesse link: https://typeorm.io/#/using-ormconfig

# Quem fez o projeto?

O projeto foi inteiramente produzido por mim, Erik Chagas Rozal, Desenvolvedor Web Full-Stack.

