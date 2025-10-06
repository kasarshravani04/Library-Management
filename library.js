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
  let bks = this.bookList.filter(
    (b) => b.isbn === book.isbn
  );
  console.log(bks);

  if (bks.length > 0){
    bks[0].quantity += book.quantity;
    return alert(
      "book already , So quantity of that was increased"
    )
  };
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
      let h3 = document.createElement("h3");
      h4.innerText = book.author;
      div.appendChild(h3);
      let h4 = document.createElement("h4");
      h4.innerText = book.isbn;
      div.appendChild(h4);
      container.appendChild(div);
    } )

  }

  
}
