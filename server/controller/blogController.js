const Blog = require("../model/blogModel");
const logger = require("../logger/logger");

async function createBlog(req, res) {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).send({
        success: false,
        message: "Missing required fields",
        data: null
      });
    }

    const newBlog = { title, content, author };
    const createdBlog = await Blog.create(newBlog);

    return res.status(200).send({
      success: true,
      message: "Blog created successfully",
      data: createdBlog
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find({}).select("-_id");

    if (blogs.length > 0) {
      return res.status(200).send({
        success: true,
        message: "Blogs fetched successfully",
        data: blogs
      });
    }

    return res.status(400).send({
      success: false,
      message: "No blogs found",
      data: []
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

async function getBlogById(req, res) {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).select(
      "-_id"
    );

    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog not found",
        data: null
      });
    }

    return res.status(200).send({
      success: true,
      message: "Blog found successfully",
      data: blog
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

async function updateBlog(req, res) {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(400).send({
        success: false,
        message: "Blog not found or update failed",
        data: null
      });
    }

    return res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(
      id
    );

    if (!deletedBlog) {
      return res.status(400).send({
        success: false,
        message: "Blog not found or already deleted",
        data: null
      });
    }

    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
      data: null
    });
  } catch (error) {
    logger.error(error.stack);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      data: JSON.stringify(error)
    });
  }
}

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
