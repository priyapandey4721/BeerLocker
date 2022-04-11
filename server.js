var express = require("express");
var mongoose = require("mongoose");
var app = express();
var port = 4000;
var beerController = require("./controllers/beer")
var userController = require("./controllers/user")
var router = express.Router();
var passport = require('passport')
var authController = require("./controllers/auth")

router.get("/", (req, res) => {
  res.json({ message: "Your API is working now " });
});
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
router.route("/beer")
.post(authController.isAuthenticated,beerController.PostBeers)
.get(authController.isAuthenticated,beerController.GetBeers)

router.route("/beer/:id")
.get(authController.isAuthenticated,beerController.GetBeer)
.put(authController.isAuthenticated,beerController.PutBeer)
.delete(authController.isAuthenticated,beerController.DeleteBeer)

router.route("/users")
.post(authController.isAuthenticated,userController.postUsers)
.get(authController.isAuthenticated,userController.getUsers)

app.use("/api", router);
mongoose.connect(
  "mongodb://localhost:27017/beerlocker",
  console.log("MongoDb Connected")
);
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Working on ${port}`);
});
