let express = require("express")
let redis = require("redis").createClient({ host: "redis" })
let app = express()

redis.set("counter", 0)

app.get("/", (req, res) => {
  redis.get("counter", (err, value) => {
    let counter = parseInt(value)
    redis.set("counter", counter + 1)
    res.send(`counter is at ${counter}`)
  })
})

let port = process.env.PORT || 8080

app.listen(port, "0.0.0.0")
console.log(`server up on port ${port}`)
