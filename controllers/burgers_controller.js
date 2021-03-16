var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", (req, res) => {
    // console.log(req);
    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, result => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    //creates id = id
    var burgerId = req.params.id;
  
    burger.updateOne(burgerId, result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
// Export routes for server.js to use.
module.exports = router;