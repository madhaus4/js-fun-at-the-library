// function createTitle() {
//   'Oath of Sunshine';
// }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
}

function saveReview(newReview, reviews) {
  if (!reviews.length) {
    reviews.push(newReview);
  }
  for (var i = 0; i < reviews.length; i++) {
    if (newReview === reviews[i]) {
      return reviews;
    } else {
      reviews.push(newReview);
      return reviews;
    }
  }
};

function calculatePageCount(bookTitle, bookPageCount) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * .75
  return book.pageCount;
};
