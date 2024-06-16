const Blog = require("../model/blog.model");
const getAllBlogs = async (req, res) => {
   try {
     const blogs = await Blog.find();
     res.status(200).json(blogs);
   } catch (error) {
     res.status(500).send(error);
   }
};
const createBlog = async (req, res) => {
   try {
     const blog = await Blog.create(req.body);
     res.status(201).json(blog);
   } catch (error) {
     res.status(500).send(error);
   }
}

const updateBlog = async (req, res) => {
   try {
     const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
     });
     res.status(200).json(blog);
   } catch (error) {
     res.status(500).send(error);
   }
}

const getBlog = async (req, res) => {
   try {
     const blog = await Blog.findById(req.params.id);
     res.status(200).json(blog);
   } catch (error) {
     res.status(500).send(error);
   }
}
const deleteBlog =async (req, res) => {
   try {
     const blog = await Blog.findByIdAndDelete(req.params.id);
     res.status(200).json(blog);
   } catch (error) {
     res.status(500).send(error);
   }
}

module.exports = { getAllBlogs, getBlog,deleteBlog,createBlog,updateBlog};
