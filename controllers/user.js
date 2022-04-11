var User = require("../models/user");
exports.postUsers = (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
  var user = new User({
    username: req.body.username,
    password: req.body.password,
  })
  console.log(user);
  user.save((err) => {
    if (err) res.send(err);
    else {
      res.json({ message: "New beer drinket added to locker room" });
    }
  });
};
exports.getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};
