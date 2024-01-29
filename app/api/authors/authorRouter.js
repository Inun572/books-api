const { Router } = require('express');
const { getAuthors } = require('./authorController.js');

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthors);

module.exports = router;
