const express = require("express")
const book_router = require("./routes/book.js")
const rental_router = require("./routes/rental.js")
const student_router = require("./routes/student.js")
const app = express()
const port = 5000

app.use(express.json())

app.use("/student", student_router)
app.use("/rental", rental_router)
app.use("/book", book_router)


app.listen(port, () => {
  console.log(`Server running in ${port} port`)
})