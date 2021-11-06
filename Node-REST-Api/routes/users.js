const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Hey its User route")
})

module.exports = router;