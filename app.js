import {book} from "./book.js";
import {library} from "./library.js";
//target elements
// 1> form

const add_book_form = document.getElementById(
    "add_book_form"
)
console.log(add_book_form);
add_book_form.addEventListener("submit", onSubmit);
const myLib = new library("My Library","Night City");


myLib.bookList = 
JSON.parse(localStorage.getItem("bookList")) || [];


// on submit function=>

function onSubmit(event){
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
/*myLib.showBookList();
console.log(myLib);*/

  event.target[0].value = "";
  event.target[1].value = "";
  event.target[2].value = "Select Option";
  event.target[3].value = "";
  event.target[4].value = "";
  event.target[5].value = "";

}