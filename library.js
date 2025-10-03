import{book} from "./book.js";
const container = document.getElementById("root");
export class library{
    constructor(name,location){
        this.name = name,
        this.location = location,
        this.bookList = [];
    }
   /*
    @params => book (object)
  */

addBook(book){
    /*const{title,author,genre,isbn} = book;
    if(!title && !author && !genre && !isbn){
        return alert("details missing");
    }*/
    this.bookList.push(book);
 
    localStorage.setItem(
    "bookList",
    JSON.stringify(this.bookList)
  );

  this.showBookList() ;
}
  showBookList(){
    container.innerHTML= "";
    this.bookList.forEach((book) =>{
      let div = document.createElement("div");
      div.classList = "book__card";
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      div.appendChild(h2);
      container.appendChild(div);
    } )

  }
}
