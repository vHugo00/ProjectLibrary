const express = require("express");
const publicadora_controller = require("../controllers/publicadora_controller.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.json(publicadora_controller.index())
})

router.get("/:id", (req, res) => {
    res.json(publicadora_controller.show(req.params.id))
})

router.post("/", (req, res) => {
    const code = publicadora_controller.store(req.body)
    res.status(code).json()
})

router.put("/:id", (req, res) => {
    const code = publicadora_controller.update(req.body, req.params.id)
    res.status(code).json()
})

router.delete("/:id", (req, res) => {
    publicadora_controller.destroy(req.params.id)
    res.json()
})

module.exports = router