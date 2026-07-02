const express = require("express");

const router = express.Router();


const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct

} = require("../controllers/productController");



// GET ALL PRODUCTS
router.get(
  "/",
  getProducts
);


// GET SINGLE PRODUCT
router.get(
  "/:id",
  getProduct
);



// ADD PRODUCT

router.post(
  "/",
  addProduct
);



// UPDATE PRODUCT

router.put(
  "/:id",
  updateProduct
);



// DELETE PRODUCT

router.delete(
  "/:id",
  deleteProduct
);



module.exports = router;