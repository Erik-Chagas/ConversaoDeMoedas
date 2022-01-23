import { app } from "./app"

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})