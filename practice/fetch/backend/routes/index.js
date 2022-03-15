var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send({ message: "Get request received" });
});

router.get("/index", function (req, res, next) {
	res.send({ message: "Get request received" });
});

router.post("/index", function (req, res, next) {
	let message = req.body.message;
	res.send({ message: "Post request received: " + message });
});

router.put("/index", function (req, res, next) {
	res.send({ message: "Put request received" + req.body.message });
});

router.delete("/index", function (req, res, next) {
	res.send({ message: "Delete request received" });
});

router.patch("/index", function (req, res, next) {
	res.send({ message: "Patch request received" });
});

module.exports = router;
