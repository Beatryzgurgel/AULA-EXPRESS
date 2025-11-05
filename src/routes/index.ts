import express from "express"
import produtosRouter from ".//produtos"
import vooRouter from "./voo"
import pingRouter from ".//ping"

const router = express.Router()// criar o roteador
router.use("/produtos", produtosRouter)
router.use("/voos", vooRouter)
router.use("/ping", pingRouter)
//rotas
router.get("/ping", (req,res) => {
    res.json({ pong:true })
})




router.get("/", (req,res) => {
    let nome = "Jonh"
    let idade = 90
    res.json({nome,idade})
})

export default router