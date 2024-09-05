const express = require("express");
const rental_controller = require("../controllers/rental")
const router = express.Router();

router.get("/", (req, res) => {
  res.json(rental_controller.indexAlugueis())
})

router.get("/:id", (req, res) => {
  res.json(rental_controller.showAluguel(req.params.id))
})

router.post("/", (req, res) => {
  const code = rental_controller.storeAluguel(req.body)
  res.status(code).json()
})

router.put("/:id", (req, res) => {
  const code = rental_controller.updateAluguel(req.body, req.params.id)
  res.status(code).json()
})

router.delete("/:id", (req, res) => {
  rental_controller.destroy(req.params.id)
  res.json()
})

module.exports = router