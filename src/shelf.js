
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
    shelf.splice(i, 1);
    }
  }
  return shelf;
};

function listTitles(shelf) {
  var shelfTitles = [];
  for (var i = 0; i < shelf.length; i++) {
  shelfTitles.push(shelf[i].title);
  }
  return shelfTitles.join(', ');
};

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
};

//
//
//
//
//
//
