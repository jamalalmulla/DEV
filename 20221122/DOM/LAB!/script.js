document.body.style.fontFamily = "Arial, sans-serif"


let nickNameEle = document.getElementById("nickname");
nickNameEle.innerHTML = "Jamaly"

let animaleEle = document.getElementById("favorite");
animaleEle.innerHTML = "Cat"

let hometownEle = document.getElementById("hometown");
hometownEle.innerHTML = "Manama"

const listitem = document.querySelectorAll('li');
addClass(listitem);
function addClass(listitem) {
   listitem.forEach(function(item) {
      item.classList.add('listitem');
   } );
   console.log(listitem)
}

textColor(listitem);
function textColor(listitem){
   listitem.forEach(function(item) {
        item.style.color="rebeccapurple";
     } );
}




const img = document.createElement("img");
img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png";
img.alt ='image';
document.querySelector(".profilePicture").appendChild(img);

var books = [
   {
     title: "The Design of Everyday Things",
     author: "Don Norman",
     alreadyRead: false,
   },
   {
     title: "The Most Human Human",
     author: "Brian Christian",
     alreadyRead: true,
   },
   {
     title: "In Search of Lost Time",
     author: "Marcel Proust",
     alreadyRead: true,
   },
   {
     title: "Ulysses",
     author: "James Joyce",
     alreadyRead: true,
   },
   {
     title: "The Great Gatsby",
     author: "F. Scott Fitzgerald",
     alreadyRead: true,
   },
 ];

let booksDiv = document.querySelector('.favoriteBooks');
let BooksH1 = document.createElement('h1');
BooksH1.innerText = "My Books List";
booksDiv.appendChild(BooksH1);
books.forEach(book => {
    let paragraph = document.createElement('p');
    paragraph.innerText = `${book.title}, by ${book.author}. `
    document.body.appendChild(paragraph);
});