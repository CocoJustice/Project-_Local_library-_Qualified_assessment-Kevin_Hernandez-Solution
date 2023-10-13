function getTotalBooksCount(books) {
  return books.length; 
}

function getTotalAccountsCount(accounts) {
  return accounts.length; 
}

function getBooksBorrowedCount(books) {
  let borrowedBooks=0;
  books.forEach(book=> {
   if(!book.borrows[0].returned)borrowedBooks++;
  })
  return borrowedBooks;
}
function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
