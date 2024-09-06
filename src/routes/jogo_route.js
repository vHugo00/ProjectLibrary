const express = require("express");
const jogo_controller = require("../controllers/jogo_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(jogo_controller.index(req.query))
})

router.get("/:id", (req, res) => {
    res.json(jogo_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = jogo_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = jogo_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    jogo_controller.destroy(req.params.id)
    res.json()
})

module.exports = router