const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.getBlogs);

router.post("/", blogController.createBlog);

router.get("/:id", blogController.getBlogById);

router.put("/:id", blogController.updateBlog);

router.delete("/:id", blogController.deleteBlog);

module.exports = router;
