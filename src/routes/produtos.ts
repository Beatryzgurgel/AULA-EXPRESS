import express from "express"

const router = express.Router()

router.get("/:id", (req,res) => {
    console.log(req.params) //mostrar parametros recebidos
    res.json({ nome: "Teclado XYZ", preco: 90})
})

router.post("/ ", (req,res) => { //rotas para enviar dados
    res.json({ produtos: []})
})

export default router