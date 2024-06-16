const {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const express = require("express");

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
