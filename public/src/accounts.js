function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => {
   const lastNameA = accountA.name.last;
   const lastNameB = accountB.name.last;
   return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
 });
}

function getTotalNumberOfBorrows(account, books) {
 const { id } = account;
 let total = 0;
 for (let book in books) {
   const { borrows } = books[book];
   borrows.forEach((element) => {
     if (element.id === id) {
       total++; }
   });
}
 return total;
}
function getBooksPossessedByAccount(account, books, authors) {
const possessed = [];
 books.map((book) => {
   book.borrows.map((borrow) => {
     authors.map((author) => {
      if (author.id === book.authorId) book["author"] = author;  });
     if (borrow.returned === false && borrow.id === account.id) {
       possessed.push(book); }
   });
 });
 return possessed;
}
module.exports = {
 findAccountById,
 sortAccountsByLastName,
 getTotalNumberOfBorrows,
 getBooksPossessedByAccount,
};
