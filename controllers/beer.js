var Beer = require("../models/beer");
exports.PostBeers = (req, res) => {
  var beer = new Beer();
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;
  beer.save((err) => {
    if (err) throw err;
    else {
      res.json({ message: "Added Successfully", data: beer });
    }
  });
}
exports.GetBeers = (req, res) => {
  Beer.find((err, beer) => {
    if (err) res.send(err);
    console.log("in get");
    res.json(beer);
  });
}
exports.GetBeer = (req, res) => {
  Beer.findById(req.params.id, (err, beer) => {
    console.log(req.params.id);
    if(err) res.json(err);
    else{res.json(beer)}
  });
}
exports.PutBeer = (req,res)=>{
    Beer.findById(req.params.id,(err,beer)=>{
        if(err) throw err
        else{
        beer.quantity = req.body.quantity;
        beer.save(err=>{
            if(err) throw err
            res.json(beer)
        })
    }
    })
}
exports.DeleteBeer = (req,res)=>{
    Beer.findByIdAndRemove(req.params.id,(err)=>{
        if(err) throw err
        res.json("Your Beer has been Deleted")
    })
}