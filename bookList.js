import { library } from "./library.js";

//const library = new library("My Library","Night City");
const bookList = 
  JSON.parse(localStorage.getItem("bookList")) || [];

const rootContainer = document.getElementById("root");
const filterInput = document.getElementById("filter");

function renderBooks(booksToRender = bookList){
    rootContainer.innerHTML = "";
    booksToRender.forEach((book) =>{
        const bookCard = document.createElement("div");
        bookCard.className = "book_card";
        bookCard.innerHTML = `
            <img src="./BOOK.png" alt="${book.title} cover" onerror="this.src='https://via.placeholder.com/100x130/cccccc/ffffff?text=No+Image'">
        <div>
        <h2 class="book-title">${book.title}</h2>
        <div class="book-meta">
             <span class="meta-tag">Author : ${book.author}</span>
             <span class="meta-tag">Genre : ${book.genre}</span>
        </div>
        <div class="book-meta">
             <span class="meta-tag">ISBN : ${book.isbn}</span>
             <span class="meta-tag">Year : ${book.publish_year}</span>
        </div>
        <div class="quantity">Quantity : ${book.quantity} available</div>
        </div>
        `;
    rootContainer.appendChild(bookCard);     
    });
}

//filter books based on input
function filterBooks(query){
    console.log(query);
    if (!query.trim()){
        renderBooks();
        return;
    }
    const filtered = bookList.filter(
        (book) =>
        book.title
        .toLowerCase()
        .includes(query.toLowerCase()) ||
    book.author
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    console.log(filtered);
    renderBooks(filtered);
}

//Event listener for real-time filtering
filterInput.addEventListener("input",(event) =>{
    filterBooks(event.target.value);
});

// //Initial render on page load
document.addEventListener("DOMContentLoaded",() =>{
    renderBooks();
});