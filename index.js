let express = require("express")
let app = express()

app.get("/", (req, res) => res.send("hello"))

let port = process.env.PORT || 8080

app.listen(port, "0.0.0.0")
console.log(`server up on port ${port}`)
