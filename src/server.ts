import express from "express"
import helmet from "helmet"
import path from "path"

//instancia do express
const server = express()

server.use(helmet())//proteger o backend http
server.use(express.json())//habilita leitura de json
server.use(express.urlencoded({extended: true}))//suporte a formulários
//acesso a arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")))

//rotas
server.get("/", (req,res) => {
    let nome = "Jonh"
    let idade = 90
    res.json({nome,idade})
})

//iniciar o servidor
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
})