let test = require("ava")

let getResult = () => new Promise((ok, nope) => setTimeout(() => ok(421), 500))

test("tests stuff", async t => {
  t.is(await getResult(), 420)
})
