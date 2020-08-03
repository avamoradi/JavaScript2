/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
   let ul = document.createElement('ul');
   ul.style.display = "flex";
   ul.style.justifyContent = "space-around";
   ul.style.listStyle = "none";
   const bookList = document.querySelector('#bookList');
   bookList.appendChild(ul);

  books.forEach(element => {
     let bookTitle = element.title;
     let bookAuthor = element.author;
     let p = document.createElement('p');
     p.innerText = bookTitle + " - " + bookAuthor ;
       
    const li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(p) ;
    li.style.width = "30%";

    let a  = document.createElement('a');
    let image = document.createElement('img');
    image.className = "bKImage";
    image.style.width = "40%";
    a.appendChild(image);
    li.appendChild(a);
    
    if (element.alreadyRead == false) {
      li.style.backgroundColor = 'red';
    } else {
      li.style.backgroundColor = 'green';
    }
    
  });

  let coverImage = document.querySelectorAll('.bKImage');
  coverImage[0].src = "https://media.s-bol.com/7ov383lj3Rr/550x824.jpg";
  
  coverImage[1].src = "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3074/9780307476708.jpg";

  coverImage[2].src = "https://www.studystore.nl/images/9780132119177/3/1";
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

let ulElement = createBookList(books);

//document.querySelector("#bookList").appendChild(ulElement);