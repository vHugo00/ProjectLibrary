const express = require("express");
const student_controller = require("../controllers/student")
const router = express.Router();

router.get("/", (req, res) => {
  res.json(student_controller.indexEstudantes())
})

router.get("/:id", (req, res) => {
  res.json(student_controller.showEstudante(req.params.id))
})

router.post("/", (req, res) => {
  const code = student_controller.storeEstudante(req.body)
  res.status(code).json()
})

router.put("/:id", (req, res) => {
  const code = student_controller.updateEstudante(req.body, req.params.id)
  res.status(code).json()
})

router.delete("/:id", (req, res) => {
  student_controller.destroy(req.params.id)
  res.json()
})

module.exports = router