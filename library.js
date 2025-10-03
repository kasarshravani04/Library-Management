import{book} from "./book.js";
const container = document.getElementById("root");
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
    /*const{title,author,genre,isbn} = book;
    if(!title && !author && !genre && !isbn){
        return alert("details missing");
    }*/
    this.booklist.push(book);
 
    localStorage.setItem(
    "booklist",
    JSON.stringify(this.booklist)
  );

  this.showBookList() ;
}
  showBookList(){
    container.innerHTML= "";
    this.booklist.forEach((book) =>{
      let div = document.createElement("div");
      div.classList = "book__card";
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      div.appendChild(h2);
      container.appendChild(div);
    } )

  }
}
