const express = require("express");
const book_controller = require("../controllers/book")
const router = express.Router();

router.get("/", (req, res) => {
  res.json(book_controller.indexLivros())
})

router.get("/:id", (req, res) => {
  res.json(book_controller.showLivro(req.params.id))
})

router.post("/", (req, res) => {
  const code = book_controller.storeLivro(req.body)
  res.status(code).json()
})

router.put("/:id", (req, res) => {
  const code = book_controller.updateLivro(req.body, req.params.id)
  res.status(code).json()
})

router.delete("/:id", (req, res) => {
  book_controller.destroy(req.params.id)
  res.json()
})

module.exports = router