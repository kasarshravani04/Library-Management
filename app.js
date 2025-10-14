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


//Submit Handler
function onSubmit(event){
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre= document.getElementById("genre").value;
    const isbn = document.getElementById("isbn").value;
    const publishYear = parseInt(
      document.getElementById("publish_year").value
    );
    const quantity =parseInt(
       document.getElementById("quantity").value
    );
    
const newBook = new book(
   title,
   author,
   genre,
   isbn,
   publishYear,
   quantity, 
);  
myLib.addBook(newBook);

//Reset form
addBookFrom.reset();

alert(
  "Book added successfully! Check the book list page."
);

}