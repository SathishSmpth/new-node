const express = require("express");
const router = express();

// const productControllers = require("../controller/productController");
const {
  createProduct,
  getAProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const { isAuth } = require("../middleware/isAuth");

router.get("/", getAllProducts);
router.post("/", isAuth, createProduct);
router
  .route("/:id")
  .get(getAProduct)
  .put(isAuth, updateProduct)
  .delete(isAuth, deleteProduct);

module.exports = router;
