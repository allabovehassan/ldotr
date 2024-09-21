const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connection = require("./config/db");
const logger = require("./logger/logger");
require("dotenv").config();

//routes
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRoutes");

app.use(cors());
app.use(
  express.json({
    limit: "50mb"
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.text({ type: "application/xml" }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//routes
app.use("/users", userRouter);
app.use("/blogs", blogRouter);


//express server
app.listen(process.env.PORT || 3001, async () => {
  try {
    await connection;
    logger.info(`Connected To DataBase`);
  } catch (error) {
    logger.info(
      `${JSON.stringify({ Error: error.message })}`
    );
  }
  logger.info(
    `server is running at ${process.env.PORT || 3001}`
  );
});
