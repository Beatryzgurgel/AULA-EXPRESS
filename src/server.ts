import express from "express"
import helmet from "helmet"
import path from "path"
import router from "./routes"


//instancia do express
const server = express()

server.use(helmet())//proteger o backend http
server.use(express.json())//habilita leitura de json
server.use(express.urlencoded({extended: true}))//suporte a formulários
//acesso a arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")))


server.use("/", router)

//iniciar o servidor
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
})