/*

Representing Books

1. Write a function, makeBook, that takes as arguments different aspects of a book and returns an object 
representing that book that has the proper structure (we call this a factory function).

Think about some different attributes of books...

All books have:
Title
Author
Price
Genre
Pages

Up until this point, you were probably manually creating book objects like so:

var book1 = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  price: 6.75,
  genre: "fantasy",
  pages: 336
};

var book2 = {
  // key/value pairs...
};

Your function must accept at least two arguments which include the title and author of the book.

------------------------------

Formatting

2. Write a function called displayBook that takes a book as an argument, and "pretty prints" the important parts.

Look at one of your book objects in the console. The object inspector is nice, but it would be nice if we could 
easily view important attributes of a book without having to click on all of its properties with the inspector.

Example:

var sorcerersStone = makeBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling");

function displayBook(book) {
  // ...
}

displayBook(sorcerersStone);
// => "Harry Potter and the Sorcerer's Stone, by J.K. Rowling"

The output string above is only an example – the idea is that, given a book object, displayBook returns some string 
that shows some subset of the information about the book that is deemed important – what is shown is up to you.

------------------------------

Handling Multiple Books

3. Write a function, displayBooks, that, given an array of books, returns a single string consisting of all of the 
books formatted using the displayBook function you defined before.

If you haven't already, create an array to hold all of the books that you created above called "books".

You have written the function displayBook that can be used to display a single book as a string

Each book should be numbered, and separated with a newline character so that each book is shown on a separate line 
in the console. The newline character is specified with a special escaped character in a string:

// Enter the below line into a console
"Hello\nWorld!"; // the \n character is a newline

function displayBooks(books) {
  // ...
}

displayBooks(books);
// => "1. Harry Potter and the Sorcerer's Stone...\n2. Snow Crash, ..."

------------------------------

Searching

4. Write a function, searchBooks, that, given a query and an array of books, searches the array of books for 
"matching" books. You'll need to make a few decisions when implementing a search algorithm, like:

What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with 
one field, e.g. title)? Should the search be case-sensitive?

How will the search work? Will it only work from the beginning of a field, or from anywhere within?

A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book
 – and returns true if the book is a match, and false otherwise. Some Hints:

"Harry Potter".toLowerCase(); // => "harry potter"
"Harry Potter".substr(0, 5); // => "Harry"
var query = "Harry";
"Harry Potter".substr(0, query.length); // => "Harry"
"Harry Potter".indexOf("Pot"); // => 6
"Harry Potter".indexOf("dog"); // => -1

*/

var books =[
{book: "book1", title: "Catcher in the Rye", author: "J.D. Salinger"}, 
{book: "book2", title: "Shawshank Redemption", author: "Stephen King" },
{book: "book3", title: "The Outsiders", author: "S.E. Hinton"}
];

function makeBook(number, title, author, genre){
  var book = "book" + number
  return {
    book: book,
    title: title,
    author: author,
  }
};

function displayBook(book){
  return book.title + ' ' + 'by' +' ' + book.author;
}

function displayBooks(books) {
  var string2 = '';
  for(var i=0; i<books.length; i++) {
    var number = i + 1 + '.';
    var title = function displayBook(book) {return: books[i].title};
    var string = number + " " + title + "\n"
    var string2 = string2 + string;
  }
  return string2;
}

displayBooks(books);