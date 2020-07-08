const mongoose = require('mongoose')

const Book = require('../models/book');

const getAllBook = async(req, res, next) => {
    let ac;
    try {
        ac = await Book.find();
    } catch (err) {
        const error = new Error("could not find");
        return next(error);
    }
    res.json({ ac });
}
const createBook = async(req, res, next) => {

    const { name, isComplete } = req.body;

    const createdBook = new Book({
        name,
        isComplete,
    });
    try {
        await createdBook.save();
    } catch (err) {
        const error = new Error(
            'Creating Book failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ Book: createdBook.toObject({ getters: true }) });
};
//update name
const updateBook = async(req, res, next) => {
    const { name } = req.body;
    const BookId = req.params.pid;

    let BookUpdate;
    try {
        BookUpdate = await Book.findById(BookId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not find a Book.',
            500
        );
        return next(error);
    }

    BookUpdate.name = name;
    try {
        await BookUpdate.save();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not update Book.',
            500
        );
        return next(error);
    }

    res.status(200).json({ Book: BookUpdate.toObject({ getters: true }) });
};
//upadate complete true/false
const updateBookIsComplete = async(req, res, next) => {
    const { isComplete } = req.body;
    const BookId = req.params.pid;

    let BookUpdate;
    try {
        BookUpdate = await Book.findById(BookId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not find a Book.',
            500
        );
        return next(error);
    }

    BookUpdate.isComplete = isComplete;
    try {
        await BookUpdate.save();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not update Book.',
            500
        );
        return next(error);
    }

    res.status(200).json({ Book: BookUpdate.toObject({ getters: true }) });
};
const deleteBook = async(req, res, next) => {
    const BookId = req.params.pid;

    let BookDelete;
    try {
        BookDelete = await Book.findById(BookId);
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Book.',
            500
        );
        return next(error);
    }

    if (!BookDelete) {
        const error = new Error('Could not find Book for this id.', 404);
        return next(error);
    }

    try {
        await BookDelete.remove();
    } catch (err) {
        const error = new Error(
            'Something went wrong, could not delete Book.',
            500
        );
        return next(error);
    }

    res.status(200).json({ message: 'Deleted Book.' });
};

exports.getAllBook = getAllBook;
exports.createBook = createBook;
exports.updateBook = updateBook;
exports.updateBookIsComplete = updateBookIsComplete;
exports.deleteBook = deleteBook;