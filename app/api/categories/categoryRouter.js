const { Router } = require('express');
const { getCategories } = require('./categoryController');

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategories);

module.exports = router;
