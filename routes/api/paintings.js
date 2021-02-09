const router = require("express").Router();
const booksController = require("../../controller/paitningController");

// Matches with "/api/books/"
router.route("/")
  .get(paintingController.findAll)


// Matches with "/api/books/:id"
// router
//   .route("/:search")
//   .get(booksController.searchBooks)

// router.route("/:id")
//   // .get(booksController.findById)
//   .delete(booksController.remove);

module.exports = router;