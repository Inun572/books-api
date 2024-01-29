const { Router } = require('express');
const { getPublishers } = require('./publishersController');

const router = Router();

router.get('/', getPublishers);
router.get('/:id', getPublishers);

module.exports = router;
