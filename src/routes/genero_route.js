const express = require("express");
const genero_controller = require("../controllers/genero_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(genero_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(genero_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = genero_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = genero_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    genero_controller.destroy(req.params.id)
    res.json()
})

module.exports = router