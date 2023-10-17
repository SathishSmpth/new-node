const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const globalError = require("./controller/errorController");

const productsRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/auth", authRoutes);

// Unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.status = "fail";
  error.statusCode = 404;
  next(error);
});

// global error
app.use(globalError);

module.exports = app;
