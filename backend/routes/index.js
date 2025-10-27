const express = require('express');
const router = express.Router();

const producustsRouter = require('./products.js');
const categoriesRouter = require('./categories.js');

router.use('/products', producustsRouter);
router.use('/categories', categoriesRouter);

module.exports = router;