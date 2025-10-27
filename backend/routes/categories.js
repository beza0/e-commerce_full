const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;
    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).send("Category created");
  } catch (error) {
    res.status(500).send("Server error");
  }
});
//Tüm kategorileri getirme
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//belirli bir kategoriyi getirme
router.get("/:categoryId", async (req, res) => {
    try {
  const categoryId = req.params.categoryId;
  const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).send("Server error");
  }
});
module.exports = router;
