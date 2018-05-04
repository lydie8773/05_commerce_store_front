const express = require("express");
const nunjucks = require("nunjucks");
const database = require("./db/database");

const app = express();

const port = process.env.PORT || 3003;


nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.use(express.static("public"));


app.get("/", function(request, res) {
  database.getAllCategories()
    .then(function(result) {
      // console.log(result);
      res.render("home", {
        categories: result
      });
    })
    .catch(function(err) {
      console.warn(err);
    });

  // result.render("home", {
  //   categories: database.getAllCategories()
  // });
});

app.get("/category/:categoryId", function(req, res){
  let category_id = req.params.categoryId;

  database.getProductsByCategory(category_id)
    .then(function(result) {
      res.render("productList", {
        productList: result
      });
    })
    .catch(function(err) {
      console.warn(err);
    });

})

app.get("/product/:productId", function(req, res){
  let product_Id = req.params.productId;

  database.getProductsById(product_Id)
    .then(function(result) {
      res.render("productDetail", {
        productDetail: result
      });
    })
    .catch(function(err) {
      console.warn(err);
    });

})

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});