let express = require("express")
let app = express()

app.get("/", (req, res) => res.send("hello"))

let port = process.env.PORT

app.listen(8080, "0.0.0.0")
console.log(`server up on port ${port}`)
