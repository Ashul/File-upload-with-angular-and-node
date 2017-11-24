//======================================
// Get the required packages ===========
//======================================
var express = require('express');
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var fs = require('fs');
var productRouter = express.Router();
     var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './client/img/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');


module.exports.Controller = function(app){
 /* Gets the list of all files from the database
 */
productRouter.get('/all', function (req, res, next) {
  Product.find({},  function (err, uploads) {
    if (err) next(err);
    else {
      res.send(uploads)
    
    }
  });
});

 /* DELETE ALL
 */
productRouter.get('/delete', function (req, res, next) {
  Product.remove({},  function (err, uploads) {
    if (err) next(err);
    else {
      res.send(uploads)
    
    }
  });
});

//======================================
// Add Products ========================
//======================================
     /** API path that will upload the files */
     app.post('/create', upload, function (req, res, next) {
      console.log(req.file.filename)
      var product = new Product({
        productName:req.body.productName,
        price:req.body.price,
        productImg:req.file.filename
      })
      product.save(function(err, product){
        if(err){console.log(err)}
        else{
          res.send(product)
        }
      })

     })
    


app.use('/product', productRouter)
}