

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
  return library;
};

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    return library.shelves.fantasy.push(book);
  } else if (book.genre === 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  } else {
    return library.shelves.fiction.push(book);
  }
};

//it should only checkout a book if the book is on the shelves
function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
};



//someone else did this: what am I looking at???
// function addBook(library, book) {
//   library['shelves'][book.genre].push(book)
// console.log(library.shelves);
// }
