import{book} from "./book.js";
export class library{
    constructor(name,location){
        this.name = name,
        this.location = location,
        this.booklist = [];
    }
   /*
    @params => book (object)
  */

addBook(book){
    const{title,author,genre,isbn} = book;
    if(!title && !author && !genre && !isbn){
        return alert("details missing");
    }
    this.booklist.push(book);
}  

showBookList() {
    console.log(this.bookList);
  }
}


