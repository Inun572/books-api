const { Router } = require('express');

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthors);

module.exports = router;
