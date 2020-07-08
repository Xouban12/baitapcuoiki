const express = require('express');

const bookControllers = require('../controllers/book-controller');

const router = express.Router();


router.get('/', bookControllers.getAllBook);

router.post('/', bookControllers.createBook);

router.patch('/:pid', bookControllers.updateBook);

router.patch('/isComplete/:pid', bookControllers.updateBookIsComplete);

router.delete('/:pid', bookControllers.deleteBook);

module.exports = router;