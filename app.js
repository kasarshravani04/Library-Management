import {book} from "./book.js";
import{Library} from "./library.js";
//target elements
// 1> form

const add_book_form = document.getElementById(
    "add_book_form"
)
const myLib = new Library("My Library","Night City");

// on submit function=>

function onsubmit(event){
    event.preventDefault();
    let bookTitle = event.target[0].value;
    let bookAuthor = event.target[1].value;
    let bookGenre = event.target[2].value;
    let bookIsbn = event.target[3].value;
    let bookPublicationYear = event.target[4].value;
    let bookQuantity = event.target[5].value;


const newBook = new book(
   bookTitle,
   bookAuthor,
   bookGenre,
   bookIsbn,
   bookPublicationYear,
   bookQuantity, 
);  
myLib.addBook(newBook);
myLib.showBookList();
console.log(myLib);

}